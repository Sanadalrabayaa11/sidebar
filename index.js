document.querySelector('.showSidebarBtn').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.add('open');
    document.querySelector('.overlay').style.display = 'block';
  });
  
  document.querySelector('.closeSidebarBtn').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.remove('open');
    document.querySelector('.overlay').style.display = 'none';
  });
  