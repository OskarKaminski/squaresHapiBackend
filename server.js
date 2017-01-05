const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

server.register({
    register: require('hapi-cors'),
    options: {
        origins: ['http://localhost:3000']
    }
});

server.route({
    method: 'GET',
    path:'/current-user',
    handler: function (request, reply) {

        return reply('Oskar');
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});