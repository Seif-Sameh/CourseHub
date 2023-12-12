const roleBtns = document.querySelectorAll(".role-button")
const step3 = document.querySelectorAll(".step3")

roleBtns.forEach((btn) => {
    btn.addEventListener("click", (e) =>{
        roleBtns.forEach((ele) =>{ele.classList.remove("active")})
        btn.classList.add("active")
        console.log(btn.id)
        step3.forEach((e) => {e.style.display="none"})
        document.querySelector(`.${btn.id}-form`).style.display = "block";      
        scroll(0, window.innerHeight)
    })
})


const arrow = document.querySelector(".arrow")

arrow.addEventListener("click", (e) =>{
    console.log(arrow)
    scroll(0, window.innerHeight*2)
})