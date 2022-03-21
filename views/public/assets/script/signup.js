function signupCall(event) {
    event.preventDefault();

    function check(value) {
        result = false
        if (value === 'on') { result = true }
        return result;
    }

    const theuser = document.querySelector('#user').value.trim();
    const theemail = document.querySelector('#email').value.trim();
    const thepass = document.querySelector('#pass').value.trim();
    const theenglish = check(document.querySelector('#english').value);
    const thewhite = check(document.querySelector('#white').value);
    console.log(theuser, theemail, thepass, theenglish, thewhite);


    if (theuser && theemail && thepass) {
        fetch('/api/readers', {
          method: 'post',
          body: JSON.stringify({
            user: theuser,
            email: theemail,
            pass: thepass,
            binary: theenglish,
            blackpage: thewhite
          }),
          headers: { 'Content-Type': 'application/json' }
        }).then((response) => {console.log(response)})
      }
}

document.querySelector('.signup').addEventListener('submit', signupCall);