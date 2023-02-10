//OJO: DIFERENTE ENTRE querySelectorAll vs querySelector
const parrafos = document.querySelectorAll(".parrafo")



//El forEach me sirve para que haga lo mismo con cada parrafo
// parrafos.forEach(parrafo =>{
//     parrafo.addEventListener("click",() =>{
//         console.log("click")
//     })
// })


//DRAG
parrafos.forEach(parrafo =>{
    //Cuando EMPIEZO a arrtastrar con el mouse el objeto
    parrafo.addEventListener("dragstart",event =>{
        //El .innerText sirve para que imprima solo el texto del objeto HTML
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText)
        
        //Cuando lo esté arrastrando me ponga una clase nueva
        //.classList.add -> Para añadir una clase nueva
        parrafo.classList.add("dragging")

        //dataTransfer -> Esta propiedad me permite poder transferir info
        // por medio de los evento drag and drop
        //.setData() -> Le doy un data (en este caso un id)
        //                          KEY,   DATA
        event.dataTransfer.setData("id",parrafo.id)


        //Para cambiar la imagen que se ve cuando estoy arrastrando el cajoncito con el mouse
        const elem_fantasma = document.querySelector(".imagen-fantasma")
        //                               IMAGEN,   OFFSET: X, OFFSET: Y
        event.dataTransfer.setDragImage(elem_fantasma,0,0)

    })
    //Cuando FINALIZO a arrtastrar con el mouse el objeto
    parrafo.addEventListener("dragend",()=>{
        console.log("He terminado de arrastrar el párrafo: " + parrafo.innerText)
        
        //Cuando lo termine me elimine la clase nueva que se creó
        //.classList.remove -> Para quitar una clase nueva
        parrafo.classList.remove("dragging")
    })
})


//DRAG OVER
const secciones = document.querySelectorAll(".seccion")

secciones.forEach(seccion => {
    //dragover me CONTABILIZA los ms en que estoy arrastrando el objeto
    seccion.addEventListener("dragover", event =>{
        //Ponemos lo de event.preventDefault() porque arriba ya hay un evento por default
        //que hace casi lo mismo que la funcion en HTML
        event.preventDefault()


        console.log("Drag Over")


        //Para cambiar la cosita que aparece debajo del mouse cuando lo tengo seleccionado
        // Valores que puede tomar: copy-link-none-move
        event.dataTransfer.dropEffect = "link" //copy por defecto
    })

    //Cuando suelto el objeto
    seccion.addEventListener("drop", event =>{
        console.log("Drop")

        //dataTransfer -> Esta propiedad me permite poder transferir info
        // por medio de los evento drag and drop
        //.getData() -> Obtengo la data del setData
        //                                            KEY
        const id_parrafo = event.dataTransfer.getData("id")
        // console.log ("Parrafo id: ", id_parrafo)

        //Obtenemos el id que acabamos de obtener con .getData
        const parrafo = document.getElementById(id_parrafo)

        //Para pasarlo de una sección a otra
        seccion.appendChild(parrafo)
    })
})