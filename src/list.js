import handler from './utils/handler'
import dynamoDb from './utils/dynamodb'

export const main = handler(async () => {
  const params = {
    TableName: process.env.TABLE_NAME,
    KeyConditionExpression: 'userId = :userId',
    ExpressionAttributeValies: {
      ':userId': '123'
    }
  }

  const result = await dynamoDb.query(params)

  return result.Items
})
