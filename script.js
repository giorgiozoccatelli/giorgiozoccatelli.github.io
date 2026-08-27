function toggleTheme(){
  var r=document.documentElement,b=document.getElementById('themeBtn'),d=r.getAttribute('data-theme')==='dark';
  r.setAttribute('data-theme',d?'light':'dark');
  b.textContent=d?'\u25cb light':'\u25cf dark';
  localStorage.setItem('gz-theme',d?'light':'dark');
}
(function(){
  var s=localStorage.getItem('gz-theme'),p=window.matchMedia('(prefers-color-scheme: dark)').matches;
  var t=s||(p?'dark':'light');
  document.documentElement.setAttribute('data-theme',t);
  var b=document.getElementById('themeBtn');
  if(b)b.textContent=t==='dark'?'\u25cf dark':'\u25cb light';
})();
(function(){
  var els=document.querySelectorAll('[data-reveal]');
  if(!('IntersectionObserver' in window)||!els.length)return;
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  },{threshold:.15,rootMargin:'0px 0px -40px 0px'});
  els.forEach(function(el){io.observe(el);});
})();