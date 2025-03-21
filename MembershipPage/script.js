// Features Button 
function toggleDropdown(event) {
    event.preventDefault(); // Prevent the default link behavior
    const dropdownMenu = event.target.closest('.dropdown').querySelector('.dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  }
  
  
  // ================================