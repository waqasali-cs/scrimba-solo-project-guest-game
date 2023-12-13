let container=document.querySelector('.container')
let reset=document.querySelector('#reset')

container.addEventListener('click',increment)

function increment(e){
    
    if(e.target.tagName=='BUTTON'){
       let scoreEl= e.target.closest('.game').querySelector('.score')
        let currentScore=parseInt( scoreEl.textContent)
        let  increment = parseInt(e.target.textContent)

        scoreEl.textContent=currentScore + increment
    }
}

reset.addEventListener('click', function(){
    let scoreEl= container.querySelectorAll('.score')
    scoreEl.forEach((score)=>{
        score.textContent=0
    })
})