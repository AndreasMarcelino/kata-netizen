import { db } from "./firebase.js";
import { doc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const nameEl = document.getElementById("name");
const scoreEl = document.getElementById("score");

onSnapshot(doc(db, "game", "current"), (docSnap) => {
  if (!docSnap.exists()) return;

  const data = docSnap.data();

  nameEl.textContent = data.name ?? "PLAYER";
  scoreEl.textContent = data.score ?? 0;
});
