/* Save Select Use */
const btn = document.querySelector(".btn");
console.log(btn);

/* Save Select AddEvent Use */
const btn2 = document.querySelector(".btn")
btn2.addEventListener("click", function(){
    console.log("Button is clicked!");
})

/* Save Select AddEvent PreventReload ChangeClassByClicking */
const btnChanged = document.querySelector(".btn");
btnChanged.addEventListener("click", function(reload){
    reload.preventDefault();
    btnChanged.classList.toggle("btn-changed");
})

/* SaveAll SelectAll LoopThroughAll AddEventToAll PreventReload ChangeClassByClicking */
const btnAll = document.querySelectorAll(".btn")
for( var i = 0; i < btnAll.length; i++) {
    btnAll[i].addEventListener("click", function(reload){
        reload.preventDefault();
        reload.currentTarget.classList.toggle("btn-changed");
    })
}

/* SaveAll SelectAllOnlyInNav LoopThroughAll AddEventToAll PreventReload LoopThroughAllToRemove AddMethod */
const navMenu = document.querySelectorAll("nav a")
for( let i = 0; i < navMenu.length; i++){
    navMenu[i].addEventListener("click", function(active){
        active.preventDefault();

        for (let i = 0; i < navMenu.length; i++){
            navMenu[i].classList.remove("active");
        }

        active.currentTarget.classList.add("active");
    })
}

/* Toggle Display */
const btn3 = document.querySelector(".toggle-btn");
const block = document.querySelector(".box");
btn3.addEventListener("click", function(event){
    event.preventDefault();
    block.classList.toggle("active");
})

/* Form Submit */
const form = document.querySelector(".my-form");
const input = document.querySelector(".name-input");
//const input = form.querySelector(".name-input");  - Better To Look Inside The Form
//form.elements["username"] - To Find By Attribute Name
form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(input.value);
    input.value = "";
})

/* Tabs with Data Attribute */
const tabBtn = document.querySelectorAll(".tab-btn");
const box2 = document.querySelector(".box")
for(let i = 0; i < tabBtn.length; i++){
    tabBtn[i].addEventListener("click", function(event){
        const color = event.currentTarget.dataset.color;
        box2.style.backgroundColor = color
    })
}
// tabBtn.forEach(btn => {
//     btn.addEventListener("click", event => {
//         box2.style.backgroundColor = event.currentTarget.dataset.color;  - Better Way to Loop
//     });
// });

const links = document.querySelectorAll(".link");
links.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        links.forEach(link => {
            link.classList.remove("active");
        })
        event.currentTarget.classList.add("active")
    })
})

const btn4 = document.querySelector(".toggle-btn");
const box3 = document.querySelector(".box");
btn4.addEventListener("click", function(){
    box3.classList.toggle("active")
})

const coloredBtn = document.querySelectorAll(".color-btn");
const box4 = document.querySelector(".box");
coloredBtn.forEach(btn => {
    btn.addEventListener("click", event => {
        box4.style.backgroundColor = event.currentTarget.dataset.color;
    })
})

const colors = document.querySelector(".colors");
const box5 = document.querySelector(".box");
colors.addEventListener("click", event => {
    box5.style.backgroundColor = event.target.dataset.color;
})

const gallery = document.querySelector(".gallery");
const prev = gallery.querySelector(".prev");
const next = gallery.querySelector(".next");
const photo = gallery.querySelector(".photo");
const images = ["/img/Flower1-Index.png", "/img/Flower2-Index.png", "/img/Flower3-Index.png"];
let current = 0;
next.addEventListener("click", () => {
    if(current >= images.length - 1){
        current = 0;
    }else{
        current++;
    }
    photo.src = images[current];
})
prev.addEventListener("click", () => {
    if(current <= 0){
        current = images.length - 1;
    }else{
        current--;
    }
    photo.src = images[current];
})

const btnColors = document.querySelector(".color");
const box6 = document.querySelector(".box");

btnColors.addEventListener("click", event => {
    if(!event.target.dataset.color) return;
    box6.style.backgroundColor = event.target.dataset.color;
})


const btn5 = document.querySelector(".move-btn");
const box = document.querySelector(".box");
btn5.addEventListener("click", () =>{
    box.classList.toggle("active");
})

next.addEventListener("click", () => {
    photo.classList.add("fade");

    setTimeout(() => {
        current = (current + 1) % images.length;
        photo.src = images[current];
        photo.classList.remove("fade");
    }, 300)
});

const slider = document.querySelector(".slider");
const thumb = document.querySelector(".thumb");
const value = document.getElementById("value");
const boxSlider = document.querySelector(".box-slider");
let isDragging = false;
thumb.addEventListener("mousedown", () => {
    isDragging = true;
})
document.addEventListener("mousemove", event => {
    if(!isDragging) return;
    const sliderLocation = slider.getBoundingClientRect();
    let newLeft = event.clientX - sliderLocation.left; 
    if(newLeft < 0) newLeft = 0;
    if(newLeft > sliderLocation.width) newLeft = sliderLocation.width
    thumb.style.left = newLeft + "px";

    let percent = Math.round((newLeft / sliderLocation.width) * 100);
    value.textContent = percent + "%";

    boxSlider.style.backgroundColor = `rgb(${percent * 2.55}, 100, 150)`;
})
document.addEventListener("mouseup", () => {
    isDragging = false;
})

const arr =  [1,2,3];
arr.push(4);
arr.pop();
arr.shift();
arr.unshift(0);

const nums = [1,2,3];
const doubled = nums.map(n => n * 2);

const nums2 = [1,2,3,4];
const even = nums2.filter(n => n % 2 === 0);

arr.includes(3);

access = age >= 18 ? "yes" : "no"

const openBtn = document.querySelector(".open-modal");
const closeBtn = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
openBtn.addEventListener("click", () => {
    overlay.classList.add("active");
})
closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
})

for (let i = 1; i <= 5; i++){
    for(let j = 1; j <= 3; j++){
        console.log(i,j);
    }
}
 
 
