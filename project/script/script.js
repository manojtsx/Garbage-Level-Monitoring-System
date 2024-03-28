
setInterval(()=>{
    fetch(
        "https://blynk.cloud/external/api/getAll?token=-Suu9pGlY3Kw9uNTWdM726riQP9Ww_jn"
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const garbageLevel = data.v0
            ? (((15 - data.v0) * 100) / 15).toFixed(2)
            : "N/A";
          if (garbageLevel > 100) {
            document.getElementById(
              "garbageLevel"
            ).innerText = `Garbage Level: 100 %`;
          } else if (garbageLevel < 0) {
            document.getElementById(
              "garbageLevel"
            ).innerText = `Garbage Level: 0 %`;
          } else {
            document.getElementById(
              "garbageLevel"
            ).innerText = `Garbage Level: ${garbageLevel} %`;
          } // Getting garbage level or 'N/A' if not available
        })
        .catch((error) => {
          console.error("Error fetching garbage level:", error);
          document.getElementById("garbageLevel").innerText = "Error fetching data";
        });
},1000);
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  if (btn.innerText === "Open") {
    btn.innerText = "Close";
    btn.classList.remove("open");
    btn.classList.add("close");
  } else {
    btn.innerText = "Open";
    btn.classList.remove("close");
    btn.classList.add("open");
  }
});
