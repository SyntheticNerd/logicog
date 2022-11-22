const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');
const { mongoConnect } = require('./utils/database');

/**
 * @type {import('http').Server}
 */
const server = awsServerlessExpress.createServer(app);

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  await mongoConnect();
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};
