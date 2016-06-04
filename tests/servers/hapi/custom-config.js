'use strict';

var miniprofiler = require('../../../lib/miniprofiler.js');

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 8083 });

miniprofiler.configure({
	popupRenderPosition: 'right'
});

server.register(miniprofiler.hapi(), (err) => {
  if (err) throw (err);
});

server.route({
  method: 'GET',
  path:'/',
  handler: function(request, reply) {
    return reply(request.app.miniprofiler.include());
  }
});

module.exports = server;
