for (const producto of productos) {
    //Renderizar productos
    //crear DIV
    let div = document.createElement("div");

    //llenar DIV con info
    div.innerHTML = `
                    <div class="card" style="width: 18rem;">
                        <img src="" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    `;

    //agregar el DIV al body
    $("#listadoProductos").append(div);
}

