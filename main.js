// Basic interactivity for Selective Vacations

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Trip Planner form submission handler (mock)
  const plannerSubmitBtn = document.querySelector('.planner-submit');
  if (plannerSubmitBtn) {
    plannerSubmitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Trip planning request started! This would open the full Plan My Trip form or scroll to it.');
    });
  }
});
