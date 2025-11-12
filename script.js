document.getElementById("btnLogin").addEventListener("click", function() {
  
  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;
  const mensaje = document.getElementById("mensaje");
  
  const Usuarios = { 
        admin : { Correo: 'admin@go.com', Contraseña: '1234' },
        user  : { Correo: 'user@go.com', Contraseña: '4321' },
        guest : { Correo: 'guest@go.com', Contraseña: '1324' }
    };

    // Recorremos el objeto buscando coincidencia
    let accesoPermitido = false;

    for (let j in Usuarios) {
        let Aux = Usuarios[j];

        if (usuario === Aux.Correo && clave === Aux.Contraseña) {
            accesoPermitido = true;
            break;
        }
    }

    if (accesoPermitido) {
        mensaje.style.color = "green";
        mensaje.textContent = "Acceso concedido ✅";

        // Mostramos y ocultamos secciones
        document.querySelector('.Misetion').style.display = "block";
        document.querySelector('.Misetion1').style.display = "none";
    } else {
        mensaje.style.color = "red";
        mensaje.textContent = "Usuario o contraseña incorrectos ❌";
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

    comment.innerHTML = `
        <p>${text}</p>
        <small>${formattedDate}</small>
        <span class="delete-btn">X</span>
    `;

    commentContainer.prepend(comment);
    commentInput.value = "";

    const deleteBtn = comment.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        comment.remove();
    });
});
/////////////////////////////////////////

