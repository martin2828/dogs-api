let $dogSelector = document.querySelector(".dog-selector");
let $button = document.getElementById("button");
let $img = document.getElementById("img");

const fetchDog = async (id) => {
    try {
        const dog = await fetch(`https://dog.ceo/api/breed/${id}/images/random`)
        const dogJson = await dog.json();
        $img.innerHTML = `<img src="${dogJson.message}" class="img-fluid">`
    } catch (error) {
        $img.innerHTML = `<h1>Ocurrio un error :(, vuelve a intentarlo`
    }
}

$button.addEventListener("click", () => {
    fetchDog($dogSelector.value)
})