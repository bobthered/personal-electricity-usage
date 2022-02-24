import { clientPromise } from '@lib/mongodb';

export async function get () {
  const connection = await clientPromise;
  const docs = await connection.db().collection('data').find().toArray();
  return {
    status: 200,
    body : {
      docs
    }
  }
}