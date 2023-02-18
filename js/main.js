
/*navigation bar start*/ 

function show(){
    let contactUs = document.querySelector('#contact-us');

    let phone = document.querySelector('#phone');

    if (contactUs.style.display === 'none') {
    contactUs.style.display = 'inline-block';
  } else {
    contactUs.style.display = 'none';
  }
}
// Add active class to the current button (highlight it)
const links = document.querySelectorAll('.nav-link');
    
if (links.length) {
  links.forEach((link) => {
    link.addEventListener(('click','mouseover'), (e) => {
      links.forEach((link) => {
          link.classList.remove('active');
          link.style.color = "black";
      });
      e.preventDefault();
      link.classList.add('active') 
      link.style.color = "white";
    });
  });
}

/*Toggler Button New*/ 
const btnNav = document.querySelector('.navbar-toggler');
        const collapse = document.querySelector('#main-nav');

        function clickNav (){
            if (collapse.style.display === 'none'){
                return collapse.style.display = 'inline-block'
            } else {
                return collapse.style.display = 'none'
            }
        }

        btnNav.addEventListener('click', clickNav);
/* navigation bar end */ 


/*Main Articles bar start*/
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
  const inputValue = searchInput.value;
  alert(inputValue);
});

