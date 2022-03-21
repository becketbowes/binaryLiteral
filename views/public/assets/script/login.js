async function loginCall(event) {
    event.preventDefault();

    const theemail = document.querySelector('#email').value.trim();
    const thepass = document.querySelector('#pass').value.trim();
    const thelanguage = document.querySelector('#language').value;
    const thetheme = document.querySelector('#theme').value;

    if (theemail && thepass) {
        const response = await fetch('/api/readers/login', {
            method: 'post',
            body: JSON.stringify({ email: theemail, pass: thepass }),
            headers: { 'Content-Type': 'application/json' }
        })
        if (response.ok) {
            console.log('success');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login').addEventListener('submit', loginCall);


                  // let id = data.id
            // fetch(`/api/readers/${id}`, {
            //     method: 'put',
            //     body: JSON.stringify({ binary: thelanguage, blackpage: thetheme }),
            // })
            // .then((data) => console.log(data))
            // .catch(err => { console.log(err); res.status(500).json(err); }) 
