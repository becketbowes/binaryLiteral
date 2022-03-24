async function writeCall(event) {
    event.preventDefault();

    const title = document.querySelector('textarea[name="title"]').value.trim();
    const img = document.querySelector('textarea[name="imagename"]').value.trim();
    const imgalt = document.querySelector('textarea[name="altimgtext"]').value.trim();
    const keyword = document.querySelector('textarea[name="keywords"]').value.trim();
    const art = document.querySelector('textarea[name="textfield"]').value.trim();

    console.log (title, img, imgalt, keyword, art);

    if (title, img, imgalt, keyword, art) {
        const res = await fetch('/api/literals', {
            method: 'POST',
            body: JSON.stringify ({ title, img, imgalt, keyword, art }),
            headers: { 'Content-Type': 'application/json' }
        })
        if (res.ok) {
            document.location.replace('/');
        } else {
            alert(res.statusText);
        }
    }
}

document.querySelector('.compose').addEventListener('submit', writeCall);