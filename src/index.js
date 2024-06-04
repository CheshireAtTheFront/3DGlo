// точка входа

import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
// import validator from "./modules/validator";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";

timer("8 july 2024");
menu();
modal();
// validator();
tabs();
slider();
calc(100);
sendForm({
  formid: "form1",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({
  formid: "form2",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({
  formid: "form3",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
