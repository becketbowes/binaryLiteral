async function loginCall(event) {
    event.preventDefault();

    const theemail = document.querySelector('#email').value.trim();
    const thepass = document.querySelector('#pass').value.trim();
    const thelanguage = document.querySelector('#language').value;
    const thetheme = document.querySelector('#theme').value;
    console.log(theemail, thepass, thelanguage, thetheme);

    if (theemail && thepass) {
        const response = await fetch('/api/readers/login', {
            method: 'POST',
            body: JSON.stringify({ email: theemail, pass: thepass }),
            headers: { 'Content-Type': 'application/json' }
        })
        if (response.ok) {
            console.log('success');
        } else {
            alert(response.statusText);
        }
    }

    // const id = req.session.id

    // if (thelanguage && thetheme && id) {
    //     const res = await fetch(`/api/readers/${id}`, {
    //         method: 'put',
    //         body: JSON.stringify({ binary: thelanguage, blackpage: thetheme }),
    //         headers: { 'Content-Type': 'application/json' }
    //     })
    //     if (res.ok) {
    //         console.log('success');
    //     } else {
    //         alert(response.statusText);
    //     }
    // }
};

document.querySelector('.login').addEventListener('submit', loginCall);


                  // let id = data.id
            // fetch(`/api/readers/${id}`, {
            //     method: 'put',
            //     body: JSON.stringify({ binary: thelanguage, blackpage: thetheme }),
            // })
            // .then((data) => console.log(data))
            // .catch(err => { console.log(err); res.status(500).json(err); }) 
