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
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.login').addEventListener('submit', loginCall);