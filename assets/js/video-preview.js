document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".video-preview").forEach(box => {
    let timer = null;

    const iframe = box.querySelector("iframe");
    const src = box.dataset.src;

    if (!iframe || !src) return;

    function startPreview(){
      if (iframe.src) return; // already playing
      iframe.src = src + "?autoplay=1&mute=1";
      timer = setTimeout(stopPreview, 5000);
    }

    function stopPreview(){
      if (timer) clearTimeout(timer);
      timer = null;
      iframe.src = "";
    }

    /* MOBILE */
    box.addEventListener("touchstart", startPreview, { passive:true });
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

});
