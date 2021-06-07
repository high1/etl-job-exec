import { connection } from 'mongoose';

export const database = 'etl-task';
export const host = 'etl-mongo';
export const connectionString = `mongodb://${host}:27017/${database}`;

connection.once('open', () => console.log('Connected to the database.'));
connection.on('error', () => console.log('Error connecting to the database!'));

export const connect = async (): Promise<void> => {
  if (connection.readyState) return;

  try {
    await connection.openUri(connectionString, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (error: unknown) {
    console.log(error instanceof Error ? `${error.name} ${error.message}` : error);
  }
};

export const disconnect = async (): Promise<void> => {
  if (!connection.readyState) return;

  try {
    await connection.close();
    console.log('Closed database connection.');
  } catch (error: unknown) {
    console.log(error instanceof Error ? `${error.name} ${error.message}` : error);
  }
};

export const dropAllCollections = async (): Promise<boolean> => {
  if (connection.readyState) {
    console.warn('Already connected!');
    return false;
  }

  try {
    await connect();
    await connection.db.dropDatabase();
    return true;
  } catch (error: unknown) {
    console.log(error instanceof Error ? `${error.name} ${error.message}` : error);
    return false;
  } finally {
    await disconnect();
  }
};
