document.addEventListener("DOMContentLoaded", function(event) {
    let form = document.querySelector(".js-form")
    formInput = document.querySelectorAll('.js-input')
    inputLogin = document.querySelector('.js-input-login')
    inputPassword = document.querySelector('.js-input-password')

    function validateLogin(login) {
      let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(String(login).toLowerCase())
  }

  function validatePassword(password) {
      let re = /[a-zA]/;
      return re.test(String(password).toLowerCase())
  }

  form.onsubmit = function() {
    let = logVal = inputLogin.value,
          passVal = inputPassword.value;
          emptyInput = Array.from(formInput).filter(input => input.value === '');

    formInput.forEach(function (input) {
      if (input.value === ''){
          input.classList.add('error');
          console.log('Поле не заповнене');
      } else {
        input.classList.remove('error');
      }
    });


    if (emptyInput.length !== 0) {
      console.log('Поля не заповнені');
      return false;
    }


    if (!validateLogin(logVal)) {
      console.log('Логін містить некоректні символи');
      inputLogin.classList.add('error');
      return false;
    } else {
        inputLogin.classList.remove('error');
    }


    if (!validatePassword(passVal)) {
      console.log('Пароль містить некоректні символи');
      inputPassword.classList.add('error');
      return false;
    } else {
        inputPassword.classList.remove('error');
    }
  }  
})