const input = document.querySelector('input')
const beverages = document.querySelectorAll('li')

const searchBev = () => {
    let inputValueToLow = input.value.toLowerCase()

    beverages.forEach(drink => {
        let drinkToLow = drink.textContent.toLowerCase()
        if(drinkToLow.indexOf(inputValueToLow) === -1){
        drink.setAttribute('style', 'display: none')
        } else{
            drink.removeAttribute('style', 'display: none')
        }
    }) 
    
}

input.addEventListener('keyup', searchBev)

