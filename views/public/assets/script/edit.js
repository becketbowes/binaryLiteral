async function editTitleCall(event) {
    event.preventDefault();

    const newTitle = document.querySelector('#title').value.trim();
    const literalkey = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    if (newTitle) {
        const res = await fetch(`/api/literals/title/${literalkey}`, {
            method: 'PUT',
            body: JSON.stringify({ newTitle, literalkey }),
            headers: { 'Content-Type': 'application/json' }
        })
        if (res.ok) {
            document.location.replace(`/literal/${literalkey}`);
        } else {
            alert(res.statusText);
        }
    }
};

async function editImageCall(event) {
    event.preventDefault();

    const newImage = document.querySelector('#imagename').value.trim();
    const literalkey = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    if (newImage) {
        const res = await fetch(`/api/literals/image/${literalkey}`, {
            method: 'PUT',
            body: JSON.stringify({ newImage, literalkey }),
            headers: { 'Content-Type': 'application/json' }
        })
        if (res.ok) {
            document.location.replace(`/literal/${literalkey}`);
        } else {
            alert(res.statusText);
        }
    }
};

async function editImgAltCall(event) {
    event.preventDefault();

    const newImgAlt = document.querySelector('#altimgtext').value.trim();
    const literalkey = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    if (newImgAlt) {
        const res = await fetch(`/api/literals/imgalt/${literalkey}`, {
            method: 'PUT',
            body: JSON.stringify({ newImgAlt, literalkey }),
            headers: { 'Content-Type': 'application/json' }
        })
        if (res.ok) {
            document.location.replace(`/literal/${literalkey}`);
        } else {
            alert(res.statusText);
        }
    }
};

async function editKeywordsCall(event) {
    event.preventDefault();

    const newKeywords = document.querySelector('#keywords').value.trim();
    const literalkey = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    if (newKeywords) {
        const res = await fetch(`/api/literals/keywords/${literalkey}`, {
            method: 'PUT',
            body: JSON.stringify({ newKeywords, literalkey }),
            headers: { 'Content-Type': 'application/json' }
        })
        if (res.ok) {
            document.location.replace(`/literal/${literalkey}`);
        } else {
            alert(res.statusText);
        }
    }
};

async function editArticleCall(event) {
    event.preventDefault();

    const newArticle = document.querySelector('#textfield').value.trim();
    const literalkey = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    if (newArticle) {
        const res = await fetch(`/api/literals/article/${literalkey}`, {
            method: 'PUT',
            body: JSON.stringify({ newArticle, literalkey }),
            headers: { 'Content-Type': 'application/json' }
        })
        if (res.ok) {
            document.location.replace(`/literal/${literalkey}`);
        } else {
            alert(res.statusText);
        }
    }
};

async function deleteArticleCall(event) {
    event.preventDefault();

    const literalkey = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    const res = await fetch(`/api/literals/${literalkey}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    if (res.ok) {
        document.location.replace(`/`);
    } else {
        alert(res.statusText);
    }
};

document.querySelector('.edittitle').addEventListener('click', editTitleCall);
document.querySelector('.editimage').addEventListener('click', editImageCall);
document.querySelector('.editimagealt').addEventListener('click', editImgAltCall);
document.querySelector('.editkeywords').addEventListener('click', editKeywordsCall);
document.querySelector('.editarticle').addEventListener('click', editArticleCall);
document.querySelector('.deletearticle').addEventListener('click', deleteArticleCall);