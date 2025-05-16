let hero1=document.getElementById("hero1")
let hero2=document.getElementById("hero2")
let hero3=document.getElementById("hero3")
let hero4=document.getElementById("hero4")

hero1.addEventListener("click", () => {hero1.style.backgroundImage="url('hero1.jpg')"});
hero2.addEventListener("click", () => {hero1.style.backgroundImage="url('hero2.jpg')"});
hero3.addEventListener("click", () => {hero1.style.backgroundImage="url('hero3.jpg')"});
hero4.addEventListener("click", () => {hero1.style.backgroundImage="url('hero4.jpg')"});


const menu=document.querySelector('#mobile-menu');
const menuLinks=document.querySelector('.navbar-menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});























/* <script>
        let food1 = document.getElementById("food1")
        let food2 = document.getElementById("food2")
        let food3 = document.getElementById("food3")
        let food4 = document.getElementById("food4")
        let food5 = document.getElementById("food5")

        food1.addEventListener("click", () => {food1.style.backgroundImage="url('food1.png')"});
        food2.addEventListener("click", () => {food1.style.backgroundImage="url('food2.png')"});
        food3.addEventListener("click", () => {food1.style.backgroundImage="url('food3.png')"});
        food4.addEventListener("click", () => {food1.style.backgroundImage="url('food4.png')"});
        food5.addEventListener("click", () => {food1.style.backgroundImage="url('food5.png')"});

    </script>
    */
