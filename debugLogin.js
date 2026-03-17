// debugLogin.js - Simulates exactly what the browser login does
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, doc, getDoc, getDocs } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyAxF7DVaAVGZ-8GHqhtNHcdU-ERdbbBQWE",
  authDomain: "hackandcrack-protype.firebaseapp.com",
  projectId: "hackandcrack-protype",
  storageBucket: "hackandcrack-protype.firebasestorage.app",
  messagingSenderId: "1079618302498",
  appId: "1:1079618302498:web:a92dd4a77f5503befa107b",
  measurementId: "G-14WFRXW84P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function debugLogin() {
  const teamName = "Team Alpha";
  const password = "pass123";

  console.log("=== SIMULATING BROWSER LOGIN ===");
  console.log(`Team: "${teamName}", Password: "${password}"`);
  console.log("");

  // Step 1: Direct document fetch (exactly like handleStudentLogin)
  console.log(`Step 1: Direct fetch for teams/${teamName}...`);
  try {
    const teamDocRef = doc(db, "teams", teamName);
    const directSnap = await getDoc(teamDocRef);

    if (directSnap.exists()) {
      const data = directSnap.data();
      console.log("  ✅ Direct match found! Document data:", JSON.stringify(data, null, 2));

      // Check password fields
      const rawPassword = data.password || data.Password || data.pass || data.leaderName || "";
      console.log(`  Raw password from DB: "${rawPassword}"`);

      const normalize = (str) => str ? str.toString().trim().toLowerCase().replace(/\s+/g, "") : "";
      console.log(`  Normalized DB password: "${normalize(rawPassword)}"`);
      console.log(`  Normalized input password: "${normalize(password)}"`);
      console.log(`  Match: ${normalize(rawPassword) === normalize(password)}`);

      // Check actualTeamName logic
      const actualTeamName = data.teamName || directSnap.id;
      console.log(`  data.teamName = "${data.teamName}" (undefined? ${data.teamName === undefined})`);
      console.log(`  data.TeamName = "${data.TeamName}"`);
      console.log(`  directSnap.id = "${directSnap.id}"`);
      console.log(`  actualTeamName resolved to: "${actualTeamName}"`);
    } else {
      console.log("  ❌ Direct match NOT found (document does not exist).");
    }
  } catch (err) {
    console.error("  ❌ Direct fetch ERROR:", err.code, err.message);
  }

  // Step 2: Collection scan fallback
  console.log("\nStep 2: Collection scan fallback...");
  try {
    const allTeamsSnapshot = await getDocs(collection(db, "teams"));
    console.log(`  Total teams in collection: ${allTeamsSnapshot.size}`);

    if (allTeamsSnapshot.size > 0) {
      console.log("\n  First 5 teams and their field structure:");
      let count = 0;
      allTeamsSnapshot.forEach(docSnap => {
        if (count < 5) {
          const data = docSnap.data();
          console.log(`\n  Doc ID: "${docSnap.id}"`);
          console.log(`    Fields: ${JSON.stringify(Object.keys(data))}`);
          console.log(`    data.teamName: "${data.teamName}"`);
          console.log(`    data.TeamName: "${data.TeamName}"`);
          console.log(`    data.password: "${data.password}"`);
          count++;
        }
      });
    }
  } catch (err) {
    console.error("  ❌ Collection scan ERROR:", err.code, err.message);
  }

  process.exit(0);
}

debugLogin();
