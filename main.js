console.log('main.js connected')

const handleFormInputFocus = () => {
    console.log(`focus occurred`)
}

const searchTermsInput = document.querySelector('#search-terms')
console.log(searchTermsInput)
document.addEventListener('focus', handleFormInputFocus)