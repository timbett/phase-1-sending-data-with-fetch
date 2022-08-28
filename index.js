// Add your code here
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       Accept: "application/json",
     },
     body: JSON.stringify({
       name: name,
       email: email,
     }),
   })
     .then((response) => response.json())
     .then((data) => {
       console.log(data);
       document.body.innerHTML += data.id;
     })
     .catch((err) => {
       console.log(err);
       document.body.innerHTML += err.message;
     });
 }
 submitData('steve', 'user@gmail.com')