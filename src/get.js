import handler from './utils/handler'
import dynamoDb from './utils/dynamodb'

export const main = handler(async (event) => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      userId: '123',
      noteId: event.pathParameters.id
    }
  }

  const result = await dynamoDb.get(params)
  if (!result.Item) {
    throw new Error('Item Not Found!')
  }

  return result.Item
})
