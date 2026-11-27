/* Inner-page theme toggle (no canvas). Shares state with the home page via the
   'nf-theme' key and the data-theme attribute, so a choice persists site-wide.
   Default is dark; the inline <head> script sets it before paint (no flash). */
(function () {
  var root = document.documentElement;
  try { root.dataset.theme = localStorage.getItem('nf-theme') || 'light'; } catch (e) {}
  function sync() {
    var m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute('content', root.dataset.theme === 'light' ? '#ffffff' : '#070809');
  }
  function set(t) {
    root.dataset.theme = t;
    try { localStorage.setItem('nf-theme', t); } catch (e) {}
    sync();
  }
  function wire() {
    var b = document.getElementById('theme');
    if (b) b.addEventListener('click', function () { set(root.dataset.theme === 'light' ? 'dark' : 'light'); });
    sync();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wire);
  else wire();
})();
