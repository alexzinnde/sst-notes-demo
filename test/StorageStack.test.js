import { expect, haveResource } from '@aws-cdk/assert'
import * as sst from '@serverless-stack/resources'
import StorageStack from '../stacks/StorageStack'

test('Test StorageStack', () => {
  const app = new sst.App()
  // WHEN
  const storageStack = new StorageStack(app, 'test-StorageStack')
  // WHEN

  expect(storageStack).to(
    haveResource('AWS::DynamoDB::Table', {
      BillingMode: 'PAY_PER_REQUEST'
    })
  )
})
