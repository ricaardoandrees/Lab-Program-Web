 // Código para el formulario de cambiar clave
    document.querySelector('.config-form[action="/cambiar-clave"]').addEventListener('submit', function(event) {
        event.preventDefault();

       
        const usuario = document.getElementById('usuario').value;
        const oldPassword = document.getElementById('old-password').value;
        const newPassword = document.getElementById('new-password').value;

        
        localStorage.setItem('usuario', usuario);
        localStorage.setItem('oldPassword', oldPassword);
        localStorage.setItem('newPassword', newPassword);

        
        alert('¡Cambio de clave exitoso!');

       
        this.reset();
    });