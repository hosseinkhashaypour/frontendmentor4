function openNav(){
    document.getElementById('myNav').style.width= "75%"
}

function closeNav (){
    document.getElementById('myNav').style.width= "0%"
}

const liClicks = document.querySelectorAll('#top .menu-res .li-click');

liClicks.forEach(liClick =>{
    liClick.addEventListener('click' , ()=>{
        liClick.style.backgroundColor = "gray"
        liClick.style.borderRadius = "10px"
    })
})