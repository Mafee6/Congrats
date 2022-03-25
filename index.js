( async () => {
    const greeting = document.querySelector(".greeting h");
    const strings = [
        "Congratulations",
        "अभिनंदन",
        "बधाई",
        "🎉"
    ];

    let i = 0;
    setInterval(() => {
        if(i < strings.length) {
            greeting.textContent = strings[i].concat("!");
            i++;
        } else {
            i = 0;
        }
    }, 2000);
})();


