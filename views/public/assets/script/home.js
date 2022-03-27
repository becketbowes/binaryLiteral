async function neatCall(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[ window.location.toString().split('/').length - 1 ];
    
    const res = await fetch('/api/literals/neat', {
        method: 'PUT',
        body: JSON.stringify({ literalKey: id }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (res.ok) {
        document.location.reload();
    } else {
        alert(res.statusText);
    }

    console.log('button clicked')
}

document.querySelector('.').addEventListener('click', neatCall);