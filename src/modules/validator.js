const validator = () => {
  // форма 1
  const formText = document.querySelector("#form1-name");
  const formPhone = document.querySelector("#form1-phone");
  const formEmail = document.querySelector("#form1-email");
  const form = document.querySelector("#form1");

  // форма 2
  const formText2 = document.querySelector("#form2-name");
  const formPhone2 = document.querySelector("#form2-phone");
  const formEmail2 = document.querySelector("#form2-email");
  const form2Message = document.querySelector("#form2-message");
  const form2 = document.querySelector("#form2");

  // форма 3
  const formText3 = document.querySelector("#form3-name");
  const formPhone3 = document.querySelector("#form3-phone");
  const formEmail3 = document.querySelector("#form3-email");
  const form3 = document.querySelector("#form3");

  // калькулятор
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  const calcSquare = document.querySelector(".calc-square");

  // форма 1
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    /[^а-яА-Я-]/g.test(formText.value) && formText.value !== ""
      ? console.log("В инпуте только кирилица")
      : console.log("true");

    /[^a-z0-9@-_.!~*']/g.test(formEmail.value) && formEmail.value !== ""
      ? console.log("В инпуте только почта")
      : console.log("true");

    /[^() -\d]/g.test(formPhone.value) && formPhone.value !== ""
      ? console.log("В инпуте только числа")
      : console.log("true");
  });
  // форма 2
  form2.addEventListener("submit", (event) => {
    event.preventDefault();

    /[^a-z0-9@-_.!~*']/g.test(formEmail2.value) && formEmail2.value !== ""
      ? console.log("В инпуте только почта")
      : console.log("true");

    /[^а-яА-Я-]/g.test(formText2.value) && formText2.value !== ""
      ? console.log("В инпуте только кирилица")
      : console.log("true");

    /[^() -\d]/g.test(formPhone2.value) && formPhone2.value !== ""
      ? console.log("В инпуте только числа")
      : console.log("true");

    /[^а-яА-Я-]/g.test(form2Message.value) && form2Message.value !== ""
      ? console.log("В инпуте только кирилица")
      : console.log("true");
  });
  // форма 3
  form3.addEventListener("submit", (event) => {
    event.preventDefault();

    /[^a-z0-9@-_.!~*']/g.test(formEmail3.value) && formEmail3.value !== ""
      ? console.log("В инпуте только почта")
      : console.log("true");

    /[^а-яА-Я-]/g.test(formText3.value) && formText3.value !== ""
      ? console.log("В инпуте только кирилица")
      : console.log("true");

    /[^() -\d]/g.test(formPhone3.value) && formPhone3.value !== ""
      ? console.log("В инпуте только числа")
      : console.log("true");
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
