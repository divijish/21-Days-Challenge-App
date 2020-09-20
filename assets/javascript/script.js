window.onload = async () => {
    let navShow = true;

    let header = document.querySelector("header");
    let nav = document.querySelector("nav");
    document.querySelector('#create-challenge').addEventListener('click', () => {
        console.log("Creating Challenge");
    })

    document.querySelector("#view-challenge").addEventListener('click', () => {
        console.log("Viewing Challenge");
    })

    let open = document.querySelector("#openNav")

    document.querySelector("#close-nav").addEventListener('click', () => {
        console.log("Closing nav", navShow);
        navShow = false;
        document.querySelector("nav").style.display = "none";
        open.style.display = "block";
    })

    document.querySelector("#openNav").addEventListener('click', () => {
        console.log("Opening Nav", navShow);
        navShow = true;
        document.querySelector("nav").style.display = 'block';
        open.style.display = "none";
    })

    let challenges = null;

    challenges = await fetch("./assets/data/data.json").then(
        resp => {
            return resp.json();
        }
    );

    challenges = challenges.challenges;
    console.log(challenges);

}