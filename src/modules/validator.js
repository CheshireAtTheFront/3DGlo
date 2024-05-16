const validator = () => {
  const formText = document.querySelectorAll("[name='user_name']");
  const formPhone = document.querySelectorAll("[name='user_phone']");
  const formEmail = document.querySelectorAll("[name='user_email']");
  const formMessage = document.querySelector("#form2-message");
  // калькулятор
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  const calcSquare = document.querySelector(".calc-square");
  // форма
  formText.forEach((item) => {
    item.addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(/[^а-яА-Я-]/g, "");
    });
  });

  formPhone.forEach((item) => {
    item.addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(/[^() -\d]/g, "");
    });
  });

  formEmail.forEach((item) => {
    item.addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(/[^a-z0-9@-_.!~*']/g, "");
    });
  });

  formMessage.addEventListener("input", (event) => {
    event.target.value = event.target.value.replace(/[^а-яА-Я-]/g, "");
  });

  //калькулятор
  calcDay.addEventListener("input", (event) => {
    event.target.value = event.target.value.replace(/\D+/, "");
  });

  calcSquare.addEventListener("input", (event) => {
    event.target.value = event.target.value.replace(/\D+/, "");
  });

  calcCount.addEventListener("input", (event) => {
    event.target.value = event.target.value.replace(/\D+/, "");
  });
};

export default validator;
