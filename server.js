const http = require('http');
const axios = require('axios');
const querystring = require('querystring');

// Replace these with your own values
const clientID = '1143219719657853';
const clientSecret = '58331ff13d70f0a637ec23d48e9c2333';
const redirectURI = 'http://localhost:3000/auth/instagram/callback';

const server = http.createServer(async (req, res) => {
  const { url } = req;

  if (url === '/auth/instagram') {
    const authURL = `https://api.instagram.com/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=code`;
    res.writeHead(302, { Location: authURL });
    res.end();
  } else if (url.startsWith('/auth/instagram/callback')) {
    
    const { code } = querystring.parse(url.substring(url.indexOf('?') + 1));
    const accessTokenURL = 'https://api.instagram.com/oauth/access_token';
    const data = querystring.stringify({
      client_id: clientID,
      client_secret: clientSecret,
      grant_type: 'authorization_code',
      redirect_uri: redirectURI,
      code,
    });
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    try {
      const response = await axios.post(accessTokenURL, data, config);
      const { access_token } = response.data;
      // Do something with the access token, such as saving it to a database or session
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<html><body><h1>Access token obtained successfully!</h1></body></html>');
      res.end();
    } catch (error) {
      console.error(error);
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.write('<html><body><h1>Error obtaining access token</h1></body></html>');
      res.end();
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<html><body><h1>Page not found</h1></body></html>');
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});
