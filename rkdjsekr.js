$(document).ready(function () {
	if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    var vds = document.getElementById('vds');
    
    if (vds) {
        vds.src = "https://vod.plaync.com/lineage/episode1/episode1_bg.mp4";
        document.getElementById('vd').load();
    }
	}
});

