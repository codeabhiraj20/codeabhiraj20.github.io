//older

// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top => offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });
// };


// scroll selection active link
// const navbarLinks = document.querySelectorAll('.navbar a');
// const sections = document.querySelectorAll('section');

// const options = {
//   rootMargin: '-50px 0px -50px 0px', // set the margin to activate the active class
//   threshold: 0.5 // set the threshold for intersection ratio
// };

// const observer = new IntersectionObserver(function (entries, observer) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       const sectionId = entry.target.getAttribute('id');
//       setActiveLink(sectionId);
//     }
//   });
// }, options);

// sections.forEach(section => {
//   observer.observe(section);
// });

// function setActiveLink(sectionId) {
//   navbarLinks.forEach(link => {
//     if (link.getAttribute('href') === `#${sectionId}`) {
//       link.classList.add('active');
//     } else {
//       link.classList.remove('active');
//     }
//   });
// }




//newer

// scroll selection active link
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar a');
  let currentSectionIndex = 0;

  // Find the index of the current section
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top <= (window.innerHeight / 1.3)) {
      currentSectionIndex = i;
    }
  }

  // Remove the 'active' class from all nav links
  navLinks.forEach(link => {
    link.classList.remove('active');
  });

  // Add the 'active' class to the corresponding nav link
  navLinks[currentSectionIndex].classList.add('active');
});




// skill bar animation
const skillSection = document.querySelector('#skill');
const skillPerElements = document.querySelectorAll('.skill-per');

const options2 = {
  threshold: 0.2
};

const observer2 = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      entry.target.style.animationDelay = '0.05s';
    }
    else {
      entry.target.style.animationPlayState = 'paused';
      entry.target.style.animationDelay = '0';
    }
  });
}, options2);

skillPerElements.forEach(skillPerElement => {
  observer2.observe(skillPerElement);
});



// toogle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};



//sticky navbar
window.onscroll = () => {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 80);

  // to remove navbar when one is clicked
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};


// scroll reveal
ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .box-container, .contents, .btn2', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .c1, .col1, .video-1', { origin: 'left' });
ScrollReveal().reveal('.c2, .col2, .video-2', { origin: 'right' });

ScrollReveal().reveal('.ed-box1, .column1', { origin: 'bottom', delay: 200 });
ScrollReveal().reveal('.ed-box2, .column2', { origin: 'bottom', delay: 400 });
ScrollReveal().reveal('.ed-box3, .column3', { origin: 'bottom', delay: 600 });


// typing
const type = new Typed('.multiple-text', {
  strings: ['Abhiraj Mukherjee'],
  typeSpeed: 50,
  backSpeed: 70,
  backDelay: 1000,
  loop: true
});