const admin = require('firebase-admin')

// https://stackoverflow.com/questions/41287108/deploying-firebase-app-with-service-account-to-heroku-environment-variables-wit
admin.initializeApp({
  credential: admin.credential.cert({
    project_id: 'vue-dashboard-978d5',
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
  }),
  databaseURL: 'https://vue-dashboard-978d5.firebaseio.com',
})

exports.handler = function(event, _context, callback) {
  const firestore = admin.firestore()

  // https://docs.netlify.com/functions/build-with-javascript/#format
  const { email } = event.queryStringParameters
  //
  // https://googleapis.dev/nodejs/firestore/latest/Query.html#where
  firestore
    .collection('users')
    .where('email', '==', email)
    .limit(1)
    .get()
    .then(responce => {
      if (responce.empty) {
        return Promise.reject()
      }
      const userInfo = responce.docs[0].data()
      console.log({ userInfo })
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(userInfo),
      })
    })
    .catch(error => {
      console.log({ error })
      callback(null, {
        statusCode: 500,
        body: error,
      })
    })
}
