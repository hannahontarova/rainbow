const redButton = document.getElementById('redButton')
const orangeButton = document.getElementById('orangeButton')
const yellowButton = document.getElementById('yellowButton')
const greenButton = document.getElementById('greenButton')
const blueButton = document.getElementById('blueButton')
const darkBlueButton = document.getElementById('darkBlueButton')
const purpleButton = document.getElementById('purpleButton')

redButton.addEventListener('click', function(){
    document.body.style.background = 'red'
})
orangeButton.onclick = ()=>{
    redButton.style.color = 'orange'
    yellowButton.style.color = 'orange'
}
yellowButton.onclick =()=>{
    purpleButton.style.color = 'yellow'
}
greenButton.onclick = ()=>{
    document.getElementById("img").style.display = "block";
}
blueButton.addEventListener('click', function(){
    this.insertAdjacentHTML(
        'beforebegin',
        '<button id="blueButton" class="blue-button btn">Blue</button>'
    )
})
darkBlueButton.onclick = ()=>{
    redButton.classList.add('remove')
}
purpleButton.onclick = function(){
    if (redButton.classList.contains('remove')){
        redButton.style.display = 'block'
    } else{
        alert('Кнопка есть')
    }
}