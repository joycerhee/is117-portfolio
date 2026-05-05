const form = document.getElementById('contactForm');
const statusMessage = document.getElementById('formStatus');

function showStatus(message, success = false) {
  statusMessage.textContent = message;
  statusMessage.style.color = success ? '#16a34a' : '#dc2626';
}

function isEmailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function handleContactSubmit(event) {
  event.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const interest = form.interest.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !interest || !message) {
    showStatus('Please fill in all fields before submitting.');
    return;
  }

  if (!isEmailValid(email)) {
    showStatus('Please enter a valid email address.');
    return;
  }

  showStatus('Thank you! Your request has been received. I will follow up shortly.', true);
  form.reset();
}

if (form) {
  form.addEventListener('submit', handleContactSubmit);
}
