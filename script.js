const downloadBtn = document.querySelector('.download-btn');

// google drive link

const fileLink = "https://drive.google.com/file/d/1CPzrmrmfcAqrwyDPtPE1EQ-4RZZp9fR_/view?usp=sharing";

const initTimer = () => {
    // getting data-timer attribute from HTML

    let timer = downloadBtn.dataset.timer;

    downloadBtn.classList.add("timer"); // added a class

    downloadBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`;


    // creating initCounter variable with setInterval function
    const initCounter = setInterval(() => {
        if (timer > 0) {
            timer--;

            return downloadBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`;
        }

        // console.log("Cleared");
        clearInterval(initCounter);

        location.href = fileLink; // file is downloading

        downloadBtn.textContent = "Your file is downloading...";


        setTimeout(() => {
            downloadBtn.classList.replace("timer", "diable-timer");

            downloadBtn.innerHTML = `<span class="icon material-symbols-outlined">
            vertical_align_bottom
        </span> 
        <span class="text">Download Again</span>`;

        }, 3000)

    }, 1000) // 1sec


}

downloadBtn.addEventListener('click', initTimer);