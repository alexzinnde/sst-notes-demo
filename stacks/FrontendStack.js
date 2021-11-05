import * as sst from '@serverless-stack/resources'

export default class FrontendStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props)

    const { api, auth, bucket } = props

    // Define our React App
    const site = new sst.ReactStaticSite(this, 'ReactFrontend', {
      path: 'client', // path to client in project
      environment: {
        REACT_APP_API_URL: api.url,
        REACT_APP_REGION: scope.region,
        REACT_APP_BUCKET: bucket.bucketName,
        REACT_APP_USER_POOL_ID: auth.cognitoUserPool.userPoolId,
        REACT_APP_IDENTITY_POOL_ID: auth.cognitoCfnIdentityPool.ref,
        REACT_APP_USER_POOL_CLIENT_ID: auth.cognitoUserPoolClient.userPoolClientId
      }
    })

    // Show the url in the output
    this.addOutputs({
      SiteUrl: site.url
    })
  }
}
