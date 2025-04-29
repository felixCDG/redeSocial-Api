'use strick'
// document.addEventListener('DOMContentLoaded', () => {
//     const userId = localStorage.getItem('userID');

//     if (!userId) {
//         console.error('ID do usuário não encontrado.');
//         return;
//     }

//     fetch('https://back-spider.vercel.app/user/listarUsers')
//         .then(response => response.json())
//         .then(users => {

//             const usuario = users.find(user => user.id === userId);

//             if (usuario && usuario.imagemPerfil) {
//                 // Substitui a imagem da div .profile-ft
//                 const imgElement = document.querySelector('.profile-ft img');
//                 imgElement.src = usuario.imagemPerfil;
//             } else {
//                 console.warn('Usuário não encontrado ou imagem não disponível.');
//             }
//         })
//         .catch(error => {
//             console.error('Erro ao buscar os usuários:', error);
//         });
// });


const loaderPerfil = async () => {

    const userId = localStorage.getItem('userId');

    if (!userId) {
        console.error('ID do usuário não encontrado no localStorage.');
    }

    try {
        const response = await fetch('https://back-spider.vercel.app/user/listarUsers');

        if (!response.ok) {
            alert('Erro ao buscar os usuários');
            return
        }

        const users = await response.json();

        const usuario = users.find(user => String(user.id) === String(userId));        

        if (usuario && usuario.imagemPerfil) {
            const imgElement = document.querySelector('.profile-ft img');
            imgElement.src = usuario.imagemPerfil;
        }

        if (usuario && usuario.imagemPerfil) {
            const imgElement = document.querySelector('.profile-img-lateral img');
            imgElement.src = usuario.imagemPerfil;
        }
        
        if (usuario.nome) {
            const nomeElement = document.querySelector('.username');
            nomeElement.textContent = usuario.nome;
        }
        
        else {
            console.warn('Usuário não encontrado ou imagem não disponível.');
        }

        const postsResponse = await fetch('https://back-spider.vercel.app/publicacoes/listarPublicacoes');
        const publicacoes = await postsResponse.json();

        // Filtrar posts do usuário logado
        const meusPosts = publicacoes.filter(post => String(post.usuarioId) === String(userId));

        // Seleciona a área onde os posts serão exibidos
        const fotosContainer = document.querySelector('.fotos');
       

        // Renderiza os posts
        meusPosts.forEach(post => {
            const div = document.createElement('div');
            div.classList.add('image-card');

            const img = document.createElement('image-card img');
            img.src = post.imagem; // substitua "imagem" pelo campo real, caso tenha outro nome

            div.appendChild(img);
            fotosContainer.appendChild(div);

            console.log(meusPosts)
        });


    } catch (error) {
        console.error('Erro ao buscar os usuários:', error);
    }


}

loaderPerfil()
