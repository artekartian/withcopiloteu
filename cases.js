/* ================================================
   cases.js – m365withcopilot.eu
   Scenariusze branżowe + rendering
   ================================================ */

var cases=[
  {url:"kancelaria.html",tag:"Kancelarie i administracja",title:"Copilot w kancelarii – dokumenty, pisma i spotkania bez chaosu",desc:"95% pracy to tekst. Copilot pisze, podsumowuje i organizuje – prawnik skupia się na meritum."},
  {url:"finanse.html",tag:"Finanse i audyt",title:"Copilot w finansach – od danych do raportu bez kopiuj-wklej",desc:"Analizy, sprawozdania i korespondencja z klientami. Copilot robi draft – Ty weryfikujesz."},
  {url:"nieruchomosci.html",tag:"Nieruchomości i inwestycje",title:"Copilot w nieruchomościach – oferty, analizy i prezentacje bez opóźnień",desc:"Oferty inwestycyjne, analizy rynku, prezentacje dla klientów. Copilot przyspiesza każdy etap."},
  {url:"handel.html",tag:"Dystrybucja i sprzedaż",title:"Copilot w dystrybucji – zamówienia, wyceny i raporty sprzedażowe szybciej",desc:"Wyceny, zamówienia, maile do klientów, raporty tygodniowe. Copilot automatyzuje powtarzalną pracę."},
{url:"medycyna.html",tag:"Medycyna i zdrowie",title:"Copilot w medycynie – dokumentacja, procedury i korespondencja bez przestojów",desc:"Procedury, dokumentacja, korespondencja z dostawcami. Copilot porządkuje i przyspiesza biuro."},
  {url:"produkcja.html",tag:"Produkcja i przemysł",title:"Copilot dla produkcji – biuro pracuje szybciej, hala nie czeka",desc:"Instrukcje, procedury, raporty, komunikacja wewnętrzna. Copilot odciąża biuro – hala dostaje info szybciej."}
];

var _io=null;

function _getIO(){
  if(!_io){
    _io=new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){e.target.classList.add("visible");_io.unobserve(e.target);}
      });
    },{threshold:0.15});
  }
  return _io;
}

function _observeNew(container){
  var obs=_getIO();
  container.querySelectorAll(".fade:not(.visible),.reveal:not(.visible)").forEach(function(el){obs.observe(el);});
}

function observeAll(){
  document.querySelectorAll(".fade,.reveal").forEach(function(el){_getIO().observe(el);});
}

function _caseCardHTML(c){
  return '<a href="'+c.url+'" class="post-card fade">'+
    '<span class="tag">'+c.tag+'</span>'+
    '<h3>'+c.title+'</h3>'+
    '<p>'+c.desc+'</p>'+
    '<span class="read">Zobacz scenariusz →</span>'+
    '</a>';
}

function renderAllCases(containerId){
  var el=document.getElementById(containerId);
  if(!el) return;
  el.innerHTML=cases.map(_caseCardHTML).join("");
  _observeNew(el);
}

function renderMoreCases(containerId){
  var el=document.getElementById(containerId);
  if(!el) return;
  var cur=location.pathname.split("/").pop()||"index.html";
  var pool=cases.filter(function(c){return c.url!==cur;});
  for(var i=pool.length-1;i>0;i--){
    var j=Math.floor(Math.random()*(i+1));
    var tmp=pool[i];pool[i]=pool[j];pool[j]=tmp;
  }
  var pick=pool.slice(0,3);
  el.innerHTML=pick.map(_caseCardHTML).join("");
  _observeNew(el);
}