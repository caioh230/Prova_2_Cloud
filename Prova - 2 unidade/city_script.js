function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
  
    if (!isValidEmail(email)) {
      alert('Por favor, insira um endereço de email válido.');
      return false;
    }
  
    alert(`Email enviado para ${email} com sucesso!`);
  
    emailInput.value = '';
  
    return true;
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
      document.querySelector('.email-form').classList.add('sending');
      setTimeout(() => {
        document.querySelector('.email-form').classList.remove('sending');
      }, 1000);
    }
  });
  