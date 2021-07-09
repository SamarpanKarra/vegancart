var navLinks = document.getElementById("navLinks");
        function showMenu(){
            navLinks.style.right="0";
        }
        function hideMenu(){
            navLinks.style.right = "-200px";
        }




const faqs =document.querySelectorAll(".q1");

faqs.forEach((q1) => {
    q1.addEventListener("click", () => {
        q1.classList.toggle("active");
    });
});