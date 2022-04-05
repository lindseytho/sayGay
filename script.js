replaceText(document.body)

function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText)
  } else if (element.nodeType === Text.TEXT_NODE) {
    if (element.textContent.match(/ron desantis/gi)) {
      const newElement = document.createElement('span')
      newElement.innerHTML = element.textContent.replace(/(ron desantis)/gi, '<span class="rainbow">gay</span>')
      element.replaceWith(newElement)
    }
  }
}