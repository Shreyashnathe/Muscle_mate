// Features Button 
function toggleDropdown(event) {
  event.preventDefault(); // Prevent the default link behavior
  const dropdownMenu = event.target.closest('.dropdown').querySelector('.dropdown-menu');
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}


// ================================

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  // Add your login logic here
  alert(`Logged in with ${email}`);
});