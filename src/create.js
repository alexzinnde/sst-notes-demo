import * as uuid from 'uuid'
import AWS from 'aws-sdk'

const dynamoDb = new AWS.DynamoDB.DocumentClient()

export async function main(event) {
  // Request event is passed in as a JSON encoded string in 'event.body'
  const data = JSON.parse(event.body)

  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      userId: '123',
      noteId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createdAt: Date.now()
    }
  }

  try {
    await dynamoDb.put(params).promise()
    return {
      statusCode: 200,
      body: JSON.stringify(params.Item)
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    }
  }
}
