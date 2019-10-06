const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://socialape-62874.firebaseio.com"
});

const db = admin.firestore();
const storage = admin.storage();

module.exports = { admin, db, storage };
