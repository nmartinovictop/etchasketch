let rows = 10;
let cellSize = 960/rows
const cell = document.createElement('div');
cell.classList.add('grid')

const br = document.createElement('br')

cell.style.cssText = `outline: 1px solid black; height: ${cellSize}px; width: ${cellSize}px`

const container = document.querySelector('.container')

for (o = 0; o < rows*rows; o++) {
    container.appendChild(cell.cloneNode())

}

let divs = document.querySelectorAll('.grid')


const resize = document.querySelector('.resize')
divs.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
      console.log(e.currentTarget.style.cssText += 'background: goldenrod');
    });
  });


  resize.addEventListener('click', () => {
      rows = parseInt(prompt("Enter new rows"))
      
      while (container.firstChild) {
          container.removeChild(container.firstChild)
      }
      
      cellSize = 960/rows
      cell.style.cssText = `outline: 1px solid black; height: ${cellSize}px; width: ${cellSize}px`


      for (o = 0; o < rows*rows; o++) {
        container.appendChild(cell.cloneNode())
    }

    divs = document.querySelectorAll('.grid')
    divs.forEach((div) => {
        div.addEventListener('mouseover', (e) => {
          console.log(e.currentTarget.style.cssText += 'background: goldenrod');
        });
      });

  }
   )