import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// load comments
export function loadComments(postId) {
  const q = query(
    collection(db, "comments", postId, "items"),
    orderBy("time", "desc")
  );

  onSnapshot(q, (snapshot) => {
    const box = document.getElementById("comments-box");
    box.innerHTML = "";
    snapshot.forEach(doc => {
      const d = doc.data();
      box.innerHTML += `
        <div class="comment">
          <b>${d.name}</b>
          <p>${d.text}</p>
        </div>
      `;
    });
  });
}

// add comment
export async function addComment(postId, name, text) {
  if (!name || !text) return;
  await addDoc(collection(db, "comments", postId, "items"), {
    name,
    text,
    time: serverTimestamp()
  });
}
