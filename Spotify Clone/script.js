console.log("Welcome to spotify")

//initiallise the variables

let songIndex = 0;
let audioElement = new Audio('songs/1 Gasolina.mp3');
let masterplay = document.getElementById('masterPlay');
let myprogressBar = document.getElementById('myProgressbar');
let songItem = Array.from(document.getElementsByClassName('songItem'))

let songs = [
    {songName:"Gasolina", filePath:"songs/1 Gasolina.mp3", coverPath:"cover/cover (1)" },
    {songName:"Go Fuck Yourself", filePath:"songs/2 Go Fuck Yourself(Mr-Jatt1.com).mp3", coverPath:"cover/cover (2)" },
    {songName:"Let-Me-Down-Slowly", filePath:"songs/3 Let-Me-Down-Slowly_320(PagalWorldl).mp3", coverPath:"cover/cover (3)" },
    {songName:"My-Heart-Stereo", filePath:"songs/4 My-Heart-Stereo_320(PagalWorld).mp3", coverPath:"cover/cover (4)" },
    {songName:"Night-Change", filePath:"songs/5 Night-Changes_320(PagalWorld).mp3", coverPath:"cover/cover (5)" },
    {songName:"People", filePath:"songs/6 People.mp3", coverPath:"cover/cover (6)" },
    {songName:"Rude - MAGIC!", filePath:"songs/7 Rude - MAGIC!.mp3", coverPath:"cover/cover (7)" },
    {songName:"Stay", filePath:"songs/8 Stay_320(PagalWorld).mp3", coverPath:"cover/cover (8)" },
    {songName:"Without-Me", filePath:"songs/9 Without-Me-Halsey.mp3", coverPath:"cover/cover (9)" },
    {songName:"Gorgeous", filePath:"songs/10 gorgeous.mp3", coverPath:"cover/cover (10)" },
] 

songItem.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//Handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//Listen to events
audioElement.addEventListener('timeupdate' ,()=>{
    console.log("Time update");

    //update seekBar

    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
        // console.log(progress);
        myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})


const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        e.target.classList.add('fa-circle-pause');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlay();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
    })
})