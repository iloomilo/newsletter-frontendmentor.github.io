const validateEmail = (mail) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return mail.match(regex);
}

document.getElementById("submit-btn").addEventListener("click", e => {
    e.preventDefault();
    const input = e.target.form[0];
    if(!validateEmail(input.value)) {
        console.log(new Error("DAS GEHT NICHT"));
        input.classList.add("error");
        document.getElementById("error").classList.add("error");
    } else {
        const mailtext = input.value;
        document.getElementById("main").classList.add("inAnimation")
        document.querySelector(".success-screen").classList.add("outAnimation");
        setTimeout(() => {
            document.getElementById("main").style.display = "none"
            document.querySelector(".success-screen").classList.add("outAnimation");
            document.querySelector(".success-screen").style.display = "flex";
        }, 200);
        document.getElementById("mail-text").textContent = mailtext;
    }
});

