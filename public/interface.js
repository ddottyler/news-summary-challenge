let headlines = ["BREAKING NEWS 1", "BREAKING NEWS 2", "BREAKING NEWS 3"]
let imageURL = "http://public.media.smithsonianmag.com/legacy_blog/smiley-face-1.jpg";

showHeadlines = () => {
  headlines.forEach(headline =>
    document.getElementById("headlines").innerHTML += `<a href=#${headlines.indexOf(headline)}>` + headline + `</a><div id=photo${headlines.indexOf(headline)}></div>` + `<button onclick=showImage(imageURL,${headlines.indexOf(headline)})>Add smiley</button>` + "<br>");
}

showImage = (src, index) => {
  let img = document.createElement("img");
  img.src = src;
  img.width = 150;
  img.height = 75;
  document.getElementById(`photo${index}`).appendChild(img);
} 

showHeadlines()
