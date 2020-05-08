const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const createNotification = (notification => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(doc => console.log('notification added', doc));
})

exports.seedCreated = functions.firestore
    .document('seeds/{seedId}')
    .onCreate(doc => {

        const seed = doc.data();
        const notification = {
            content: 'Planted a new seed',
            user: `${seed.authorFirstName} ${seed.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);
    })

