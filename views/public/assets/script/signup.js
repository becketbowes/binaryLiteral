const res = require("express/lib/response");

async function signupCall(event) {
  event.preventDefault();

  const theuser = document.querySelector('#user').value.trim();
  const theemail = document.querySelector('#email').value.trim();
  const thepass = document.querySelector('#pass').value.trim();
  const thelanguage = document.querySelector('#language').value;
  const thetheme = document.querySelector('#theme').value;
  console.log(theuser, theemail, thepass, thelanguage, thetheme);

  if (theuser && theemail && thepass) {
    const response = await fetch('/api/readers', {
      method: 'post',
      body: JSON.stringify({
        user: theuser,
        email: theemail,
        pass: thepass,
        binary: thelanguage,
        blackpage: thetheme
      }),
      headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
      console.log('success');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.signup').addEventListener('submit', signupCall);