const sendForm = ({ formid, someElem = [] }) => {
  const form = document.getElementById(formid);
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка";
  const successText = "Спасибо! Наш менеджер с Вами свяжется!";

  statusBlock.style.color = "white";

  const validate = (list) => {
    let success = true;

    list.forEach((input) => {
      switch (input.name) {
        case "user_name":
          if (!/[а-яА-Я\s]/g.test(input.value)) {
            input.style.border = "1.5px solid red";
            success = false;
          } else {
            input.style.border = "none";
          }
          break;
        case "user_message":
          if (!/[а-яА-Я0-9\.\,\s]/g.test(input.value)) {
            input.style.border = "1.5px solid red";
            success = false;
          } else {
            input.style.border = "none";
          }
          break;
        case "user_phone":
          if (/[^+()-\d]/g.test(input.value)) {
            input.style.border = "1.5px solid red";
            success = false;
          } else {
            input.style.border = "none";
          }
          break;
      }
    });
    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        // "Content-Type": "multipart/form-data",
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    // сбор всех данных из формы
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          setTimeout(() => {
            statusBlock.textContent = "";
          }, 3000);

          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      statusBlock.textContent = "Данные не валидны!!!";
    }
  };

  try {
    if (!form) {
      throw new Error("Верните форму на место, пожалуйста!!!))");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
