async function commentCall(event) {
    event.preventDefault();

    const commentment = document.querySelector('textarea[name=newcomment]').value.trim();
    const literalKey = window.location.toString().split('/')[ window.location.toString().split('/').length - 1 ];
    console.log(commentment, literalKey);

    if (commentment) {
        const res = await fetch('/api/comments/', {
            method: 'POST',
            body: JSON.stringify({ commentment, literalKey }),
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