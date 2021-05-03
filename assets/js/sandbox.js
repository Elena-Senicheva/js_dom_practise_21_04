// поменять местами содержимое двух кнопок при нажатии
const [btn1,btn2] = document.querySelectorAll('.change-button');

const btnEnterHandler = ()=>{
  const temp = btn1.innerText;
  btn1.innerText = btn2.innerText;
  btn2.innerText = temp;

   // или [btn1.innerText, btn2.innerText] = [btn2.innerText, btn1.innerText]
}

btn1.addEventListener('mouseenter', btnEnterHandler);

btn2.addEventListener('mouseenter', btnEnterHandler);



