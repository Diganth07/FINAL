const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc } = require('firebase/firestore');

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

async function testWrite() {
  console.log("Testing WRITE access to Firestore...");
  try {
    const testRef = doc(db, "teams", "ConnectionTestTeam");
    await setDoc(testRef, {
      TeamName: "ConnectionTestTeam",
      password: "test",
      registered: true,
      score: 0
    });
    console.log("✅ WRITE SUCCESSFUL! Your rules allow writes.");
  } catch (error) {
    console.error("❌ WRITE FAILED:", error.code, error.message);
    if (error.code === 'permission-denied') {
      console.log("\n💡 Your Firestore Security Rules are blocking WRITE access.");
    }
  }
  process.exit(0);
}

testWrite();
