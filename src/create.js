import handler from './utils/handler'
import dynamoDb from './utils/dynamodb'
import * as uuid from 'uuid'

export const main = handler(async (event) => {
  console.log('in create handler')
  const data = JSON.parse(event.body)

  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      userId: event.requestContext.authorizer.iam.cognitoIdentity.identityId,
      noteId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createdAt: Date.now()
    }
  }

  await dynamoDb.put(params)

  return params.Item
})
