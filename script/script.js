document.addEventListener('DOMContentLoaded', function() {
    // Fetching garbage level from the API
    fetch('https://blynk.cloud/external/api/getAll?token=-Suu9pGlY3Kw9uNTWdM726riQP9Ww_jn')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const garbageLevel = data.v1 ? data.v1 : 'N/A'; // Getting garbage level or 'N/A' if not available
            document.getElementById('garbageLevel').innerText = `Garbage Level: ${garbageLevel} cm`;
        })
        .catch(error => {
            console.error('Error fetching garbage level:', error);
            document.getElementById('garbageLevel').innerText = 'Error fetching data';
        });
});

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    if(btn.innerText === "Open") {
        btn.innerText = "Close";
        btn.classList.remove("open");
        btn.classList.add("close");
    }else{
        btn.innerText = "Open";
        btn.classList.remove("close");
        btn.classList.add("open");
    }
})

