exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const payload = JSON.parse(event.body);

    // Get credentials from environment variables
    const username = process.env.CORE_API_USERNAME;
    const password = process.env.CORE_API_PASSWORD;

    if (!username || !password) {
      console.error('Missing API credentials');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Server configuration error' }),
      };
    }

    // Create Basic Auth header
    const credentials = Buffer.from(`${username}:${password}`).toString('base64');

    // Forward request to API
    const response = await fetch(
      'https://grashobber.core-smartwork.com/api/expert/candidate/jobapplications',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${credentials}`,
          'X-API-VERSION': 'V1',
          'X-Api-Client': 'swagger-ui',
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      console.error(`API error: ${response.status}`);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'API request failed' }),
      };
    }

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
