const http = require('http');
const server = require('./server');

const port = server.get('port');

require('dotenv').config();


http.createServer(server).listen(port, () => {
    console.log(`server is listening port ${process.env.PORT}`);
});