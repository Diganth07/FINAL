const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyAxF7DVaAVGZ-8GHqhtNHcdU-ERdbbBQWE",
  authDomain: "hackandcrack-protype.firebaseapp.com",
  projectId: "hackandcrack-protype",
  storageBucket: "hackandcrack-protype.firebasestorage.app",
  messagingSenderId: "1079618302498",
  appId: "1:1079618302498:web:a92dd4a77f5503befa107b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function testConnection() {
  console.log("Testing connection to Firestore project: hackandcrack-protype");
  try {
    const querySnapshot = await getDocs(collection(db, "teams"));
    console.log("✅ Successfully connected to Firestore!");
    console.log(`📊 Number of teams in collection: ${querySnapshot.size}`);
    
    if (querySnapshot.size > 0) {
      console.log("Sample Team Names:");
      querySnapshot.forEach((doc) => {
        console.log(` - ${doc.id}`);
      });
    } else {
      console.log("⚠️ The 'teams' collection exists but is EMPTY.");
    }
  } catch (error) {
    console.error("❌ Firestore Connection Error:", error.code, error.message);
    if (error.code === 'permission-denied') {
      console.log("\n💡 SUGGESTION: Your Firestore Security Rules are blocking READ access.");
    }
  }
  process.exit(0);
}

testConnection();
