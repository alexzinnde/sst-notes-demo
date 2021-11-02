import handler from './utils/handler'
import dynamoDb from './utils/dynamodb'

export const main = handler(async (event) => {
  const data = JSON.parse(event.body)
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      userId: '123',
      noteId: data.pathParamters.id
    }
  }

  await dynamoDb.delete(params)

  return { status: true }
})
