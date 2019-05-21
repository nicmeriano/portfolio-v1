

const closeBtn = document.querySelector('.close');
const menu = document.querySelector('.menu-overlay-container');
const menuNav = document.querySelector('.menu-nav');
const about = document.querySelector('.about-box');
const portfolio = document.querySelector('.portfolio-box');
const blog = document.querySelector('.blog-box');
const contact = document.querySelector('.contact-box');
const grid = document.querySelector('.grid');

// nav links

const resumeNav = document.querySelector('.resume-nav');
const portfolioNav = document.querySelector('.portfolio-nav');
const blogNav = document.querySelector('.blog-nav');
const contactNav = document.querySelector('.contact-nav');
const projectsLink = document.querySelector('.projects-link');

// menu pages

const aboutPage = document.querySelector('.about-menu');
const portfolioPage = document.querySelector('.portfolio-menu');
const blogPage = document.querySelector('.blog-menu');
const contactPage = document.querySelector('.contact-menu');


// toggle menu

[about, portfolio, blog, contact, closeBtn].forEach(btn => btn.addEventListener('click', toggleMenu))

function toggleMenu() {
    menu.classList.toggle('active');
    grid.classList.toggle('hidden');
    menuNav.classList.toggle('nav-animate');
}

// toggle menu pages

  [resumeNav, about].forEach(a => a.addEventListener('click', function() {
    aboutPage.classList.toggle('show');
    setCurrent(resumeNav);
    showMenu(aboutPage);
  }
    ));
  [portfolioNav, portfolio, projectsLink].forEach(a => a.addEventListener('click', function() {
    portfolioPage.classList.toggle('show');
    setCurrent(portfolioNav);
    showMenu(portfolioPage);
  }
    ));
  [blogNav, blog].forEach(a => a.addEventListener('click', function() {
    blogPage.classList.toggle('show');
    setCurrent(blogNav);
    showMenu(blogPage);
  }
    ));
  [contactNav, contact].forEach(a => a.addEventListener('click', function() {
    contactPage.classList.toggle('show');
    setCurrent(contactNav);
    showMenu(contactPage);
  }
    ));

// ---------------MENU & NAV BUTTONS--------------






// load pages and highlight current page link


  // [resumeNav, about].forEach(a => a.addEventListener('click', function() {
  //   loadDoc('about.html');
  //   setCurrent(resumeNav);
  // }
  //   ));
  // [portfolioNav, portfolio].forEach(a => a.addEventListener('click', function() {
  //   loadDoc('portfolio.html');
  //   setCurrent(portfolioNav);
  // }
  //   ));
  // [blogNav, blog].forEach(a => a.addEventListener('click', function() {
  //   loadDoc('blog.html');
  //   setCurrent(blogNav);
  // }
  //   ));
  // [contactNav, contact].forEach(a => a.addEventListener('click', function() {
  //   loadDoc('https://localhost/contact.html');
  //   setCurrent(contactNav);
  // }
  //   ));
  
 




// function loadDoc(doc) {
//     let xhttp;
//     if (window.XMLHttpRequest) {
//       // code for modern browsers
//       xhttp = new XMLHttpRequest();
//       } else {
//       // code for IE6, IE5
//       xhttp = new ActiveXObject("Microsoft.XMLHTTP");
//     }
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         document.querySelector('.content-display').innerHTML = this.responseText;
//       }
//     };
//     xhttp.open("GET", doc , true);
//     xhttp.send();
// }

// highlight current navbar link
function setCurrent(target) {
  [resumeNav, portfolioNav, blogNav, contactNav].forEach(btn => {
    if (btn.classList.contains('current')) btn.classList.toggle('current');
  })
  target.classList.toggle('current');
}

// hide other menu pages when not active

function showMenu(target) {
  [aboutPage, portfolioPage, blogPage, contactPage].forEach(page => {
    if (page.classList.contains('show')) page.classList.toggle('show');

  })
  target.classList.toggle('show');
}








    //--------------------------------JQUERY METHOD--------------------------------

// $(document).ready(function() {
//   $('.about-box').click(function(){
//     $('.content-display').load('about.html');
//   });
// })
// $(document).ready(function() {
//   $('.portfolio-box').click(function(){
//     $('.content-display').load('portfolio.html');
//   });
// })
