console.log("app.js")

const playBeats = e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    
    if(!audio || !key){
        return;
    }
    key.classList.add('playing')
    audio.currentTime = 0; // rewind to the start
    audio.play();
}

window.addEventListener('keydown', playBeats)

// window.addEventListener('keyup', e => {
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
//     if(!key){
//         return;
//     }
//     key.classList.remove('playing')
// })

const keys = document.querySelectorAll('.key');

function animateDrumKeys(e){
    if(e.propertyName !== "transform") return;
    console.log(this);
    this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', animateDrumKeys))