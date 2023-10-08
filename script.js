function playSound(audioName,loop) {
    let audio = new Audio(audioName);
    audio.loop = loop;
    audio.play();
}
playSound("PUBG Mobile 2.0 update Theme - Run Away BGM Official BGMI ( by Alan Walker ) 2022.mp3",true)
