// addTeamsToFirebase.js
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, doc, writeBatch } = require('firebase/firestore');

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

const teams = [
  { teamName: "Team Alpha", password: "pass123" },
  { teamName: "Team Beta", password: "pass123" },
  { teamName: "Team Gamma", password: "pass123" },
  { teamName: "Fafda Fighters", password: "fafda123" },
  { teamName: "Codez", password: "codez123" },
  { teamName: "POWERPUFFGIRLS", password: "powerpuff123" },
  { teamName: "Razz", password: "razz123" },
  { teamName: "Racoon City", password: "racoon123" },
  { teamName: "Alpha Koders", password: "alpha123" },
  { teamName: "Tech Titans", password: "titans123" },
  { teamName: "Gang coders", password: "gang123" },
  { teamName: "LNC", password: "lnc123" },
  { teamName: "N0VA", password: "nova123" },
  { teamName: "LUMINA", password: "lumina123" },
  { teamName: "Penguins", password: "penguins123" },
  { teamName: "Compact", password: "compact123" },
  { teamName: "Syntax Squad", password: "syntax123" },
  { teamName: "Techies", password: "techies123" },
  { teamName: "Byte", password: "byte123" },
  { teamName: "Dream", password: "dream123" },
  { teamName: "Final Commit", password: "commit123" },
  { teamName: "BRAIN NOT FOUND", password: "brain123" },
  { teamName: "DietCoke", password: "diet123" },
  { teamName: "Urban Graphics", password: "urban123" },
  { teamName: "EDITH", password: "edith123" },
  { teamName: "MOHAMED BADRELDIN", password: "mohamed123" },
  { teamName: "Matrix", password: "matrix123" },
  { teamName: "ABC", password: "abc123" },
  { teamName: "Tech X", password: "techx123" },
  { teamName: "Priyansh", password: "priyansh123" },
  { teamName: "The Satyaarth", password: "satyaarth123" },
  { teamName: "HOUSE STARK", password: "stark123" },
  { teamName: "HOUSE TARGARYEN", password: "targaryen123" },
  { teamName: "Coding Cartel", password: "cartel123" },
  { teamName: "Vamos", password: "vamos123" },
  { teamName: "Machhapuchhre", password: "machha123" },
  { teamName: "Khukuri", password: "khukuri123" },
  { teamName: "X Coders", password: "xcoders123" },
  { teamName: "Tricoders", password: "tricoders123" },
  { teamName: "Phub", password: "phub123" },
  { teamName: "POOKIE JANTA PARTY (PJP)", password: "pjp123" },
  { teamName: "STRONGLY DEPENDENT PEOPLE", password: "sdp123" },
  { teamName: "Atlas", password: "atlas123" },
  { teamName: "three musketeers", password: "musk123" }
];

async function addTeams() {
  try {
    console.log(`📊 Adding ${teams.length} teams...`);
    
    const batch = writeBatch(db);
    
    teams.forEach((team) => {
      // Use team name as document ID (like you did manually)
      const teamRef = doc(db, "teams", team.teamName);
      
      // Match exactly what you did manually: TeamName field (capital T, capital N)
      batch.set(teamRef, {
        TeamName: team.teamName,  // Capital T, capital N to match manual entry
        password: team.password,   // keep as password
        score: 0,
        registered: true
      });
      
      console.log(`✅ Added: ${team.teamName}`);
    });
    
    await batch.commit();
    console.log("🎉 All teams added successfully!");
    
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

addTeams();