const btnEl = document.getElementById('btn');

const socket = io();

socket.on('chat', (data) => {
 console.log(data);
});

btnEl.addEventListener('click', () => {
 console.log('here');
 socket.emit('respond', { msg: 'hello to you to my brother' });
});
