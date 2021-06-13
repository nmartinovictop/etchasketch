let rows = 25;
const cell = document.createElement('div');
cell.classList.add('grid')

const br = document.createElement('br')

cell.style.cssText = `outline: 1px solid black; height: ${100/rows}vh; width: ${99/rows}vw; `

const container = document.querySelector('.container')

for (o = 0; o < rows*rows; o++) {
    container.appendChild(cell.cloneNode())

}

const divs = document.querySelectorAll('.grid')

divs.forEach((div) => {

    // and for each one we add a 'click' listener
    div.addEventListener('mouseover', (e) => {
      console.log(e.currentTarget.style.cssText += 'background: red');
    });
  });