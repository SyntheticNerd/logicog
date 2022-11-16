import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;

MongoClient.connect(`mongodb+srv://admin:${process.env.PASSWORD}@cluster0.nws27lc.mongodb.net/?retryWrites=true&w=majority`)