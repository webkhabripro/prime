const overlay = document.getElementById("age-overlay");

if (localStorage.getItem("ageVerified") === "yes") {
  overlay.style.display = "none";
}

document.getElementById("age-yes").onclick = () => {
  localStorage.setItem("ageVerified", "yes");
  overlay.style.display = "none";
};

document.getElementById("age-no").onclick = () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      align-items:center;
      justify-content:center;
      background:#000;
      color:#fff;
      text-align:center;
      padding:20px;">
      <div>
        <h2>Access Blocked</h2>
        <p>You must be 18 years or older to access this site.</p>
      </div>
    </div>`;
};
