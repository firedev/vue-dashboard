const admin = require('firebase-admin')

const serviceAccount = require('./serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://vue-dashboard-978d5.firebaseio.com',
})

exports.handler = function(event, context, callback) {
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
