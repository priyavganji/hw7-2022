var video = document.getElementById("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay)
	console.log("Loop is set to " + video.autoplay)
	
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	//video.defaultVolume = 1

	if (video.volume != 1){
		//video.volume = this.value
		//document.getElementById("volume").innerHTML = this.value + "%";
		
	}
	else{
		video.volume = 1
		document.getElementById("volume").innerHTML = 100 + "%";
	}
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate*=.90
	console.log("Speed is", video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	//new = video.playbackRate
	video.playbackRate*=(10/9) 
	video.playbackRate = Math.round(video.playbackRate * 100) / 100
	console.log("Speed is", video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime +=10
	
	if (video.currentTime > 67){
			video.loop = true
	}

	console.log("Current time is", video.currentTime)

});

document.querySelector("#mute").addEventListener("click", function() {
	

	if (!video.muted){
		document.getElementById("mute").innerHTML = "Unmute";
		//video.volume =0
		video.muted= true
		console.log("Mute video");
	}

	else {
		document.getElementById("mute").innerHTML = "Mute";
		//video.volume = 1
		video.muted= false
		console.log("Unmute video");
	}

});


var range = document.querySelector("#slider");

range.addEventListener("input", function() {
	video.volume = (this.value / 100)
	console.log("Adjusting volume to ", this.value , "%")
	document.getElementById("volume").innerHTML = this.value + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	
	document.getElementById("player1").className = "video oldSchool";
	console.log("Style with oldschool class")
});

document.querySelector("#orig").addEventListener("click", function() {
	document.getElementById("player1").className = "video";
	console.log("Remove with oldschool class style")
});