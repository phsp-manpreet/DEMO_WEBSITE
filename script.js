const IMG={"noodles": "images/noodles.jpg", "butter": "images/butter.jpg", "brownie": "images/brownie.jpg", "birthday": "images/birthday.jpg", "interior": "images/interior.jpg", "neon": "images/neon.jpg", "hall": "images/hall.jpg", "bar": "images/bar.jpg", "dal": "images/dal.jpg", "coffee": "images/coffee.jpg", "chilli": "images/chilli.jpg", "cigar": "images/cigar.jpg"};
Object.assign(IMG,{"paneer": "images/paneer.jpg", "honey": "images/honey.jpg", "candle": "images/candle.jpg"});
IMG.broccoli="images/broccoli.jpg";
// ---------- Easy-to-edit data ----------
const CONFIG={phone:'917528947000',address:'1st Floor, 101-C, PUDA Complex, Opposite Petrol Pump, Urban Estate Phase 2, Jalandhar, Punjab – 144022, India',fullMenuUrl:'',googleReviewsUrl:''};
const NAV=[['home','Home'],['about','About'],['menu','Menu'],['experiences','Experiences'],['gallery','Gallery'],['reserve','Reservations'],['contact','Contact']];
const FEATURES=[['utensils-crossed','Multi-Cuisine Dining'],['armchair','Stylish Indoor Seating'],['music','Live Music Nights'],['martini','Bar, Cocktails & Mocktails'],['flame','Romantic Candlelight Dinners'],['cake','Private Celebrations & Group Parties']];
const MENU={
 'Vegetarian Starters':[['Paneer Tikka','Smoky tandoor-grilled cottage cheese with spiced marinade.'],['Crispy Corn','Golden-fried sweet corn tossed with pepper and herbs.'],['Malai Broccoli','Creamy, mildly spiced broccoli finished in the tandoor.'],['Honey Chilli Potato','Crisp potato strips in a sweet and spicy glaze.'],['Cigar Rolls','Crunchy rolls with a savoury filling, served hot.']],
 'Non-Veg Starters':[['Achari Chicken Tikka','Chicken in a tangy pickle-spice marinade.'],['Tandoori Chilli Chicken','Tandoori chicken tossed with chilli and peppers.'],['Bhatti Murg','Rustic Punjabi-style chicken, fire-roasted.']],
 'Main Course':[['Dal Makhani','Slow-cooked black lentils with butter and cream.'],['Paneer Butter Masala','Paneer in a rich, silky tomato gravy.'],['Butter Chicken','Tender chicken in a creamy tomato-butter sauce.'],['Chicken Biryani','Fragrant rice layered with spiced chicken.']],
 'Chinese Specialities':[['Chilli Garlic Noodles','Wok-tossed noodles with garlic and chilli.'],['Veg Manchurian','Vegetable dumplings in a bold Manchurian sauce.']],
 'Beverages & Desserts':[['Refreshing Mocktails','Cool, fruity coolers to pair with any meal.'],['Oreo Shakes','Thick, creamy shake with cookie crunch.'],['Coffee','Freshly brewed, hot or cold.']]
};
const EXP=[['Live Music Nights','music-2','Great food, music, and an energetic atmosphere.','bar'],['Candlelight Dinners','flame','An intimate dining experience for couples and special occasions.','candle'],['Birthday Celebrations','cake','Make birthdays memorable with special arrangements and surprise options, subject to confirmation.','birthday'],['Kitty & Family Parties','users','Comfortable group dining for friends and family.','hall'],['Corporate Gatherings','briefcase','Plan professional lunches, dinners, and team get-togethers.','interior'],['Festive Celebrations','sparkles','Celebrate anniversaries, festivals, New Year\'s Eve, and other special moments.','neon']];
const GALLERY=[['Restaurant interior and bar','armchair',IMG.interior],['Neon lounge corner','sparkles',IMG.neon],['Bar and stage','martini',IMG.bar],['Birthday celebration setup','party-popper',IMG.birthday],['Dining hall','users',IMG.hall],['Chilli chicken','utensils',IMG.chilli],['Cigar rolls','utensils',IMG.cigar],['Butter chicken','utensils',IMG.butter],['Candlelight dinner (representative image)','flame',IMG.candle],['Brownie with ice cream','cake',IMG.brownie],['Coffee, burger and pasta','coffee',IMG.coffee],['Malai broccoli','utensils',IMG.broccoli]];
const REVIEWS=[{"name": "Amandeep S.", "stars": 5, "text": "The ambiance here is absolutely fantastic, especially in the evening. We hosted a friend's birthday party here. The live music and vibrant lighting completely made our night. The food was delicious, especially their Non-Veg Platter."}, {"name": "Pallavi S.", "stars": 5, "text": "A wonderful place for a family dinner. The indoor seating area is very comfortable, cozy, and clean. Their Paneer Butter Masala and Lachha Paratha were outstanding. The staff is also incredibly polite and humble."}, {"name": "Rohit K.", "stars": 4, "text": "The food and drinks are excellent—highly recommend trying the Achari Chicken Tikka. The only catch is that it gets very crowded on weekend evenings, so you might face a small delay in seating. It's best to book a table in advance."}, {"name": "Simran", "stars": 5, "text": "Great value for money and authentic Punjabi taste! This has become my go-to lounge in Urban Estate, Jalandhar, for chilling with friends and clicking great pictures."}]; // only add real, verified reviews

// ---------- Helpers ----------
const $=(s,r=document)=>r.querySelector(s);
const wa=t=>`https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(t)}`;
const icons=()=>lucide.createIcons();
const tones=['#2a1d06','#1d1a14','#33240a','#14110b','#3a2a0c','#1b1710'];

// ---------- Nav ----------
const mk=(cls)=>NAV.map(([id,t])=>`<a href="#${id}" class="${cls}">${t}</a>`).join('');
$('#links').innerHTML=mk('hover:text-gold transition');
$('#mnav').innerHTML=mk('block');
$('#flinks').innerHTML=mk('hover:text-gold');
const burger=$('#burger'),mnav=$('#mnav');
burger.onclick=()=>{const o=mnav.classList.toggle('hidden');mnav.classList.toggle('flex',!o);burger.setAttribute('aria-expanded',String(!o))};
mnav.onclick=e=>{if(e.target.tagName==='A'){mnav.classList.add('hidden');mnav.classList.remove('flex')}};
const onScroll=()=>$('#nav').classList.toggle('bg-ink/90',scrollY>40)||$('#nav').classList.toggle('backdrop-blur',scrollY>40);
addEventListener('scroll',onScroll,{passive:true});onScroll();

// ---------- Features & Experiences ----------
$('#feat').innerHTML=FEATURES.map(([i,t],n)=>`<li class="rv flex items-center gap-4 py-4 border-b border-gold/20" style="transition-delay:${n*60}ms"><i data-lucide="${i}" class="text-gold shrink-0"></i><span>${t}</span></li>`).join('');
$('#exp').innerHTML=EXP.map(([t,i,d,im],n)=>`<article class="tile rounded snap-start shrink-0 w-[85%] sm:w-[46%] lg:w-[32%] h-[420px] flex flex-col justify-end p-6 border border-gold/20" style="transition-delay:${(n%3)*80}ms">
 ${im?`<img src="${IMG[im]}" alt="" loading="lazy" class="card-bg absolute inset-0 w-full h-full object-cover"><div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20"></div>`:`<div class="card-bg absolute inset-0" style="background:radial-gradient(circle at 70% 20%,rgba(224,165,38,.35),transparent 55%),linear-gradient(160deg,${tones[n]},#0c0c0c)"></div>`}
 ${im==='candle'?'<span class="absolute left-4 top-4 text-xs bg-black/70 px-2 py-1 rounded">Representative image</span>':''}<i data-lucide="${i}" class="absolute top-6 right-6 w-14 h-14 text-gold/70"></i>
 <div class="relative"><h3 class="text-2xl text-cream">${t}</h3><p class="mt-2 text-cream/75 text-sm">${d}</p>
 <a target="_blank" rel="noopener" href="${wa(`Hello Chak Bro, I'd like to enquire about: ${t}.`)}" class="btn btn-gold mt-5 !py-2">Enquire Now</a></div></article>`).join('');

// ---------- Menu (tabs, keyboard friendly) ----------
const REP=new Set(['Paneer Tikka','Honey Chilli Potato']);
const DISH_IMG={'Chilli Garlic Noodles':['noodles','50% 50%'],'Butter Chicken':['butter','50% 50%'],'Cigar Rolls':['cigar','50% 55%'],'Dal Makhani':['dal','50% 50%'],'Malai Broccoli':['broccoli','50% 55%'],'Paneer Tikka':['paneer','50% 50%'],'Honey Chilli Potato':['honey','50% 50%'],'Coffee':['coffee','45% 90%']};
const dishImg=n=>{const d=DISH_IMG[n];return d?`<img src="${IMG[d[0]]}" alt="${n}" loading="lazy" class="h-20 w-20 sm:h-24 sm:w-24 shrink-0 object-cover rounded-full border border-gold/30" style="object-position:${d[1]}">`:`<div class="h-20 w-20 sm:h-24 sm:w-24 shrink-0 rounded-full grid place-items-center text-gold/60 border border-gold/20" style="background:linear-gradient(135deg,#2a1d06,#12100b)"><i data-lucide="chef-hat" class="w-8 h-8"></i></div>`};
const cats=Object.keys(MENU);let active=cats[0];
function renderMenu(){
 $('#tabs').innerHTML=cats.map(c=>`<button role="tab" class="tab text-left whitespace-nowrap px-4 py-3 border-b-2 lg:border-b-0 lg:border-l-2 border-transparent text-cream/70 hover:text-gold transition" aria-selected="${c===active}" data-c="${c}">${c}</button>`).join('');
 $('#dishes').innerHTML=MENU[active].map(([n,d],i)=>`<div class="dish flex gap-4 items-center py-4" style="animation-delay:${i*60}ms">${dishImg(n)}<div class="min-w-0"><h3 class="text-xl text-cream">${n}</h3><p class="text-sm text-cream/70 mt-1">${d}</p>${REP.has(n)?'<span class="text-xs text-amber">Representative image</span>':''}</div></div>`).join('');
 icons();
}
$('#tabs').onclick=e=>{const b=e.target.closest('[data-c]');if(b){active=b.dataset.c;renderMenu()}};
$('#tabs').onkeydown=e=>{const i=cats.indexOf(active);if(e.key==='ArrowRight'||e.key==='ArrowLeft'){active=cats[(i+(e.key==='ArrowRight'?1:cats.length-1))%cats.length];renderMenu();$(`[data-c="${active}"]`).focus()}};
$('#fullmenu').href=CONFIG.fullMenuUrl||wa('Hello Chak Bro, please share your full menu.');
renderMenu();

// ---------- Gallery + lightbox ----------
$('#gal').innerHTML=GALLERY.map(([t,i,src],n)=>`<button class="tile rounded aspect-square ${n>=8?'extra hidden':''}" data-n="${n}" aria-label="Open ${t}">${src?`<img src="${src}" alt="${t}" loading="lazy" class="card-bg absolute inset-0 w-full h-full object-cover">`:`<div class="absolute inset-0 grid place-items-center" style="background:linear-gradient(145deg,${tones[n%6]},#0c0c0c)"><i data-lucide="${i}" class="w-10 h-10 text-gold/60"></i></div>`}<span class="absolute inset-x-0 bottom-0 p-2 text-left text-xs sm:text-sm bg-gradient-to-t from-black/85 to-transparent">${t}</span></button>`).join('');
let all=false,cur=0;
$('#more').onclick=()=>{all=!all;document.querySelectorAll('#gal .extra').forEach(e=>e.classList.toggle('hidden',!all));$('#more').textContent=all?'Show fewer':'Show all photos'};
const step=d=>{cur=(cur+d+GALLERY.length)%GALLERY.length;document.querySelector(`#gal [data-n="${cur}"]`).click()};
$('#gal').addEventListener('click',e=>{const b=e.target.closest('[data-n]');if(b)cur=+b.dataset.n});
$('#lbp').onclick=()=>step(-1);$('#lbn').onclick=()=>step(1);
addEventListener('keydown',e=>{if(lb.classList.contains('hidden'))return;if(e.key==='ArrowRight')step(1);if(e.key==='ArrowLeft')step(-1)});
const lb=$('#lb');let lastFocus;
const closeLb=()=>{lb.classList.add('hidden');lastFocus&&lastFocus.focus()};
$('#gal').onclick=e=>{const b=e.target.closest('[data-n]');if(!b)return;lastFocus=b;const [t,i,src]=GALLERY[b.dataset.n];
 $('#lbc').innerHTML=src?`<img src="${src}" alt="${t}" class="w-full h-full object-contain">`:`<div class="w-full h-full grid place-items-center text-center" style="background:linear-gradient(145deg,#2a1d06,#0c0c0c)"><div><i data-lucide="${i}" class="w-20 h-20 text-gold mx-auto"></i><p class="mt-4 text-xl">${t}</p><p class="text-sm text-cream/60">Placeholder image</p></div></div>`;
 icons();lb.classList.remove('hidden');$('#lbx').focus()};
$('#lbx').onclick=closeLb;lb.onclick=e=>{if(e.target===lb)closeLb()};
addEventListener('keydown',e=>{if(e.key==='Escape'&&!lb.classList.contains('hidden'))closeLb()});

// ---------- Reservation form (validation + WhatsApp) ----------
const form=$('#form'),status=$('#status');
form.date.min=new Date().toISOString().split('T')[0];
const rules={name:v=>v.trim().length>=2||'Enter your full name.',phone:v=>/^(\+?91)?[6-9]\d{9}$/.test(v.replace(/[\s-]/g,''))||'Enter a valid 10-digit Indian mobile number.',date:v=>!!v||'Choose a date.',time:v=>!!v||'Choose a time.',guests:v=>(+v>=1&&+v<=200)||'Enter 1 to 200 guests.'};
form.onsubmit=async e=>{
 e.preventDefault();let ok=true;
 for(const [k,fn] of Object.entries(rules)){const el=form[k],r=fn(el.value);el.nextElementSibling.textContent=r===true?'':r;el.setAttribute('aria-invalid',r!==true);if(r!==true)ok=false}
 if(!ok){status.textContent='Please fix the highlighted fields.';return}
 status.textContent='Opening WhatsApp…';
 const d=Object.fromEntries(new FormData(form));
 const msg=`Hello Chak Bro, I'd like to make an enquiry.\n\nName: ${d.name}\nMobile: ${d.phone}\nType: ${d.type}\nDate: ${d.date}\nTime: ${d.time}\nGuests: ${d.guests}\nRequirements: ${d.notes||'None'}\n\n(Please confirm availability.)`;
 await new Promise(r=>setTimeout(r,400));
 const w=open(wa(msg),'_blank','noopener');
 status.textContent=w?'WhatsApp opened. Your booking is not confirmed until the restaurant replies.':'Pop-up blocked. Allow pop-ups or use the Call Now button.';
};

// ---------- Reviews (real data only) ----------
$('#rev').innerHTML=REVIEWS.length?REVIEWS.map((r,n)=>`<figure class="rv glass rounded p-7 relative hover:-translate-y-1" style="transition-delay:${n*90}ms"><span aria-hidden="true" class="absolute right-5 top-0 font-head text-7xl text-gold/20">“</span><p class="text-gold tracking-widest" aria-label="${r.stars} out of 5 stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</p><blockquote class="mt-4 text-cream/85 leading-relaxed">${r.text}</blockquote><figcaption class="mt-5 flex items-center gap-3"><span class="grid h-10 w-10 place-items-center rounded-full bg-gold text-ink font-medium">${r.name[0]}</span><span class="text-sm">${r.name}</span></figcaption></figure>`).join(''):
 `<div class="md:col-span-3 text-center"><p class="font-head text-8xl text-gold/30 leading-none">“</p><p class="text-xl -mt-4">Reviews from real guests will appear here.</p><p class="text-cream/60 text-sm mt-2">We only show verified reviews. Add them to the <code>REVIEWS</code> list.</p>${CONFIG.googleReviewsUrl?`<a class="btn btn-gold mt-5" target="_blank" rel="noopener" href="${CONFIG.googleReviewsUrl}">Read Google Reviews</a>`:''}</div>`;

// ---------- Contact ----------
$('#addr').textContent=CONFIG.address;
$('#wa2').href=$('#wafab').href=wa('Hello Chak Bro, I have an enquiry.');
$('#dir').href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent('Chak Bro Pub & Lounge, '+CONFIG.address);
$('#copy').onclick=async()=>{const s=$('#copy span');
 try{await navigator.clipboard.writeText(CONFIG.address);s.textContent='Copied!'}catch{s.textContent='Copy failed'}
 setTimeout(()=>s.textContent='Copy Address',2000)};
$('#yr').textContent=new Date().getFullYear();

const hero=$('#home');hero.classList.add('overflow-hidden');
hero.insertAdjacentHTML('afterbegin',`<div class="kb absolute inset-0" style="background:linear-gradient(180deg,rgba(12,12,12,.9),rgba(12,12,12,.72) 55%,#0c0c0c),url(${IMG.bar}) center/cover"></div>`);
hero.insertAdjacentHTML('beforeend',Array.from({length:22},()=>`<span class="ember" style="left:${Math.random()*100}%;--dx:${Math.random()*80-40}px;animation-duration:${6+Math.random()*8}s;animation-delay:${-Math.random()*10}s;width:${2+Math.random()*3}px;height:${2+Math.random()*3}px"></span>`).join(''));
$('#splashimg').src=$('#nav img').src;
const bar=$('#bar');addEventListener('scroll',()=>{bar.style.width=(scrollY/(document.documentElement.scrollHeight-innerHeight)*100)+'%'},{passive:true});
const navLinks=[...document.querySelectorAll('#links a')];
const so=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)navLinks.forEach(a=>a.classList.toggle('text-gold',a.getAttribute('href')==='#'+x.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
NAV.forEach(([id])=>{const el=document.getElementById(id);el&&so.observe(el)});
// ---------- Experiences slider ----------
const ex=$('#exp'),cards=[...ex.children],dots=$('#dots');
dots.innerHTML=cards.map((_,i)=>`<button class="h-2 w-2 rounded-full bg-cream/30 transition-all" aria-label="Go to slide ${i+1}"></button>`).join('');
const idx=()=>ex.scrollLeft+ex.clientWidth>=ex.scrollWidth-4?cards.length-1:cards.reduce((b,c,i)=>Math.abs(c.offsetLeft-ex.scrollLeft)<Math.abs(cards[b].offsetLeft-ex.scrollLeft)?i:b,0);
const go=i=>ex.scrollTo({left:cards[(i+cards.length)%cards.length].offsetLeft,behavior:'smooth'});
const mark=()=>{const a=idx();[...dots.children].forEach((d,i)=>{d.classList.toggle('bg-gold',i===a);d.classList.toggle('w-6',i===a)})};
ex.addEventListener('scroll',mark,{passive:true});mark();
$('#xp').onclick=()=>go(idx()-1);$('#xn').onclick=()=>go(idx()+1);
dots.onclick=e=>{const i=[...dots.children].indexOf(e.target.closest('button'));if(i>=0)go(i)};
ex.onkeydown=e=>{if(e.key==='ArrowRight')go(idx()+1);if(e.key==='ArrowLeft')go(idx()-1)};
let hold=false;['mouseenter','touchstart','focusin'].forEach(v=>ex.addEventListener(v,()=>hold=true));['mouseleave','touchend','focusout'].forEach(v=>ex.addEventListener(v,()=>hold=false));
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)setInterval(()=>{if(!hold)go(idx()+1)},4500);
$('#aboutimg').src=IMG.interior;
// ---------- Scroll reveal ----------
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
icons();
