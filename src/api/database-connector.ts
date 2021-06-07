import { FastifyInstance } from 'fastify';
import fastifyMongo from 'fastify-mongodb';
import { connectionString } from 'database';

const databaseConnector = (fastify: FastifyInstance): FastifyInstance =>
  fastify.register(fastifyMongo, {
    url: connectionString,
  });

export default databaseConnector;
