if (document.querySelector('div > video > source') != null) {
  window.open(document.querySelector('div > video > source').src, "vStories", "height=500,width=500");
} else {
  if (document.querySelector('div > video') != null) {
    window.open(document.querySelector('div > video').src, "video", "height=500,width=500");
  } else {
    if (document.querySelector('div > img') != null) {
      window.open(document.querySelector('div > img').src, "img", "height=500,width=500");
    } else {
        if (document.querySelector('figure > img') != null) {
          window.open(document.querySelector('figure > img').src, "img", "height=500,width=500");
        } else {
          if (document.querySelector('figure > video > source') != null) {
            window.open(document.querySelector('figure > video > source').src, "img", "height=500,width=500");
          } else {
            console.log('nenhuma foto ou video foi encontrado.');
          }
        }
    }
  }
}
