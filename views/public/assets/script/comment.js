async function commentCall(event) {
    event.preventDefault();

    //get text from comment field
    const commenttext = document.querySelector('textarea[name=newcomment]').value.trim();
    //finds literal id from window:
    const literalkey = window.location.toString().split('/')[ window.location.toString().split('/').length - 1 ];

    //writes comment, reloads page to show saved comment on page
    if (commenttext) {
        const res = await fetch('/api/comments/', {
            method: 'POST',
            body: JSON.stringify({ commenttext, literalkey }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (res.ok) {
            document.location.reload();
        } else {
            alert(res.statusText);
        }
    }
}

document.querySelector('.commentment').addEventListener('submit', commentCall)