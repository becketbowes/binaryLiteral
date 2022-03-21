
function signupFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const pass = document.querySelector('#pass').value.trim();

    fetch('/api/reader', {
        method: 'post',
        body: JSON.stringify({
            email,
            pass
        }),
        headers: { 'Content-Type': 'application/json' }
    }).then((response) => { console.log(response) })
}

document.querySelector('.login').addEventListener('submit', signupFormHandler);