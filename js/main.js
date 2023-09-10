document.addEventListener("DOMContentLoaded", () => {
    // VARIABLES //
    const url = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=d9e3dbc1a9580a3f46f3d09af0ec5970&hash=89f452e5fc558299c143e74021c25e2e';
    const contenedor = document.getElementById("contenedor");

    // FUNCIONES //
    function callApi(url){
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data.data.results)
                data.data.results.forEach(element => {
                    let divCard = document.createElement("div");
                    let divCard__image = document.createElement("img");
                    let divCard__name = document.createElement("h3");

                    divCard__image.src = element.thumbnail.path + "." + element.thumbnail.extension;
                    divCard__name.innerHTML = element.name;

                    divCard.classList.add("cards");
                    divCard.addEventListener("click", () => {
                        if (element.urls[1].type == "comiclink"){
                            window.open(element.urls[1].url, "blank");
                        }
                        else {
                            window.open(element.urls[2].url, "blank");
                        };
                    });

                    divCard__image.classList.add("images");
                    divCard__name.classList.add("names");

                    divCard.appendChild(divCard__name);
                    divCard.appendChild(divCard__image);

                    divCard.addEventListener("mouseenter", () => {
                        let divs = Array.from(document.getElementsByClassName("cards"));
                        divs.forEach(element => {
                            if (divCard.innerHTML != element.innerHTML){
                                element.style.opacity = 0.4;
                            };
                        });
                    });

                    divCard.addEventListener("mouseleave", () => {
                        let divs = Array.from(document.getElementsByClassName("cards"));
                        divs.forEach(element => {
                            if (divCard.innerHTML != element.innerHTML){
                                element.style.opacity = 1;
                            };
                        });
                    });

                    contenedor.appendChild(divCard);
                });
            });
    };

    callApi(url);
});