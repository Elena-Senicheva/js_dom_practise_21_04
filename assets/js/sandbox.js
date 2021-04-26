const btn = document.querySelector('#unique');

const btnHandler = ()=>{
  alert('success');
  btn.removeEventListener('click', btnHandler);
}

btn.addEventListener('click', btnHandler);
//или но тогда убираем btn.removeEventListener
btn.addEventListener('click', btnHandler, {once: true});

//пример с заміканием
function createBtnHandler(clicksAmount = 5) {
  const btnHandler = () => {
    alert("success");
    clicksAmount--;
    if (clicksAmount === 0) {
      btn.removeEventListener("click", btnHandler);
    }
  };
  return btnHandler;
}
btn.addEventListener("click", createBtnHandler(3));