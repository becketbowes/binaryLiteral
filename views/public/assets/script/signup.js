async function signupCall(event) {
  event.preventDefault();

  const theuser = document.querySelector('#signupuser').value.trim();
  const theemail = document.querySelector('#signupemail').value.trim();
  const thepass = document.querySelector('#signuppass').value.trim();
  const thelanguage = document.querySelector('#signuplanguage').value;
  const thetheme = document.querySelector('#signuptheme').value;
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
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.signup').addEventListener('submit', signupCall);