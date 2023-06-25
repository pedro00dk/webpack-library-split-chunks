//
document.body.appendChild(document.createElement('div')).textContent = 'hello world!'

const clearButton = document.body.appendChild(document.createElement('button'))
clearButton.textContent = 'clear'
clearButton.onclick = () => document.body.querySelectorAll('pre').forEach(e => e.remove())

const loadButton = document.body.appendChild(document.createElement('button'))
loadButton.textContent = 'click to load "b" translation file'
loadButton.onclick = async () => {
    const b = await import('b')
    console.log({ b })
    console.log({ getTranslation: b.getTranslation })

    // fails here (b's translation.json chunk is not included into a's bundle)
    const translation = b.getTranslation()

    document.body.appendChild(document.createElement('pre')).textContent = JSON.stringify(translation, null, 4)
}
