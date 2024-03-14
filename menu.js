fetch(menu.json)

//Que hace esta linea? Esta linea inicia la carga del archivo menu.json,fetch es una funcion de javascript que facilita la realizacion de solicitudes de red como obtener datos de un archivo o de un endpoint de API.
//Com0 funciona? fetch devuelve una promesa que, cuando se resuelve, te da acceso a la respuesta de la solicitud. Esta respuesta no es directamente los datos en formato JSON, si no un objeto de respuesta que incluye varios detalles sobre la respuesta misma.

.then(response => response.json())
//Que hace? Esta linea toma el objeto de respuesta obtenida del fetch y utiliza el metodo .json() para convertir el cuerpo de la respuesta en un objeto javascript (esto asume el cuerpo de la respuesta esta en formato JSON).
//Como funciona? El metodo .json() tambien devuelve una promesa, la cual se resuelve con el contenido del cuerpo en forma JSON.

.then(data => {
    const menuContainer =document.getElementById('menu-container');
    //Que hace? Aqui se procesan los datos JSON ya convrtidos. Se obtiene una referencia el contenedor del menu en HTML mediante getElementByID ('menu-container'), y luego se itera sobre los elementos (categorias) del menu.
    data.items.forEach(category => {
        const categoryTitle = document.createElement('h2');
        //Que hace? Aqui se crea un elemento h2, se asigna el nombre de la categoria como su contenido de texto, y luego se añade este titulo al contenedor menu.
        categoryTitle.textContent = category.category;
        menuContainer.appendChild(categoryTitle);
        const table = document.createElement('table');
        //Que hacee? Se crea un elemento table para cada categoria. Ademas, se prepara el encabezado (tablehead) con las columnas pertinentes. tableBody se inicializa vacio y se llamara con los elmentos de la categoria.
        const tableHead =  `<tr><th>Foto</th><th>Descripcion</th><th>Precio</th></tr>`;
        let tableBody = '';
    });
       
})