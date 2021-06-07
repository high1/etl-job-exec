import { FastifyInstance } from 'fastify';
import { dropAllCollections } from 'database';
import { extractTransformLoad } from 'etl';
import type { EtlRequest } from 'types/api';

const routes = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get('/ping', async () => Promise.resolve('pong'));

  fastify.post<{ Body: EtlRequest }>('/etl', async ({ body }, reply) => {
    const result = await extractTransformLoad(body);
    await reply.code(result ? 200 : 500).send({ etl: result ? 'success' : 'failed' });
    console.log(result ? 'Sucessfuly etld the data.' : 'Failed to write the data!');
  });

  fastify.patch('/clr', async (_, reply) => {
    const result = await dropAllCollections();
    await reply.code(result ? 200 : 500).send({ clr: result ? 'success' : 'failed' });
    console.log(result ? 'Sucessfuly cleared all data.' : 'Failed to delete the data!');
  });

  await Promise.resolve();
};

export default routes;
