let elem1 = document.querySelector('#elem1')
let elem2 = document.querySelector('#elem2')
let elem3 = document.querySelector('#elem3')

//stopPropagation() останавливает всплытие но на текущем моменте все обработчики выполнятся
//event.stopImmediatePropagation() останавливает обработку события на текущем моменте

elem1.addEventListener('click', () => {
    console.log('зелёный всплытие')
})

elem1.addEventListener('click', () => {
    console.log('зелёный погружение')
}, true)

elem2.addEventListener('click', (event) => {
    console.log('синий - всплытие')

})
elem2.addEventListener('click', (event) => {
    console.log('синий - погружение')

}, true)

elem3.addEventListener('click', () => {
    console.log('розовый всплытие')
})

elem3.addEventListener('click', () => {
    console.log('розовый погружение')
}, true)

// ************************************************************
let parent = document.querySelector('#parent')
let btn = document.querySelector('button')
let block = document.querySelector('#block')

btn.addEventListener('click', (e) => {
    block.classList.add('active')
    e.stopPropagation()
})

parent.addEventListener('click', () => {
    block.classList.remove('active')
})

