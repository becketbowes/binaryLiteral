//Called from homepage, this creates the single literal page when user clicks on the button
async function literalCall(event) {
    event.preventDefault();

   //finds literal id from window:
    const literalkey = window.location.toString().split('/')[ window.location.toString().split('/').length - 1 ];

    if (literalkey) {
        const res = await fetch(`/api/literals/${literalkey}`, {
            method: 'GET',
            body: JSON.stringify({ literalkey }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (res.ok) {
            document.location.reload;
        } else {
            alert(res.statusText);
        }
    }
}

document.querySelector('.literal').addEventListener('click', literalCall)
