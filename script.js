
const login = document.querySelector('#login');
const signup = document.querySelector('#signup');
const getStarted = document.querySelector('#get-started');
const wedding = document.querySelector('#wedding');
const corporate = document.querySelector('#corporate');
const weddingBtn = document.querySelector('.wedding-btn');
login.addEventListener("click",function(){
    window.location.href = 'login.html'; 
})
signup.addEventListener("click",function(){
    window.location.href = 'signup.html'; 
})
wedding.addEventListener("click",function(){
    window.location.href = 'wedding.html'; 
})
corporate.addEventListener("click",function(){
    window.location.href = 'corporate.html'; 
})
getStarted.addEventListener("click",function(){
    window.location.href = 'contact.html'; 
})
weddingBtn.addEventListener("click",function(){
    window.location.href = 'contact.html'; 
})

document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector('.menu');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) { 
            menu.classList.add('scrolled');
        } else {
            menu.classList.remove('scrolled');
        }
    });
});



const faqItems = document.querySelectorAll('.faq-flex');

faqItems.forEach(faqItem => {
  const question = faqItem.querySelector('.plus-flex');
  const answer = faqItem.querySelector('.desp');
  const plusIcon = faqItem.querySelector('.fa-plus'); 

  faqItem.addEventListener('click', () => {
    answer.classList.toggle('show');
    plusIcon.classList.toggle('fa-minus'); 
  });
});


