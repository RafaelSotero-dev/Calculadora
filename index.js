buttonsArray = [
  '(',
  ')',
  '%',
  'AC',
  7,
  8,
  9,
  '/',
  4,
  5,
  6,
  'x',
  1,
  2,
  3,
  '-',
  0,
  '.',
  '=',
  '+',
]

const createButtons = () => {
  let count = 0
  const containerButtons = document.getElementById('ContainerButtons')
  while (count < 20) {
    createElementButton = document.createElement('div')

    containerButtons.appendChild(createElementButton)

    count++
  }
}

const colorButtons = (button) => {
  if (
    Number.isInteger(Number(button.textContent)) === false ||
    Number(button.textContent) === 0
  ) {
    return button.style.backgroundColor = '#3E2968'
  }
}

const cleanInput = (button) => {
  if (button.textContent === 'AC') {
    result = document.getElementById('InputDisplay').value
    document.getElementById('InputDisplay').value = result.substring(0, result.length - 1)
  }
}

const equalFunction = (button) => {
  if (button.textContent === '=') {
    document.getElementById('LastCalc').innerHTML =
      document.getElementById('InputDisplay').value

    const result = document.getElementById('InputDisplay').value

    if (result.indexOf('x')) {
      document.getElementById('InputDisplay').value = eval(result.replace(/x/g, '*'))
    }
    document.getElementById('InputDisplay').value = eval(result)
  }
}

const showNumbersInInput = (event, button) => {
  const inputElemet = document.getElementById('InputDisplay').value

  if (
    button.textContent != 'AC' &&
    button.textContent != '='
  ) {
    if (button.textContent === 'x') {
      document.getElementById('InputDisplay').value =
        inputElemet + event.target.textContent
    }
    document.getElementById('InputDisplay').value =
      inputElemet + event.target.textContent
  }
}

const insertInButtons = (buttons) => {
  containerButtons = document.querySelectorAll('#ContainerButtons > div')

  for (let btn = 0; btn < buttons.length; btn++) {
    containerButtons[btn].classList.add('btn')

    contentButton = document.createTextNode(buttons[btn])
    containerButtons[btn].appendChild(contentButton)

    colorButtons(containerButtons[btn])

    containerButtons[btn].addEventListener('click', (e) => {
      cleanInput(containerButtons[btn])

      showNumbersInInput(e, containerButtons[btn])

      if (document.getElementById('InputDisplay').value.length > 0) {
        equalFunction(containerButtons[btn])
      }
    })
  }
}

window.onload = () => {
  createButtons()
  insertInButtons(buttonsArray)
}
