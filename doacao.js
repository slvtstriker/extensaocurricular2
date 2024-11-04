document.getElementById("donationForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const quantia = document.getElementById("quantia").value;

    fetch("api/doacao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, quantia })
    }).then(response => {
        alert("Obrigado pela sua doação!");
    });
});
