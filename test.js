
function changeVideo() { 

	let player = document.getElementById('player');
	let yt_id = getQueryVariable("v");
	player.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+ yt_id+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

}
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
	}
}
}

setTimeout(changeVideo, 2000);
window.addEventListener('pageshow',changeVideo);
