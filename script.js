/* Toggle */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            })
        }
    })

    /* Sticky NavBar */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    
    /* skills */
    const circles = document.querySelectorAll('.circle');
    circles.forEach(elem=>{
        var dots =elem.getAttribute("data-dots");
        var marked = elem.getAttribute("data-percent");
        var percent = Math.floor(dots*marked/100);
        var points = "";
        var rotate = 360 / dots;


        for(let i = 0; i< dots ; i++){
            points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
        }

        elem.innerHTML = points;

        const pointsMarked = elem.querySelectorAll('.points');
        for(let i=0; i<percent; i++){
            pointsMarked[i].classList.add('marked')
        }
    })

   
    
    /* remove NavBar link click */
     menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}
/* scroll reveal */

ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading ', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form ', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

/* scroll reveal */
const typed= new Typed('.multiple-text',{
    strings: ['Frontend Developer', 'Software Engineer', 'UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

})

/* about readmore */
document.getElementById("readMoreBtn").addEventListener("click", function (e) {
  e.preventDefault();
  const about = document.getElementById("aboutText");

  if (about.classList.contains("collapsed")) {
    about.classList.remove("collapsed");
    about.classList.add("expanded");
    this.textContent = "Read Less";
  } else {
    about.classList.remove("expanded");
    about.classList.add("collapsed");
    this.textContent = "Read More";
  }
});

/* sevices readmore */

 document.getElementById("readMoreBtn2").addEventListener("click", function (e) {
    e.preventDefault();
    const text = document.getElementById("serviceText");

    if (text.classList.contains("collapsed")) {
      text.classList.remove("collapsed");
      text.classList.add("expanded");
      this.textContent = "Read Less";
    } else {
      text.classList.remove("expanded");
      text.classList.add("collapsed");
      this.textContent = "Read More";
    }
  });

   document.getElementById("readMoreBtn3").addEventListener("click", function (e) {
    e.preventDefault();
    const text = document.getElementById("serviceText2");

    if (text.classList.contains("collapsed")) {
      text.classList.remove("collapsed");
      text.classList.add("expanded");
      this.textContent = "Read Less";
    } else {
      text.classList.remove("expanded");
      text.classList.add("collapsed");
      this.textContent = "Read More";
    }
  });

  document.getElementById("readMoreBtn4").addEventListener("click", function (e) {
    e.preventDefault();
    const text = document.getElementById("serviceText3");

    if (text.classList.contains("collapsed")) {
      text.classList.remove("collapsed");
      text.classList.add("expanded");
      this.textContent = "Read Less";
    } else {
      text.classList.remove("expanded");
      text.classList.add("collapsed");
      this.textContent = "Read More";
    }
  });


