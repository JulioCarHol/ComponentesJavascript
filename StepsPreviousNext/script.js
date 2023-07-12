// Obtener elementos del DOM
const progress = document.getElementById("progress")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circles = document.querySelectorAll(".circle")

let currentActive = 1 //variable paso acutal

//Variable para pasar boton
next.addEventListener("click", () => {
  currentActive++ //incrementar

  //Verifica la cantidad de pasos actuales
    if(currentActive > circles.length) {
      currentActive = circles.length
    }
    update() //actualizar
})

//Variable para boton anterior
prev.addEventListener("click", () => {
  currentActive--

  //Verificar si el paso actual es menor a 1 para establecer ese valor
  if(currentActive < 1) {
    currentActive = 1
  }
  update() //Llama la funcion

})

function update() {

  //Agrega y remueve 'active' de los circulos
  circles.forEach((circle, idx) => {
    if(idx < currentActive ) {
      circle.classList.add('active')
    } else{
      circle.classList.remove('active')
    }
  } )
  //Elementos con la clase 'active'
  const actives = document.querySelectorAll('.active')
  //Establece la longitud de la linea entre los circulos
  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

  //Deshabilita y habilita los botones  al evular las condiciones
  if(currentActive === 1){
    prev.disabled = true
  } else if(currentActive === circles.length){
    next.disabled = true
  }else{
    prev.disabled = false
    next.disabled = false
  }
}
