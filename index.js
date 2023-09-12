const http = require('http');
const url = require('url');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Parse the URL to get query parameters
  const parsedUrl = url.parse(req.url, true);
  const { slack_name, track } = parsedUrl.query;

  // Get the current day of the week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = daysOfWeek[new Date().getUTCDay()];

  // Get the current UTC time with validation of +/-2 minutes
  const now = new Date();
  const currentUTC = now.toISOString().replace(/\.\d{3}Z$/, 'Z');

  // Construct the response JSON
  const response = {
    slack_name,
    current_day: currentDay,
    utc_time: currentUTC,
    track,
    github_file_url: 'https://github.com/Bellamalwa/backendjavascript/blob/main/index.js', 
    github_repo_url: 'https://github.com/Bellamalwa/backendjavacript', 
    status_code: 200,
  };

  // Set response headers
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;

  // Send the JSON response
  res.end(JSON.stringify(response));
});

// Listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
