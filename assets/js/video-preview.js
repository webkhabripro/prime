document.querySelectorAll(".video-preview").forEach(box => {
  let timer;

  const iframe = box.querySelector("iframe");
  const thumb  = box.querySelector(".video-thumb");
  const src    = box.dataset.src;

  function startPreview(){
    if(!src) return;

    iframe.style.display = "block";
    thumb.style.display = "none";
    iframe.src = src + "?autoplay=1&mute=1";

    timer = setTimeout(stopPreview, 5000);
  }

  function stopPreview(){
    clearTimeout(timer);
    iframe.src = "";
    iframe.style.display = "none";
    thumb.style.display = "block";
  }

  /* MOBILE */
  box.addEventListener("touchstart", startPreview);
  box.addEventListener("touchend", stopPreview);

  /* DESKTOP */
  box.addEventListener("mouseenter", startPreview);
  box.addEventListener("mouseleave", stopPreview);

  /* CLICK → FULL PLAYER */
  box.addEventListener("click", () => {
    window.location.href =
      "player.html?video=" + encodeURIComponent(src);
  });
});
