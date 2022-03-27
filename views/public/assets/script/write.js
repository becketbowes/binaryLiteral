//called from write.handlebars onclick this sends form information to api to create a literal

async function writeCall(event) {
    event.preventDefault();

    const title = document.querySelector('textarea[name="title"]').value.trim();
    const image = document.querySelector('textarea[name="imagename"]').value.trim();
    const imageAlt = document.querySelector('textarea[name="altimgtext"]').value.trim();
    const keyword = document.querySelector('textarea[name="keywords"]').value.trim();
    const article = document.querySelector('textarea[name="textfield"]').value.trim();

    if (title, image, imageAlt, keyword, article) {
        const res = await fetch('/api/literals', {
            method: 'POST',
            body: JSON.stringify ({ title, image, imageAlt, keyword, article }),
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