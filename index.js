const roll = document.getElementById("roll");
const videos = ["vids/dinosaur.mp4", "vids/horsebrainrot.mp4", "vids/maxbrainrot.mp4", "vids/catbrainrot.mp4", "vids/catz.mp4", "vids/news.mp4", "vids/shield.mp4", "vids/horsehaircut.mp4", "vids/cafe.mp4", "vids/horse.mp4", "vids/mamb0.mp4", "vids/plush.mp4", "vids/wink.mp4", "vids/tongue.mp4", "vids/spa.mp4", "vids/present.mp4", "vids/piano.mp4", "vids/ouch.mp4", "vids/mambo.mp4", "vids/haru.mp4", "vids/friends.mp4", "vids/feelingood.mp4", "vids/seal2.mp4", "vids/seal.mp4", "vids/uma.mp4", "vids/top5.mp4", "vids/sillycat.mp4", "vids/shimmy.mp4", "vids/oiiaoiia.mp4", "vids/mmaa.mp4", "vids/heisen.mp4"];
const video = document.getElementById("vid");
const clickSound = new Audio("audio/horn.ogg");

let lastIndex = -1;

roll.onclick = function(){
    clickSound.currentTime = 0;
    clickSound.play();

    let randomIndex;
    do{
        randomIndex = Math.floor(Math.random() * videos.length);
    } while(randomIndex === lastIndex);

    lastIndex = randomIndex;
    video.src = videos[randomIndex];
    video.load();
    video.play();

    confetti({
        particleCount: 300,
        spread: 100,
        origin: { y: 0.6 }
    });
}