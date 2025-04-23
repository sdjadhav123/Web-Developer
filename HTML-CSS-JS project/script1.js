const toggleBtn =
document.getElementById('toggle-btn');
const body = document.body;

toggleBtn.addEventListener('click', ()
=>{
  body.classList.toggle('dark-mode');
  if
  (body.classList.contains('dark-mode')) {
    toggleBtn.textContent= "🌞";
  }
   else {
    toggleBtn.textContent = "🌙";
   }
});