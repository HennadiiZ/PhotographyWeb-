// =============================== BURGER MENU ===============================  
        
const header__burger = document.querySelector('.header__burger'),
      header__menu = document.querySelector('.header__menu');

const nav__links = document.querySelectorAll('.nav-links');

    function burger(){
        header__burger.classList.toggle('active'); 
        header__menu.classList.toggle('active'); 
        document.body.classList.toggle('lock');
    };

header__burger.addEventListener('click', ()=> burger());
nav__links.forEach(link=>{
  link.addEventListener('click', ()=> burger());
})

// =============================== FORM AJAX. ===============================

const form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
        event.preventDefault();
        const status = document.getElementById("my-form-status");
        const data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = "Thanks for your submission!";
                form.reset()
            } else {
            response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                    } else {
                        status.innerHTML = "Oops! There was a problem submitting your form"
                    }
              })
            }
        }).catch(error => {
            status.innerHTML = "Oops! There was a problem submitting your form"
        });
    }
    form.addEventListener("submit", handleSubmit);

// =============================== THE MODAL =================================

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var myButton = document.getElementById("myButton");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
myButton.onclick = function(){
  modal.style.display = "block";
  // modalImg.src = this.src;
  modalImg.src = modalImg.src;
  captionText.innerHTML = modalImg.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

modal.onclick = function(e) {
  if(e.target !== modalImg){
    modal.style.display = "none";
  }
}