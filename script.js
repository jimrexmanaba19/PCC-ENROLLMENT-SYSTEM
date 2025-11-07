// Simple database simulation using localStorage
const users = JSON.parse(localStorage.getItem('users')) || [];

// Function to show sections
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.display = 'none';
    section.classList.remove('animate');
  });
  const targetSection = document.getElementById(sectionId);
  targetSection.style.display = 'flex';
  targetSection.classList.add('animate');
  // Trigger animation
  setTimeout(() => {
    targetSection.style.animation = 'fadeIn 0.5s ease-out';
  }, 10);
}

// Login form handling
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Check against simulated database
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    alert('Login successful!');
    // Redirect or show next section
  } else {
    alert('Invalid credentials!');
  }
});

// Initialize with default users (for demo)
if (users.length === 0) {
  users.push({ username: 'admin', password: 'admin123' });
  users.push({ username: 'student', password: 'student123' });
  localStorage.setItem('users', JSON.stringify(users));
}

// Default to homepage on load
showSection('homepage');