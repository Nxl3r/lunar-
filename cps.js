let cps = 0;

document.addEventListener("click", () => {
    cps++;

    setTimeout(() => {
        cps--;
    }, 1000);

    document.getElementById("cps").innerText =
        "CPS: " + cps;
});
