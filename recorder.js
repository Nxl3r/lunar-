let recorder;
let chunks = [];

function startRecording() {
    const canvas =
        document.querySelector("canvas");

    const stream =
        canvas.captureStream(60);

    recorder = new MediaRecorder(stream);

    recorder.ondataavailable =
        e => chunks.push(e.data);

    recorder.onstop = () => {
        const blob =
            new Blob(chunks);

        const url =
            URL.createObjectURL(blob);

        const a =
            document.createElement("a");

        a.href = url;
        a.download = "clip.webm";
        a.click();

        chunks = [];
    };

    recorder.start();
}

function stopRecording() {
    recorder.stop();
}
