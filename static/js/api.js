// Ejemplo con API para PetHub

const url = "https://huachitos.cl/api/animales"

const consultarApi = async () => {
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        mostrarAnimales(data["data"])
}

consultarApi()

const mostrarAnimales = (animales) => {
    const contenedor = document.getElementById("contenedor")
    contenedor.innerHTML = "" // vacío para que se limpie
    animales.forEach(animal => {
        const card = document.createElement('div')
        card.classList.add("col-md-4")
        card.innerHTML = `
            <div class="card shadow-sm">
                <img src="${animal.imagen}" class="card-img-top" alt="${animal.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${animal.nombre}</h5>
                    <p class="card-text">Tipo: ${animal.tipo}</p>
                    <p class="card-text">Edad: ${animal.edad}</p>
                    <p class="card-text">Comuna: ${animal.comuna}</p>
                    <p class="card-text">Estado: ${animal.estado}</p>
                    <a href="${animal.url}">Ver más</a>
                </div>
            </div>
        `
        contenedor.appendChild(card)
    })
    
}