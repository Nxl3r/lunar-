let fps = 0;
let last = performance.now();

function updateFPS() {
    let now = performance.now();
    fps = Math.round(1000 / (now - last));
    last = now;

    document.getElementById("fps").innerText =
        "FPS: " + fps;

    requestAnimationFrame(updateFPS);
}

updateFPS();
