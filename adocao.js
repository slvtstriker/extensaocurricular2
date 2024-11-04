document.addEventListener("DOMContentLoaded", () => {
    const animalList = document.getElementById("animalList");

    fetch("api/animais")
        .then(response => response.json())
        .then(data => {
            data.forEach(animal => {
                const animalCard = document.createElement("div");
                animalCard.className = "col-md-4";
                animalCard.innerHTML = `
                    <div class="card mb-4">
                        <img src="${animal.imagem}" class="card-img-top" alt="${animal.nome}">
                        <div class="card-body">
                            <h5 class="card-title">${animal.nome}</h5>
                            <p class="card-text">Raça: ${animal.raca}</p>
                            <p class="card-text">Idade: ${animal.idade}</p>
                            <button class="btn btn-primary">Adotar</button>
                        </div>
                    </div>
                `;
                animalList.appendChild(animalCard);
            });
        });
});
