import { db } from "./firebase.js";
import { ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const pesertaCount = 4;

function pesertaRef(id) {
  return ref(db, `peserta/${id}`);
}

function initListeners() {
  for (let i = 1; i <= pesertaCount; i++) {
    const namaInput = document.getElementById(`nama${i}`);
    const scoreInput = document.getElementById(`score${i}`);

    namaInput.addEventListener("input", () => {
      updatePeserta(i, { nama: namaInput.value });
    });

    scoreInput.addEventListener("input", () => {
      updatePeserta(i, { score: Number(scoreInput.value) });
    });

    onValue(pesertaRef(i), (snapshot) => {
      const data = snapshot.val() || {};
      namaInput.value = data.nama || "";
      scoreInput.value = data.score || 0;
    });
  }
}

function updatePeserta(id, data) {
  set(pesertaRef(id), data);
}

window.changeScore = function (id, delta) {
  const scoreInput = document.getElementById(`score${id}`);
  const newScore = Number(scoreInput.value || 0) + delta;
  updatePeserta(id, {
    nama: document.getElementById(`nama${id}`).value,
    score: newScore
  });
};

initListeners();
