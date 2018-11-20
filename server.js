const handler = require('serve-handler');
const http = require('http');
 
const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  return handler(request, response, {
      public: 'dist'
  });
})
 
server.listen(port, () => {
  console.log(`info: Twitch website now listening on ${port}`);
});