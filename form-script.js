

// // API not yet setup

// const form = document.getElementById('myForm');
//         form.addEventListener('submit', function(event) {
//             event.preventDefault();
//             const name = document.getElementById('name').value;
//             const email = document.getElementById('email').value;
//             const message = document.getElementById('message').value;
//             fetch('https://script.google.com/macros/s/AKfycbxRFWH-BFwzKc3Mdcsltox4iSHnMzzW0IVLEyLQPyI0/dev', {
//                 method: 'POST',
//                 body: JSON.stringify({ name, email, message })
//             })
//             .then(response => response.text())
//             .then(data => {
//                 console.log(data);
//                 alert(data);
//                 form.reset();
//             })
//             .catch(error => console.error(error));
//         });