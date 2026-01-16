const videos = document.querySelectorAll(".video-preview");
const loadBtn = document.getElementById("loadMore");

let visible = 8;

/* initial hide */
videos.forEach((v,i)=>{
  if(i >= visible) v.style.display="none";
});

/* load more */
loadBtn.onclick = () => {
  let shown = 0;
  videos.forEach(v=>{
    if(v.style.display==="none" && shown < 8){
      v.style.display="block";
      shown++;
    }
  });

  if([...videos].every(v=>v.style.display==="block")){
    loadBtn.style.display="none";
  }
};

/* preview + click play */
videos.forEach(box=>{
  const iframe = box.querySelector("iframe");
  const src = box.dataset.src;

  /* touch / hover preview */
  box.addEventListener("mouseenter",()=>{
    iframe.src = src + "?autoplay=1&mute=1";
    iframe.style.display="block";
  });

  box.addEventListener("mouseleave",()=>{
    iframe.src = "";
    iframe.style.display="none";
  });

  /* click → main player */
  box.addEventListener("click",()=>{
    window.scrollTo({top:0,behavior:"smooth"});
    const main = document.querySelector("#mainPlayer iframe");
    main.src = src + "?autoplay=1";
  });
});
