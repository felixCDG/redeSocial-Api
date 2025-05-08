'use strict'

const feedPost = async () => {

  const url = "https://back-spider.vercel.app/publicacoes/listarPublicacoes"

  const response = await fetch(url)

  const data = await response.json()

  const mainContent = document.getElementById('main-content')

  data.forEach(async (post) => {

    const dataUser = await fetch(`https://back-spider.vercel.app/user/pesquisarUser/${post.idUsuario}`)

    const user = await dataUser.json()

    const container = document.createElement('div')
    container.className = "post"

    const postUser = document.createElement('div')
    postUser.className = "post-user"

    const imgUser = document.createElement('img')
    imgUser.className = "Perfil"
    imgUser.setAttribute("src", user.imagemPerfil)

    const imgPost = document.createElement('img')
    imgPost.className = "post-image"
    imgPost.setAttribute("src", post.imagem)


    const nome = document.createElement('span')
    nome.className = "username"
    nome.textContent = user.nome

    const location = document.createElement('p')
    location.textContent = "Senai Jandira"

    const containerFooter = document.createElement('div')
    
    containerFooter.className = 'Curtir'

    const containerIcons = document.createElement('div')
    containerIcons.className = "post-icons"

    const comment = document.createElement('img')
    comment.src = './icons/comt.jpeg'

    const like = document.createElement('img')
    like.src = './icons/coracao.png'

    const containerDescription = document.createElement('div')
    containerDescription.className = "post-description"

    const descripition = document.createElement('span')
    descripition.textContent = post.descripition

    postUser.appendChild(imgUser)
    postUser.appendChild(nome)
    postUser.appendChild(location)

    containerIcons.appendChild(comment)
    containerIcons.appendChild(like)

    containerDescription.appendChild(nome)
    containerDescription.appendChild(descripition)

    container.appendChild(postUser)
    container.appendChild(imgPost)
    container.appendChild(containerIcons)
    container.appendChild(containerDescription)
    

    mainContent.appendChild(container)

  });

}

feedPost()