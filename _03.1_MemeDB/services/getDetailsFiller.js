let getDetailsFiller = (targetedMeme) => {
  let template =
  `<div class="content">
        <img src="${targetedMeme.memeSrc}" alt=""/>
        <h3>Title  ${targetedMeme.title}</h3>
        <p> ${targetedMeme.description}</p>
        <form action="/download/${targetedMeme.memeSrc}" method="POST">
            <input type="submit" value="Download Meme">
        </form> 
    </div>`
  return template
}

module.exports = getDetailsFiller