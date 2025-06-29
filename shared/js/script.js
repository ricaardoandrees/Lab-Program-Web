document.addEventListener('DOMContentLoaded', function() {
   
    document.querySelector('.contact-form').addEventListener('submit', async function(event) {
        event.preventDefault(); 

         
       const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        try {
           
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            
            if (response.ok) {
                const jsonResponse = await response.json();
                
                localStorage.setItem('formResponse', JSON.stringify(jsonResponse));
              
                document.getElementById('successAlert').style.display = 'block';
            } else {
                
                document.getElementById('errorAlert').style.display = 'block';
            }
        } catch (error) {
            console.error('Error:', error);
            
            document.getElementById('errorAlert').style.display = 'block';
        }
    });

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
});
