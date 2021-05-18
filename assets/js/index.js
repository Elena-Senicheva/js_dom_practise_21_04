
/*function count(){
  let i=0;
const id = setInterval(()=> {
   console.log(++i);
  if(i >= 20) {
    clearInterval(id);
  }
},500)
} 

count(); */

const btn= document.getElementById("testButton");

btn.addEventListener('click',clickHandler());

function clickHandler(){

  return(e) => {
    setTimeout(()=> {
      alert('Single');
      },500)
  }
}