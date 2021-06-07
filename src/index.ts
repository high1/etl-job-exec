import fastify, { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import databaseConnector from 'api/database-connector';
import routes from 'api/routes';

const server: FastifyInstance = fastify({ logger: true });

void server.register(fastifyPlugin(databaseConnector));
void server.register(routes);

server.listen(4000, '0.0.0.0', (error) => {
  if (error) {
    server.log.error(error);
    throw error;
  }

  server.log.info(`Server listening on port 4000.`);
});
