document.addEventListener("DOMContentLoaded",()=>{

/* THEME */
themeToggle.onclick=()=>{
  document.body.classList.toggle("dark");
  themeToggle.textContent=document.body.classList.contains("dark")?"☀️":"🌙";
};

/* TYPING */
const topText="Selamat Ulang Tahun ke-18 🎉";
const bottomText="Thank you for coming and adding color to my life.";
const typingTop=document.getElementById("typing-top");
const typingBottom=document.getElementById("typing-bottom");

function typing(el,text,cb){
  let i=0;
  function run(){
    if(i<=text.length){
      el.textContent=text.slice(0,i++);
      setTimeout(run,80);
    }else if(cb) setTimeout(cb,1500);
  }
  run();
}
(function loopTop(){typing(typingTop,topText,()=>{typingTop.textContent="";loopTop()})})();
(function loopBottom(){typing(typingBottom,bottomText,()=>{typingBottom.textContent="";loopBottom()})})();

/* MUSIC */
const audios=[music0,music1,music2,music3];
document.querySelectorAll(".album-controls img").forEach((img,i)=>{
  img.onclick=()=>{
    audios.forEach((a,j)=>{if(j!==i){a.pause();a.currentTime=0}});
    document.querySelectorAll(".album-controls img").forEach(x=>x.classList.remove("active"));
    audios[i].paused?(audios[i].play(),img.classList.add("active")):(audios[i].pause(),img.classList.remove("active"));
  };
});

/* GALERI */
const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightboxImg");
document.querySelectorAll(".gallery img").forEach(img=>{
  img.onclick=()=>{
    lightboxImg.src=img.src;
    lightbox.classList.add("active");
    const r=img.getBoundingClientRect();
    spawnLove(r.left+r.width/2,r.top+r.height/2);
    firework(r.left+r.width/2,r.top+r.height/2);
  };
});
lightbox.onclick=()=>lightbox.classList.remove("active");

function spawnLove(x,y){
  const icons=["❤️","🤍","💗","💕"];
  for(let i=0;i<6;i++){
    const l=document.createElement("div");
    l.className="love";
    l.style.left=x+"px";
    l.style.top=y+"px";
    l.textContent=icons[Math.floor(Math.random()*icons.length)];
    document.body.appendChild(l);
    setTimeout(()=>l.remove(),1200);
  }
}
function firework(x,y){
  for(let i=0;i<8;i++){
    const f=document.createElement("div");
    f.className="firework";
    f.style.left=x+"px";
    f.style.top=y+"px";
    f.style.setProperty("--x",(Math.random()*120-60)+"px");
    f.style.setProperty("--y",(Math.random()*120-60)+"px");
    f.style.background=`hsl(${Math.random()*360},80%,60%)`;
    document.body.appendChild(f);
    setTimeout(()=>f.remove(),1300);
  }
}
});