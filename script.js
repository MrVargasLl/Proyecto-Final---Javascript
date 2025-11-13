let token = ""
const mensaje = document.getElementById("mensaje");
const mensaje1 = document.getElementById("mensaje1");
document.addEventListener("DOMContentLoaded", () => {
    const isToken = localStorage.getItem("token")
    if (isToken) {
        token = isToken
        document.querySelector('.Misetion').style.display = "block";
        document.querySelector('.Misetion1').style.display = "none";
    }
})


document.getElementById("btnLogin").addEventListener("click", function() {
  
  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;
  const Usuarios = { 
        admin : { Correo: 'admin@go.com', Contraseña: '1234' },
        user  : { Correo: 'user@go.com', Contraseña: '4321' },
        guest : { Correo: 'guest@go.com', Contraseña: '1324' }
    };

    // Recorremos el objeto buscando coincidencia
    let accesoPermitido = false;
    let nombreUsuario = "";//////////////////

    for (let j in Usuarios) {
        let Aux = Usuarios[j];

        if (usuario === Aux.Correo && clave === Aux.Contraseña) {
            accesoPermitido = true;
            nombreUsuario = j;////////////////
            break;
        }
    }

    if (accesoPermitido) {
        mensaje.style.color = "green";
        mensaje.textContent = "Acceso concedido ✅";

        // Mostramos y ocultamos secciones
        document.querySelector('.Misetion').style.display = "block";
        document.querySelector('.Misetion1').style.display = "none";

        // 

        // este metodo web api, solo puede guardar texto
        localStorage.setItem("token", usuario)
        localStorage.setItem("userName", nombreUsuario);////////////////
        
        setTimeout(() => {
            mensaje.textContent = ""
        }, 900)
        // finalizar el funcion
        return

    } else {
        mensaje1.style.color = "red";
        mensaje1.textContent = "Usuario o contraseña incorrectos ❌";
    }
});

//////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////
const form = document.getElementById('commentForm');
const commentInput = document.getElementById('commentInput');
const commentContainer = document.getElementById('commentContainer');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const text = commentInput.value.trim(); // ✅ CORREGIDO
    if (text === "") return;

    const comment = document.createElement('section');
    comment.classList.add('comment');

    const date = new Date();
    const formattedDate = date.toLocaleString('es-MX', {
        dateStyle: 'short',
        timeStyle: 'short'
    });
    
       const usuarioNombre = localStorage.getItem("userName") || "Desconocido"; // Si no hay nombre, usar "Desconocido"///////////////


    comment.innerHTML = `
        <p>${text}</p>
        <small>${formattedDate}</small>
        <small><strong>${usuarioNombre}</stron></small> <!-- Mostrar el nombre del usuario -->
        <span class="delete-btn">X</span>
    `;

    commentContainer.prepend(comment);
    commentInput.value = "";

    // GUARDAR EL COMENTARIO

    const storeComments = localStorage.getItem(token + "_comments")
    if (storeComments) {
        const previusComments = JSON.parse(storeComments)
        previusComments.push(text)
        localStorage.setItem(token + "_comments", JSON.stringify(previusComments))
    } else {
        localStorage.setItem(token + "_comments", JSON.stringify([text])) 
    }

    const deleteBtn = comment.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        comment.remove();
    });
});
/////////////////////////////////////////

const cerrarSesion = document.querySelector("#logout")
cerrarSesion.addEventListener("click", () => {
    localStorage.removeItem("token")
    document.querySelector('.Misetion').style.display = "none";
    document.querySelector('.Misetion1').style.display = "block";
})