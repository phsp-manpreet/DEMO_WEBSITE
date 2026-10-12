var $=function(s){return document.querySelector(s)},$$=function(s){return [].slice.call(document.querySelectorAll(s))};
"CHAK BRO".split("").forEach(function(c,i){var s=document.createElement("span");s.textContent=c==" "?"\u00a0":c;s.style.animationDelay=(1.9+i*.09)+"s";$("#ttl").appendChild(s)});
var cu=["Punjabi","Tandoor","Chinese","Continental","Italian","Cocktails","Coffee","Shakes","Desserts"],m="";
for(var k=0;k<2;k++)cu.forEach(function(c){m+="<span>"+c+"</span><span>✦</span>"});$("#mq").innerHTML=m;
var M={"Starters":[["Paneer Tikka","Charred in the tandoor with mint chutney",299],["Chilli Chicken","Wok-tossed, spicy and glossy",349],["Hara Bhara Kebab","Spinach and peas, crisp outside",259],["Veg Spring Rolls","Crunchy with schezwan dip",229]],
"Punjabi Mains":[["Dal Makhani","Slow-cooked overnight",289],["Butter Chicken","Creamy tomato gravy, charcoal chicken",419],["Shahi Paneer","Rich cashew and cream gravy",339],["Tawa Parat Special","House style thali for one",399]],
"Chinese":[["Hakka Noodles","Veg or chicken",249],["Manchurian Gravy","Veg or chicken, with fried rice",299],["Dragon Paneer","Sweet heat with peppers",329]],
"Continental":[["Creamy Alfredo Pasta","White sauce, herbs and parmesan",329],["Peri Peri Pizza","Thin crust, loaded cheese",379],["Grilled Sandwich","Veg or chicken",229]],
"Cafe and Desserts":[["Cold Coffee","Thick, with a scoop of ice cream",179],["Oreo Shake","Cookies blended in",199],["Belgian Waffle","Chocolate sauce and ice cream",249],["Walnut Brownie","Served hot with fudge",229]]};
var tb=$("#tabs"),it=$("#items");
function show(c){$$("#tabs button").forEach(function(b){b.classList.toggle("on",b.textContent==c)});
 it.innerHTML=M[c].map(function(x,i){return '<div class="it" style="animation-delay:'+i*.07+'s"><div>'+x[0]+'<i>₹'+x[2]+'</i></div><p>'+x[1]+'</p></div>'}).join("")}
Object.keys(M).forEach(function(c){var b=document.createElement("button");b.innerHTML='<svg viewBox="0 0 64 64"><use href="#i-'+({"Starters":"kebab","Punjabi Mains":"noodle","Chinese":"noodle","Continental":"pizza","Cafe and Desserts":"icecream"})[c]+'"/></svg>'+c;b.onclick=function(){show(c)};tb.appendChild(b)});
show("Starters");
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.15});
function count(){$$("[data-n]").forEach(function(el){var n=+el.dataset.n,v=0,t=setInterval(function(){v+=Math.ceil(n/30);if(v>=n){v=n;clearInterval(t)}el.textContent=v+(n==40?"+":"")},40)})}
function route(){var h=(location.hash||"#home").slice(1);if(!$("#"+h))h="home";
 $$(".page").forEach(function(p){p.classList.toggle("on",p.id==h)});
 $$("nav a").forEach(function(a){a.classList.toggle("on",a.dataset.p==h)});
 $("#nav").classList.remove("open");window.scrollTo(0,0);
 $$("#"+h+" .reveal").forEach(function(r){r.classList.remove("in");io.observe(r)});
 if(h=="home")count()}
route();window.addEventListener("hashchange",function(){var w=$("#wipe");w.classList.remove("go");void w.offsetWidth;w.classList.add("go");setTimeout(route,400)});
$("#burger").onclick=function(){$("#nav").classList.toggle("open")};
$("#rf").onsubmit=function(e){e.preventDefault();$("#ok").classList.add("show");e.target.reset()};
var rl=$("#rail");[].slice.call(rl.children).forEach(function(n){rl.appendChild(n.cloneNode(true))});
$$("figure:not(.art)").forEach(function(f){f.onclick=function(){var i=f.querySelector("img");$("#lb img").src=i.src;$("#lb img").alt=i.alt;$("#lb").classList.add("show")}});
$("#lb").onclick=function(){this.classList.remove("show")};
document.addEventListener("keydown",function(e){if(e.key=="Escape")$("#lb").classList.remove("show")});

$$(".tile,.dish").forEach(function(t){t.addEventListener("pointermove",function(e){var r=t.getBoundingClientRect();t.style.setProperty("--mx",(e.clientX-r.left)+"px");t.style.setProperty("--my",(e.clientY-r.top)+"px")})});
addEventListener("scroll",function(){var d=document.documentElement;$("#pgbar").style.width=(scrollY/(d.scrollHeight-innerHeight||1)*100)+"%"},{passive:true});
(function(){var q=$$(".q"),d=$("#dots"),n=0,t;q.forEach(function(_,i){var s=document.createElement("i");s.onclick=function(){go(i)};d.appendChild(s)});
function go(i){n=i;q.forEach(function(e,k){e.classList.toggle("on",k==i)});$$("#dots i").forEach(function(e,k){e.classList.toggle("on",k==i)});clearInterval(t);t=setInterval(function(){go((n+1)%q.length)},4500)}go(0)})();
(function(){var o=12,cl=23.5,d=new Date(),x=d.getHours()+d.getMinutes()/60,e=$("#openNow"),on=x>=o&&x<cl;e.textContent=on?"Open now":"Closed now";if(!on)e.style.setProperty("--c","#c23a4e")})();
(function(){var cv=$("#dust"),g=cv.getContext("2d"),P=[],W,H;if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
function sz(){W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight}
for(var i=0;i<46;i++)P.push({x:Math.random(),y:Math.random(),r:Math.random()*2+.6,v:Math.random()*.0006+.0002,p:Math.random()*6});
function f(t){if(cv.offsetWidth){if(cv.width!=cv.offsetWidth)sz();g.clearRect(0,0,W,H);P.forEach(function(p){p.y-=p.v;if(p.y<0)p.y=1;g.globalAlpha=.25+.55*Math.abs(Math.sin(t/900+p.p));g.fillStyle="#f6c928";g.beginPath();g.arc(p.x*W+Math.sin(t/1500+p.p)*12,p.y*H,p.r,0,7);g.fill()})}requestAnimationFrame(f)}
requestAnimationFrame(f)})();
