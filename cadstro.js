'use strict'
 
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".btn").addEventListener("click", async function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const nome = document.getElementById('nome').value;

        if (!email || !senha || !nome) {
            alert("Preencha todos os campos!");
            return;
        }

        const dados = {
            email: email,
            senha: senha,
            nome: nome,
            premium: '1',
            imagemPerfil: 'gui.png',
            senhaRecuperacao: 'oi'
        };

        try {
            const response = await fetch("https://back-spider.vercel.app/user/cadastrarUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dados)
            });

            const result = await response.json();

            if (response.ok) {
                alert("Cadastro realizado com sucesso!")
                window.location.href = 'index.html'
            } else {
                alert("Erro ao cadastrar: " + result.message);
            }
        } catch (error) {
            alert("Erro ao conectar com o servidor. Tente novamente mais tarde.");
        }
    });
});
