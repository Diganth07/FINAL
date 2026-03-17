// seedTeams.js — uses Firebase Admin SDK (bypasses security rules)
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: "hackandcrack-prototype"
});

const db = admin.firestore();

const teams = [
  { TeamName: "Team Alpha", password: "pass123" },
  { TeamName: "Team Beta", password: "pass123" },
  { TeamName: "Team Gamma", password: "pass123" },
  { TeamName: "Fafda Fighters", password: "fafda123" },
  { TeamName: "Codez", password: "codez123" },
  { TeamName: "POWERPUFFGIRLS", password: "powerpuff123" },
  { TeamName: "Razz", password: "razz123" },
  { TeamName: "Racoon City", password: "racoon123" },
  { TeamName: "Alpha Koders", password: "alpha123" },
  { TeamName: "Tech Titans", password: "titans123" },
  { TeamName: "Gang coders", password: "gang123" },
  { TeamName: "LNC", password: "lnc123" },
  { TeamName: "N0VA", password: "nova123" },
  { TeamName: "LUMINA", password: "lumina123" },
  { TeamName: "Penguins", password: "penguins123" },
  { TeamName: "Compact", password: "compact123" },
  { TeamName: "Syntax Squad", password: "syntax123" },
  { TeamName: "Techies", password: "techies123" },
  { TeamName: "Byte", password: "byte123" },
  { TeamName: "Dream", password: "dream123" },
  { TeamName: "Final Commit", password: "commit123" },
  { TeamName: "BRAIN NOT FOUND", password: "brain123" },
  { TeamName: "DietCoke", password: "diet123" },
  { TeamName: "Urban Graphics", password: "urban123" },
  { TeamName: "EDITH", password: "edith123" },
  { TeamName: "MOHAMED BADRELDIN", password: "mohamed123" },
  { TeamName: "Matrix", password: "matrix123" },
  { TeamName: "ABC", password: "abc123" },
  { TeamName: "Tech X", password: "techx123" },
  { TeamName: "Priyansh", password: "priyansh123" },
  { TeamName: "The Satyaarth", password: "satyaarth123" },
  { TeamName: "HOUSE STARK", password: "stark123" },
  { TeamName: "HOUSE TARGARYEN", password: "targaryen123" },
  { TeamName: "Coding Cartel", password: "cartel123" },
  { TeamName: "Vamos", password: "vamos123" },
  { TeamName: "Machhapuchhre", password: "machha123" },
  { TeamName: "Khukuri", password: "khukuri123" },
  { TeamName: "X Coders", password: "xcoders123" },
  { TeamName: "Tricoders", password: "tricoders123" },
  { TeamName: "Phub", password: "phub123" },
  { TeamName: "POOKIE JANTA PARTY (PJP)", password: "pjp123" },
  { TeamName: "STRONGLY DEPENDENT PEOPLE", password: "sdp123" },
  { TeamName: "Atlas", password: "atlas123" },
  { TeamName: "three musketeers", password: "musk123" }
];

async function seedTeams() {
  console.log(`📊 Seeding ${teams.length} teams to hackandcrack-prototype (Admin SDK)...`);

  const batch = db.batch();

  teams.forEach((team) => {
    const teamRef = db.collection('teams').doc(team.TeamName);
    batch.set(teamRef, {
      TeamName: team.TeamName,
      password: team.password,
      registered: true,
      score: 0
    });
  });

  console.log("⏳ Committing batch...");
  await batch.commit();

  console.log("🎉 Done! All teams written successfully.");
  teams.forEach(t => console.log(`  ✅ ${t.TeamName}`));
  process.exit(0);
}

seedTeams().catch(err => {
  console.error("❌ Error:", err.message);
  process.exit(1);
});
