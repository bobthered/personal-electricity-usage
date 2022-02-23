// imports
// eslint-disable-next-line no-unused-vars
import _ from 'dotenv/config';
import { MongoClient } from 'mongodb';

const db = process.env['MONGO_DB'];
const username = process.env['MONGO_USERNAME'];
const password = process.env['MONGO_PASSWORD'];
const uri = process.env['MONGO_URI']
  .replace('{{MONGO_DB}}', db)
  .replace('{{MONGO_USERNAME}}', username)
  .replace('{{MONGO_PASSWORD}}', password);
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client;
let clientPromise;

if (!uri) throw new Error('Please add your Mongo URI to .env')

if (client === undefined) client = new MongoClient(uri, options);
if (clientPromise === undefined) clientPromise = client.connect();

export { clientPromise };