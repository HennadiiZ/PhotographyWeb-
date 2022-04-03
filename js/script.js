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
    form.addEventListener("submit", handleSubmit)