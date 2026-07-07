const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql';

const contributionQuery = `
  query ContributionCalendar($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        hasAnyRestrictedContributions
        restrictedContributionsCount
        contributionCalendar {
          totalContributions
          weeks {
            firstDay
            contributionDays {
              contributionCount
              contributionLevel
              date
              weekday
            }
          }
        }
      }
    }
  }
`;

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const username = process.env.GITHUB_USERNAME || 'kevaleaditya1';
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return res.status(500).json({
      error: 'Missing GITHUB_TOKEN environment variable'
    });
  }

  const to = new Date();
  const from = new Date(to);
  from.setFullYear(from.getFullYear() - 1);
  from.setDate(from.getDate() + 1);

  try {
    const response = await fetch(GITHUB_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github+json'
      },
      body: JSON.stringify({
        query: contributionQuery,
        variables: {
          username,
          from: from.toISOString(),
          to: to.toISOString()
        }
      })
    });

    if (!response.ok) {
      const failureBody = await response.text();
      return res.status(response.status).json({
        error: 'GitHub GraphQL request failed',
        details: failureBody
      });
    }

    const payload = await response.json();

    if (payload.errors?.length) {
      return res.status(502).json({
        error: 'GitHub GraphQL returned errors',
        details: payload.errors
      });
    }

    const collection = payload?.data?.user?.contributionsCollection;
    const calendar = collection?.contributionCalendar;

    if (!calendar) {
      return res.status(404).json({ error: 'Contribution calendar not found' });
    }

    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');

    return res.status(200).json({
      username,
      from: from.toISOString(),
      to: to.toISOString(),
      totalContributions: calendar.totalContributions,
      hasAnyRestrictedContributions: collection.hasAnyRestrictedContributions,
      restrictedContributionsCount: collection.restrictedContributionsCount,
      weeks: calendar.weeks
    });
  } catch (error) {
    return res.status(500).json({
      error: 'Unexpected server error',
      details: error?.message || 'Unknown error'
    });
  }
}