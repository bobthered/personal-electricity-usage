  // imports
  import { ObjectId } from 'mongodb';
  import { clientPromise } from '@lib/mongodb';

  export const del = async ({ request }) => {
    let { _id } = await request.json();
    _id = ObjectId(_id);
    const connection = await clientPromise;
    const { value: doc } = await connection.db().collection('data').findOneAndDelete({ _id });
    return {
      status: 200,
      body: {
        doc
      }
    }
  }

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
    body._id = new ObjectId();
    const connection = await clientPromise;
    await connection.db().collection('data').insertOne(body)
    return {
      status: 200,
      body: { doc : body  }
    }
  }