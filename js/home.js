var welcomeTitle = document.querySelector('.form h1');
var logoutBtn = document.getElementById('logoutBtn');
var userName = localStorage.getItem('userName');


if (userName) {
  welcomeTitle.innerHTML = "Welcome " + userName;
}


logoutBtn.addEventListener('click', function() {
  localStorage.removeItem('userName'); 
  window.location.href = 'index.html'; 
});
