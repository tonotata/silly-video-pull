const roll = document.getElementById("roll");
const videos = ["https://res.cloudinary.com/dx52brl8s/video/upload/v1769015755/nnstizwsn5ilnkkj2tzl.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015753/cicxc1fsmdxz7aauhxxc.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015753/j0zje03ug35qmqtc2kxd.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015753/yfgcgzyd4fcmbhkjnmg4.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015753/nuxxdxkasntwapkb8dbt.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015753/vto3oecq2wrhmvvpksfu.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015753/lccjzds2xwkwrqjgpqxb.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015708/piano_gca6yg.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015708/ouch_ebt7bx.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015708/oiiaoiia_oc4bgn.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015707/mambo_dfhdor.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015707/news_au3plk.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015706/mmaa_aw12wx.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015706/haru_j9xmbl.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015706/horsehaircut_h6z7zd.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015706/mamb0_clh09e.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015706/heisen_laotwy.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015705/horse_edfpxp.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015705/feelingood_zkyxyr.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015704/sillycat_heb3i8.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015704/dinosaur_pgn35y.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015704/catz_jxbelf.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015704/cafe_t73sdz.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015703/spa_bmdmbb.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015703/top5_xcldng.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015703/uma_gku46n.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015701/shimmy_eu18kk.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015701/rseurnnd3pambwn06gxm.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015701/tmxxhtp0wuxirt459gpm.mp4", "https://res.cloudinary.com/dx52brl8s/video/upload/v1769015701/shield_e7btvs.mp4"];
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


