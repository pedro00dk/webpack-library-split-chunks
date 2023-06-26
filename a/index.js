//
document.body.appendChild(document.createElement('div')).textContent = 'hello world!'

const clearButton = document.body.appendChild(document.createElement('button'))
clearButton.textContent = 'clear'
clearButton.onclick = () => document.body.querySelectorAll('pre').forEach(e => e.remove())

const loadButton = document.body.appendChild(document.createElement('button'))
loadButton.textContent = 'click to load "b" translation file'
loadButton.onclick = async () => {
    // found another bug: ReferenceError: exports is not defined (commonjs)
    // the following is a hack around it.
    window.exports = {}

    const b = await import('b')
    console.log({ b, exports })
    console.log({ getTranslationFromB: b.getTranslation, getTranslationFromExports: exports.getTranslation })

    // fails here (b's translation.json chunk is not included into a's bundle)
    const translation = exports.getTranslation()

    document.body.appendChild(document.createElement('pre')).textContent = JSON.stringify(translation, null, 4)
}
