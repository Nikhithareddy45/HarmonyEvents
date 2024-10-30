document.addEventListener("DOMContentLoaded", function() {
    let login = document.querySelector('#login');
    let signup = document.querySelector('#signup');
    let getStarted = document.querySelector('#get-started');
    let wedding = document.querySelector('#wedding');
    let corporate = document.querySelector('#corporate');
    let weddingBtn = document.querySelector('.wedding-btn');
    
    if (login) {
        login.addEventListener("click", function() {
            window.location.href = 'login.html';
        });
    }
    
    if (signup) {
        signup.addEventListener("click", function() {
            window.location.href = 'signup.html';
        });
    }

    if (wedding) {
        wedding.addEventListener("click", function() {
            window.location.href = 'wedding.html';
        });
    }

    if (corporate) {
        corporate.addEventListener("click", function() {
            window.location.href = 'corporate.html';
        });
    }

    if (getStarted) {
        getStarted.addEventListener("click", function() {
            window.location.href = 'contact.html';
        });
    }

    if (weddingBtn) {
        weddingBtn.addEventListener("click", function() {
            window.location.href = 'contact.html';
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let menu = document.querySelector('.menu');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) { 
            menu.classList.add('scrolled');
        } else {
            menu.classList.remove('scrolled');
        }
    });
});



let faqItems = document.querySelectorAll('.faq-flex');

faqItems.forEach(faqItem => {
  let question = faqItem.querySelector('.plus-flex');
  let answer = faqItem.querySelector('.desp');
  let plusIcon = faqItem.querySelector('.fa-plus'); 

  faqItem.addEventListener('click', () => {
    answer.classList.toggle('show');
    plusIcon.classList.toggle('fa-minus'); 
  });
});


