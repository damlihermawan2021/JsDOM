const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');

// DOM Travelsal
close.forEach(function(el){
    el.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    });
});

// parentElement
// parentNode
// nextSibling
// nextElementSibling
// previousSibiling
// previousElementSibiling
