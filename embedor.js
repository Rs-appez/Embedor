function changeVideo() {

    let player = document.getElementById('player');
    let yt_id = getQueryVariable("v");
    let sanitized_id = sanitizeString(yt_id);
    player.innerHTML = '<iframe width="100%" height="600" src="https://www.youtube.com/embed/' + sanitized_id
        + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

}
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
}

function sanitizeString(str){
    str = str.replace(/[^a-z0-9]/gim,"");
    return str.trim();
}

setTimeout(changeVideo, 2000);

var oldHref = document.location.href;


var bodyList = document.querySelector("body")

var observer = new MutationObserver(function (mutations) {
    if (oldHref != document.location.href) {
        oldHref = document.location.href;
        setTimeout(changeVideo, 1500);
    }
});

var config = {
    childList: true,
    subtree: true
};

observer.observe(bodyList, config);

