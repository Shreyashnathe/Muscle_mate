// Features Button 
function toggleDropdown(event) {
  event.preventDefault(); // Prevent the default link behavior
  const dropdownMenu = event.target.closest('.dropdown').querySelector('.dropdown-menu');
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}


// ================================


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // Add your contact form submission logic here
    alert(`Thank you, ${name}! Your message has been sent.`);
  });