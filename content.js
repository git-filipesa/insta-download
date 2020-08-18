const interval_global = setInterval(() => {

var i = 2, count = 0;


// botão download foto
const header_content_foto = document.querySelector(".eo2As");
  if (header_content_foto) {
  
    const verify_content = document.querySelector('.button_dl_foto')
    const verify_next_button = document.querySelector('#react-root > section > main > div > div.ltEKP > article > div._97aPb.wKWK0 > div > div.pR7Pc > div.Igw0E.IwRSH.eGOV_._4EzTm.O1flK.D8xaz.fm1AK.TxciK.yiMZG > div > button._6CZji')

    if (verify_content == null) {

      const button_content = document.createElement("button");
      button_content.innerHTML = "DOWNLOAD FOTO";
      button_content.classList.add("button_dl_foto");

      button_content.addEventListener("click", () => {
        if (document.querySelector('li:nth-child('+i+') > div > div > div > div.KL4Bh > img') != null) {
          window.open(document.querySelector('li:nth-child('+i+') > div > div > div > div.KL4Bh > img').src, "img"+count, "height = 500,width = 500");
          count++;
          if (i <= 3 ) {
            i++;
          } else {
            i = 2;
          }
          if (verify_next_button) {
            document.querySelector('#react-root > section > main > div > div.ltEKP > article > div._97aPb.wKWK0 > div > div.pR7Pc > div.Igw0E.IwRSH.eGOV_._4EzTm.O1flK.D8xaz.fm1AK.TxciK.yiMZG > div > button._6CZji').click();          }
        } else {
          console.log('nenhuma foto foi encontrada.');
          i = 2;
        }
      })

      header_content_foto.appendChild(button_content);
    }

  }


// botão download video
const header_content_video = document.querySelector(".eo2As");
  if (header_content_video) {
  
    const verify_content = document.querySelector(".button_dl_video")

    if (verify_content == null) {

      const button_content = document.createElement("button");
      button_content.innerHTML = "DOWNLOAD VIDEO";
      button_content.classList.add("button_dl_video");

      button_content.addEventListener("click", () => {
        if (document.querySelector('div > video > source') != null) {
          window.open(document.querySelector('div > video > source').src, "vStories", "height=500,width=500");
        } else {
          if (document.querySelector('div > video') != null) {
            window.open(document.querySelector('div > video').src, "video", "height=500,width=500");
          } else {
            console.log('nenhum video foi encontrado.')
          }
        }
      })

      header_content_video.appendChild(button_content);
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
