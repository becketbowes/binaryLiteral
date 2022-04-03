async function neatCall(event) {
    // event.preventDefault = true;

    const id = event.target.id;
    console.log('window id: ', id);

    const res = await fetch('/api/literals/neat', {
        method: 'PUT',
        body: JSON.stringify({ literalkey: id }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (res.ok) {
        document.location.reload();
    } else {
        alert(res.statusText);
    }

    console.log('button clicked')
}

document.querySelector('.neatasabutton').addEventListener('click', neatCall);