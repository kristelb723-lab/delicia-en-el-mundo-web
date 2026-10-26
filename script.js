// Lista donde se guardan los productos

let carrito = [];

// AGREGAR PRODUCTO

function agregarProducto(nombre, precio) {

    carrito.push({

        nombre: nombre,

        precio: precio

    });


    actualizarCarrito();


    alert(
        nombre + " fue agregado al carrito."
    );

}


// ACTUALIZAR CARRITO

function actualizarCarrito() {

    let lista =
        document.getElementById(
            "lista-carrito"
        );


    let cantidad =
        document.getElementById(
            "cantidad"
        );

    let total =
        document.getElementById(
            "total"
        );

    lista.innerHTML = "";

    let suma = 0;


    // Si no hay productos

    if (carrito.length === 0) {

        lista.innerHTML =
            "<p>El carrito está vacío.</p>";

    }

    // Mostrar productos

    carrito.forEach(
        function(producto, indice) {

            suma =
                suma +
                producto.precio;


            let elemento =
                document.createElement(
                    "div"
                );


            elemento.className =
                "item-carrito";


            elemento.innerHTML =

                "<span>" +

                producto.nombre +

                " - Bs. " +

                producto.precio +

                "</span>" +

                "<button onclick='eliminarProducto(" +

                indice +

                ")'>Eliminar</button>";


            lista.appendChild(
                elemento
            );

        }
    );


    // Mostrar cantidad

    cantidad.textContent =
        carrito.length;

    // Mostrar total

    total.textContent =
        suma;
}

// ELIMINAR PRODUCTO

function eliminarProducto(indice) {

    carrito.splice(
        indice,
        1
    );

    actualizarCarrito();

}

function mostrarCarrito() {

    document.getElementById(
        "ventana-carrito"
    ).style.display = "block";

}

// CERRAR CARRITO

function cerrarCarrito() {

    document.getElementById(
        "ventana-carrito"
    ).style.display = "none";

}

// ENVIAR PEDIDO POR WHATSAPP

function enviarWhatsApp() {

    if (carrito.length === 0) {
        alert(
            "El carrito está vacío."
        );

        return;
    }


    let mensaje =
        "Hola, quiero realizar este pedido:%0A%0A";

    let total = 0;

    carrito.forEach(
        function(producto) {

            mensaje +=
                "- " +
                producto.nombre +
                ": Bs. " +
                producto.precio +
                "%0A";

            total =
                total +
                producto.precio;

        }
    );


    mensaje +=
        "%0ATotal: Bs. " +
        total;

    let numero =
        "59163390248";

    let enlace =
        "https://wa.me/" +
        numero +
        "?text=" +
        mensaje;

    window.open(
        enlace,
        "_blank"
    );

}