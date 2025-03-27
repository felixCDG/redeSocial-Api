'use strict'
 
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".btn").addEventListener("click", async function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        if (!email || !senha ) {
            alert("Preencha todos os campos!");
            return;
        }

        const dados = {
            email: email,
            senha: senha,
            // nome: nome,
            // premium: '1',
            // imagemPerfil: 'gui.png',
            // senhaRecuperacao: 'oi'
        };

        try {
            const response = await fetch("https://back-spider.vercel.app/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dados)
            });

            const result = await response.json();

            if (response.ok) {
                alert("Login realizado com sucesso!");
            } else {
                alert("Erro ao Logar: " + result.message);
            }
        } catch (error) {
            alert("Erro ao conectar com o servidor. Tente novamente mais tarde.");
        }
    });
});
