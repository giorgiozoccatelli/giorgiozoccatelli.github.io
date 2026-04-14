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