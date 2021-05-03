'use strict';

const btns = document.querySelectorAll("button");

const clickHandler = ({
  target: {
    parentNode,dataset: { color},
  },
}) => {
parentNode.style.background = color;
};

for (const btn of btns) {
  btn.addEventListener("click", clickHandler);
}



