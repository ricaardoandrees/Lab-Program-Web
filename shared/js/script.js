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
});
