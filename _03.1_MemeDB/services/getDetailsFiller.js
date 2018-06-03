let getDetailsFiller = (targetedMeme) => {
  let template =
  `<div class="content">
        <img src="${targetedMeme.memeSrc}" alt=""/>
        <h3>Title  ${targetedMeme.title}</h3>
        <p> ${targetedMeme.description}</p>
        <button>
            <a href="${targetedMeme.memeSrc}">Download Meme</a>
        </button>
    </div>`
  return template
}

module.exports = getDetailsFiller