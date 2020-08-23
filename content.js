function download(uri, nome) {
  var link = document.createElement("a");
  link.download = nome;
  link.href = uri;
  link.click();
}


const interval_global = setInterval(() => {

  var count = 0;

  // botão download 1 foto
  const header_content_foto = document.querySelector(".eo2As");
  if (header_content_foto) {
    
    const verify_content = document.querySelector('.button_dl_foto')
    if (verify_content == null) {

      const button_content = document.createElement("button");
      button_content.innerHTML = "DOWNLOAD FOTO";
      button_content.classList.add("button_dl_foto");

      button_content.addEventListener("click", () => {
          
        if (document.querySelector('#react-root > section > main > div > div.ltEKP > article > div._97aPb.wKWK0 > div > div > div.KL4Bh > img')) {
          if (document.querySelector('#react-root > section > main > div > div.ltEKP > article > div._97aPb.wKWK0 > div > div > div.KL4Bh > img') != null) {
            window.open(document.querySelector('#react-root > section > main > div > div.ltEKP > article > div._97aPb.wKWK0 > div > div > div.KL4Bh > img').src, "img"+count, "height = 500,width = 500");
          } else {
            console.log('Seletor 1 não encontrou foto.');
          }
        }

        if (document.querySelector('#react-root > section > main > section > div.cGcGK > div:nth-child(2) > div > article:nth-child(1) > div._97aPb > div > div > div.KL4Bh > img')) {
          if (document.querySelector('#react-root > section > main > section > div.cGcGK > div:nth-child(2) > div > article:nth-child(1) > div._97aPb > div > div > div.KL4Bh > img') != null) {
            window.open(document.querySelector('#react-root > section > main > section > div.cGcGK > div:nth-child(2) > div > article:nth-child(1) > div._97aPb > div > div > div.KL4Bh > img').src, "img"+count, "height = 500,width = 500");
          } else {
            console.log('Seletor 2 não encontrou foto.');
          }
        }

        if (document.querySelector('#react-root > section > main > div > div.ltEKP > article > div._97aPb.wKWK0 > div > div > div.eLAPa._23QFA > div.KL4Bh > img')) {
          if (document.querySelector('#react-root > section > main > div > div.ltEKP > article > div._97aPb.wKWK0 > div > div > div.eLAPa._23QFA > div.KL4Bh > img') != null) {
            window.open(document.querySelector('#react-root > section > main > div > div.ltEKP > article > div._97aPb.wKWK0 > div > div > div.eLAPa._23QFA > div.KL4Bh > img').src, "img"+count, "height = 500,width = 500");
          } else {
            console.log('Seletor 3 não encontrou foto.');
          }
        }
          
        if (document.querySelector('#react-root > section > main > div > div.ltEKP > article > div._97aPb.wKWK0 > div > div > div:nth-child(1) > div > div > img')) {
          if (document.querySelector('#react-root > section > main > div > div.ltEKP > article > div._97aPb.wKWK0 > div > div > div:nth-child(1) > div > div > img') != null) {
            window.open(document.querySelector('#react-root > section > main > div > div.ltEKP > article > div._97aPb.wKWK0 > div > div > div:nth-child(1) > div > div > img').src, "img"+count, "height = 500,width = 500");
          } else {
            console.log('Seletor 4 não encontrou foto.');
          }
        }
      })
      header_content_foto.appendChild(button_content);
    }
  }


  // botão download 1 video
  const header_content_video = document.querySelector(".eo2As");
  if (header_content_video) {

    if (document.querySelector('#react-root > section > main > div > div.ltEKP > article > div._97aPb.wKWK0 > div > div > div:nth-child(1) > div > div > video')) {

      const verify_content = document.querySelector(".button_dl_video")

      if (verify_content == null) {
        const button_content = document.createElement("button");
        button_content.innerHTML = "DOWNLOAD VIDEO";
        button_content.classList.add("button_dl_video");

        button_content.addEventListener("click", () => {
          if (document.querySelector('#react-root > section > main > div > div.ltEKP > article > div._97aPb.wKWK0 > div > div > div:nth-child(1) > div > div > video') != null) {
            window.open(document.querySelector('#react-root > section > main > div > div.ltEKP > article > div._97aPb.wKWK0 > div > div > div:nth-child(1) > div > div > video').src, "vStories", "height=500,width=500");
          } else {
            console.log('nenhum video foi encontrado.')
          }
        })
        header_content_video.appendChild(button_content);
      }
    }
  }


  // botão download stories
  const header_stories = document.querySelector(".aOX72");
  if (header_stories) {

    const verify_stories = document.querySelector(".button_stories")

    if (verify_stories == null ) {
      const button_stories = document.createElement("button");
      button_stories.innerHTML = "DOWNLOAD";
      button_stories.classList.add("button_stories");

      button_stories.addEventListener("click", () => {
        if (document.querySelector('div > video > source') != null) {
          window.open(document.querySelector('div > video > source').src, "vStories", "height=500,width=500");
        } else {
          if (document.querySelector('div > video') != null) {
            window.open(document.querySelector('div > video').src, "video", "height=500,width=500");
          } else {
            if (document.querySelector('div > img') != null) {
              window.open(document.querySelector('div > img').src, "img", "height=500,width=500");
            } else {
              console.log('nenhuma foto ou video foi encontrado.');
            }
          }
        }
      })
    header_stories.appendChild(button_stories);
    }
  }

}, 1000)
