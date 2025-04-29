function updateClock() {
    let now = new Date();
    let time = document.getElementById('time');
    let date = document.getElementById('date');

    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    let day = now.getDate().toString().padStart(2, '0');
    let month = (now.getMonth() + 1).toString().padStart(2, '0');
    let year = now.getFullYear();

    time.innerHTML = `${hours}:${minutes}:<span style="color:red;">${seconds}</span>`;
    date.textContent = `${day}/${month}/${year}`;


}
setInterval(updateClock, 1000);

updateClock();
