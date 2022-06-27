// Toggle menu - abrir e fechar
const $nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (let element of toggle) {
  element.addEventListener('click', function () {
    $nav.classList.toggle('show')
  })
}

// escuta dos links do menu aberto
const links = document.querySelectorAll('nav ul li a')

for (let link of links) {
  link.addEventListener('click', function () {
    $nav.classList.remove('show')
  })
}

// ALterando o HEADER no scroll
const $header = document.querySelector('#header')
const navHeight = $header.offsetHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // maior que a alura do header
    $header.classList.add('scroll')
  } else {
    // menor que a alura do header
    $header.classList.remove('scroll')
  }
}

// SWIPER CARROUSEL - TESTIMONTIALS
// SWIPER FUNCTION
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// SCROLLREVEALJS -  mostrar elementos no scroll da pagina
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .logo, footer .brand, footer .social
`,
  { interval: 100 }
)

// FUNCTION BACK TO TOP

const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// FUNCTION ACTIVE TITLE MENU NAV
const $sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (let section of $sections) {
    let sectionTop = section.offsetTop
    let sectionHeight = section.offsetHeight
    let sectionId = section.getAttribute('id')

    let checkpointStart = checkpoint >= sectionTop
    let checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// WHEN THIS PAGE HAS SCROLL EVENT
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
