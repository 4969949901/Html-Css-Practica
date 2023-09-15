const nombre = document.getElementById('nombre')
const email = document.getElementById('email')
const contrasena = document.getElementById('password')
const boton =document.getElementById('btn')

boton.addEventListener('click',(e)=>{
    e.preventDefault()
    const dato ={
        nombre:nombre.value,
        email:email.value,
        contrasena:contrasena.value
    }
    console.log(dato)
})


