import {sumar} from './funciones.js'

/*
let nombre = "Milenka"
let num1 = 123
let num2 = 654
let resultado = num1 + num2
console.log(resultado)
console.log(nombre)

function saludo(){
    console.log("Hola función")
}

function f_nombre(){
    console.log("Hola " + nombre)
}

saludo()
f_nombre()

if (resultado < 1000){
    console.log(resultado)
}
else if (resultado > 1000){
    console.log("Resultado sobre mil")
}
else {
    console.log("Else")
}

let usuario = document.getElementById("usuarioInput")
console.log(usuario)
*/

/*
let datosAdmin ={
    "nombreCompleto": "Milenka Guerra",
    "usuario": "mile",
    "password": "mile123ñ",
    "estado": true
}

window.onload = function(){
    if (window.location.pathname.endsWith("home.html")){
        let usuarioLogin = JSON.parse(localStorage.getItem("datosUsuario"))
        if (usuarioLogin.estadoLogin){
            document.getElementById("tituloHome").textContent = "Bienvenidx " + usuarioLogin.nombre
        }
    }
}

function datosUsuario(){
    let usuario = document.getElementById("usuarioInput").value
    let psswd = document.getElementById("passwordInput").value

    if (usuario == "" || psswd == ""){
        alert("No puede tener datos vacíos.")
    }
    else if (usuario.length <3 || psswd.length <3){
        alert("Los datos deben tener mínimo 3 caracteres.")
    }
    else if (usuario == datosAdmin.usuario && psswd == datosAdmin.password) {
        let usuarioLogueado={
            "nombre": datosAdmin.nombreCompleto,
            "estadoLogin": datosAdmin.estado
        }
        localStorage.setItem("datosUsuario", JSON.stringify(usuarioLogueado))
        alert("Bienvenidx!")
        window.location.href="home.html"
    }
}

*/

function registroUsuario(){
    let nombre = document.getElementById("valNombre").value
    let apellido = document.getElementById("valApellido").value
    let usuario = document.getElementById("valUsuario").value
    let correo = document.getElementById("valEmail").value
    let psswd = document.getElementById("valPassword").value
    let psswd2 = document.getElementById("valPassword2").value
    let existe = false
    let users = JSON.parse(localStorage.getItem("usuarios")) || []

    for (let i = 0 ; i < users.length; i++){
        if (users[i].correo === correo){
            existe = true
            break
        }
    }

    if (nombre == "" || apellido == "" || usuario == "" || correo == "" || psswd == ""){
        alert("No puede tener campos vacíos.")
    }
    else if (psswd != psswd2){
        alert("Las contraseñas no coinciden.")
    } else if (existe) {
        alert("El correo ya está registrado.")
    } else {
        users.push({nombre, apellido, usuario, correo, psswd})
        localStorage.setItem("usuarios", JSON.stringify(users))
        alert("Se ha registrado con éxito")
        window.location.href="index.html"
    }
}

function login(){
    let usuario = document.getElementById("usuarioInput").value
    let psswd = document.getElementById("passwordInput").value

    for (let i = 0 ; i < users.length; i++){
        if (users[i].usuario === usuario){
            usuarioLogin = users[i]
            break
        }
    }

    if (usuario == "" || psswd == ""){
        alert("No puede tener datos vacíos.")
    }
    else if (usuarioLogin.usuario === usuario && usuarioLogin.password === psswd){
        localStorage.setItem("datosUsuario", JSON.stringify(usuarioLogueado))
        window.location.href="home.html"
    } else {
        alert("Usuario o contraseña incorrectos.")
    }
}
    
let datosAdmin = {
    "nombreCompleto": "Milenka Guerra",
    "usuario": "mile",
    "password": "mile123ñ",
    "estado": true
}

console.log(datosAdmin.nombreCompleto)

// destructuring
const {nombreCompleto, usuario, password, estado} = datosAdmin

// const [] = nombreLista

// Funciones de otro archivo
sumar(1,10)


