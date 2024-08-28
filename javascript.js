document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');
    const submitButton = document.getElementById('btn-submit');
    const requiredFields = form.querySelectorAll('input[required], textarea[required]');
    const alertDiv = document.getElementById('custom-alert');
    const alertOkButton = document.getElementById('alert-ok-button');
    const alertMessage = document.getElementById('alert-message');
  
    function checkFormValidity() {
        let isValid = true;
    
        requiredFields.forEach(field => {
            if (!field.checkValidity()) {
                isValid = false;
                field.classList.add('error');
                const errorSpan = document.getElementById(field.id + '-error');
                if (errorSpan) {
                    errorSpan.style.display = 'block';
                }
            } else {
                field.classList.remove('error');
                const errorSpan = document.getElementById(field.id + '-error');
                if (errorSpan) {
                    errorSpan.style.display = 'none';
                }
            }
        });
    
        submitButton.disabled = !isValid;
        return isValid;
    }
  
    form.addEventListener('submit', function(event) {
        if (checkFormValidity()) {
            event.preventDefault(); // Impede o envio do formulário para mostrar o alerta
  
            // Configura a mensagem de sucesso
            alertMessage.innerHTML = '<img src="./assets/images/icon-success-check.svg" alt="Success Check"> <strong>Message Sent!</strong><br>Thanks for completing the form. We\'ll be in touch soon!';
            
            // Exibe o alerta
            alertDiv.classList.remove('hidden');
        } else {
            event.preventDefault();
        }
    });
  
    alertOkButton.addEventListener('click', function() {
        // Oculta o alerta
        alertDiv.classList.add('hidden');
    });
  
    requiredFields.forEach(field => {
        field.addEventListener('input', checkFormValidity);
        field.addEventListener('change', checkFormValidity);
  
        field.addEventListener('focus', function() {
            field.classList.remove('error');
            const errorSpan = document.getElementById(field.id + '-error');
            if (errorSpan) {
                errorSpan.style.display = 'none';
            }
        });
  
        field.addEventListener('blur', function() {
            if (!field.checkValidity()) {
                field.classList.add('error');
                const errorSpan = document.getElementById(field.id + '-error');
                if (errorSpan) {
                    errorSpan.style.display = 'block';
                }
            }
        });
    });
});
