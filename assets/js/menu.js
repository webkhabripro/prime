function toggleMenu() { 
  const sideMenu = document.getElementById('sideMenu'); 
  const menuIcon = document.querySelector('.menu-icon'); 
  
  sideMenu.classList.toggle('active'); 
  menuIcon.classList.toggle('active');  // <<< VERY IMPORTANT
}

// Close menu when clicking outside
document.addEventListener('click', (e) => { 
  const sideMenu = document.getElementById('sideMenu'); 
  const menuIcon = document.querySelector('.menu-icon'); 
  
  if (!sideMenu.contains(e.target) && !menuIcon.contains(e.target)) { 
    sideMenu.classList.remove('active'); 
    menuIcon.classList.remove('active');  // <<< CLOSE icon animation
  } 
});
