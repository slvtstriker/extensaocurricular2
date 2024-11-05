document.addEventListener("DOMContentLoaded", () => {
    fetch("api/animais")
        .then(response => response.json())
        .then(data => {
            const adminTable = document.getElementById("adminTable");
            data.forEach(animal => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${animal.id}</td>
                    <td>${animal.nome}</td>
                    <td>${animal.raca}</td>
                    <td>${animal.idade}</td>
                    <td>
                        <button class="btn btn-warning btn-sm">Editar</button>
                        <button class="btn btn-danger btn-sm">Excluir</button>
                    </td>
                `;
                adminTable.appendChild(row);
            });
        });
});
