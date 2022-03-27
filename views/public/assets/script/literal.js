// async function literalCall(event) {
//     event.preventDefault();

//    //finds literal id from window:
//     const literalKey = window.location.toString().split('/')[ window.location.toString().split('/').length - 1 ];

//     if (literalKey) {
//         const res = await fetch(`/api/literals/${literalKey}`, {
//             method: 'GET',
//             body: JSON.stringify({ literalKey }),
//             headers: { 'Content-Type': 'application/json' }
//         });
//         if (res.ok) {
//             document.location.reload;
//         } else {
//             alert(res.statusText);
//         }
//     }
// }

// document.querySelector('.literalpage').addEventListener('click', literalCall)