document.addEventListener("DOMContentLoaded", function () {
    const novaSenha = document.getElementById('bore')
    if (novaSenha) {
        Recuperar.addEventListener("submit", async function (event) {
            event.preventDefault()

            const nsenha = document.getElementById("Nsenha").value
            const confirmeS = document.getElementById("confirmeS").value

            if (!nsenha || !confirmeS) {
                alert("Preencha todos os campos!")
                return
            }

            const data = {
                senha: nsenha,
                senha: confirmeS
            }

            try {
                const response = await fetch("https://back-spider.vercel.app/user/newPassword/:id", {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                })

                const responseData = await response.json()

                if (response.ok) {
                    alert("Palavra-chave confirmada! Você será redirecionado para redefinir sua senha.")
                    localStorage.setItem("emailRecuperacao", email)
                    window.location.href = 'modalRPS.html'
                } else {
                    alert("Erro: " + (responseData.message || "Verifique os dados e tente novamente."))
                }
            } catch (error) {
                alert("Erro ao conectar ao servidor. Tente novamente mais tarde.")
            }
        })
    }
})