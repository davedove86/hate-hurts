const navSlide=()=>{const e=document.querySelector(".burger"),n=document.querySelector(".nav-links"),t=document.querySelectorAll(".nav-links li");e.addEventListener("click",(()=>{n.classList.toggle("nav-active"),t.forEach(((e,n)=>{e.style.animation?e.style.animation="":e.style.animation=`navLinkFade 0.5s ease forwards ${n/7+.3}s`})),e.classList.toggle("toggle")}))};navSlide();