import { clientPromise } from '@lib/mongodb';

export const get = async () => {
  const connection = await clientPromise;
  const docs = await connection.db().collection('data').find().toArray();
  return {
    status: 200,
    body: {
      docs
    }
  }
}
export const post = async ({ request }) => {
  const body = await request.json();
  const connection = await clientPromise;
  await connection.db().collection('data').insertOne(body);
  return {
    status: 200,
    body: {}
  }
}