document.getElementById("btnLogin").addEventListener("click", function() {
  
  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;
  const mensaje = document.getElementById("mensaje");
  
  const Usuarios = { 
    admin : { Correo: 'admin@go.com', Contraseña: '1234' },
    user : { Correo: 'user@go.com', Contraseña: '4321'},
    guest : { Correo: 'guest@go.com', Contraseña: '1324'  }}
  
    for (let j in Usuarios) { // Leyendo el objeto Usuarios

      let Aux = Usuarios[j];

      for (let y in Aux) {

      if(Aux.Correo === "admin@go.com" && Aux.Contraseña === "1234") {
    mensaje.style.color = "green";
    mensaje.textContent = "Acceso concedido ✅";
    Misetion.style.display = "block";
    Misetion1.style.display = "None";
  } else {
    mensaje.style.color = "red";
    mensaje.textContent = "Usuario o contraseña incorrectos ❌";
  }


        
          

      }
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

