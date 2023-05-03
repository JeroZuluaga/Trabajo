let Increase, Reset, Decrease;

let Increment = 0;

let show = document.querySelector(`.show`)
let cuerpo = document.querySelector(`.container`)

document.addEventListener(`click`, (e) => {
    console.log(e)

    if (e.target.matches('#Decrease')) {
        Increment--
        show.innerHTML = Increment
        cuerpo.getElementsByClassName. backgroundColor = 'rgba(00, 00, 000, 1)'
        document.getElementById('img'). src = './IMG/imagen para el contador.jpeg '
    }
    else
        if (e.target.matches('#Increase')) {
            Increment++
            show.innerHTML = Increment
        }
     else if (e.target.matches('#Reset')) {
        Increment = 0
        show.innerHTML = Increment
     }   

})
