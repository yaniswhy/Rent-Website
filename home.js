
let menulinks = document.querySelectorAll(".side-bar")
let menubtn = document.querySelectorAll(".menu_icon")
let backupbtn = document.querySelectorAll(".backup")


if (menubtn[0]) {

    menubtn[0].addEventListener("click",function()
    {
        menulinks[0].classList.toggle("active")
        
    })
    
} else {
    console.log("Something is wrong!");
}

if (backupbtn[0]) {

    backupbtn[0].addEventListener("click",function()
    {
        menulinks[0].classList.toggle("active")
       
    })
    
} else {
    console.log("Something is wrong!");
}