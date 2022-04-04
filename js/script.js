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
const modal = document.querySelector("#myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const myButton = document.querySelector("#myButton"); // button
const modalImg = document.querySelector("#img01"); // modal pic
const captionText = document.querySelector("#caption"); // caption - no need really
 
// Get the <span> element that closes the modal
const span = document.querySelector(".close");

myButton.onclick = function(){
  modal.style.display = "block";
  document.body.style.overflow = 'hidden';
  // modalImg.src = this.src;
  modalImg.src = modalImg.src;
  captionText.innerHTML = modalImg.alt;
}

function closeButton(){
  modal.style.display = "none";
  document.body.style.overflow = '';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  closeButton();
}

modal.onclick = function(e) {
  if(e.target !== modalImg){
    closeButton();
  }
}