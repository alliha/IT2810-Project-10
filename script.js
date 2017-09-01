console.log("hello")
window.onload = function(){
  console.log("window has loaded");

  function removeVideo(){
    document.getElementById("video-container").setAttribute("height", "0");
    document.getElementById("video-container").setAttribute("width", "0");
    document.getElementById("video-container").setAttribute("src", "");
    document.getElementById("right-body").style.opacity = 1;
    document.getElementById("middle-body").style.opacity = 1;
    document.getElementById("left-body").style.opacity = 1;
  }

  function displayVideo(url){
    document.getElementById("video-container").setAttribute("height", "315");
    document.getElementById("video-container").setAttribute("width", "560");
    document.getElementById("video-container").setAttribute("src", url);
    document.getElementById("right-body").style.opacity = 0.3;
    document.getElementById("middle-body").style.opacity = 0.3;
    document.getElementById("left-body").style.opacity = 0.3;
    console.log("video loaded");
    document.getElementsByTagName('body')[0].onmousedown = function(e) {
    if(e.target != document.getElementById('video-container')) {
        removeVideo();
        console.log("video removed");
      }
    }
  }

  document.getElementById("coffee-plant").onclick = function(){
    displayVideo("https://www.youtube.com/embed/j6iBDTtJSUM?rel=0")
  }
  document.getElementById("coffee-roast").onclick = function(){
    displayVideo("https://www.youtube.com/embed/l5ChrC5Kkr0?rel=0&amp;start=40");
  }
  document.getElementById("coffee-done").onclick = function(){
    displayVideo("https://www.youtube.com/embed/-TUI0yS8Cy8");
  }
}
