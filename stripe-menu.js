console.clear();

// feather.replace(); // Init Feather icon set

const sectionEls = document.querySelectorAll('.section');
const headerEl = document.querySelector('.head');
const navLinkEls = document.querySelectorAll('.link');
const menuBox = document.querySelector('.menu-box');
const contentEl = document.querySelector('.menu-content');
const arrowEl = document.querySelector('.arr-model');
const backgroundEl = document.querySelector('.background-style');


const sections = ['products', 'developers', 'company'];

// TODO: generate on the fly
const dimensions = {
  products: { width: 450, height: 480, x: 0 },
  developers: { width: 650, height: 600, x: 100 },
  company: { width: 460, height: 296, x: 200 }
}

const popoverLeft = menuBox.getBoundingClientRect().x;

navLinkEls.forEach((navLink) => {
  let section =  navLink.getAttribute('data-nav');
  let rect = navLink.getBoundingClientRect();
  dimensions[section].arrowX = rect.left + (rect.width / 2) - popoverLeft;
});

// Set initial arrow position
arrowEl.style.transform = `
  translateX(${dimensions.products.arrowX}px)
  rotate(45deg)`;


function showSection(section) {
  menuBox.classList.add('open');
  sectionEls.forEach(el => el.classList.remove('active'));  
  document.querySelector(`.section-${section}`).classList.add('active');

  // Position arrow
  arrowEl.style.transform = `
    translateX(${dimensions[section].arrowX}px)
    rotate(45deg)`;
  
  // Resize and position background
  backgroundEl.style.transform = `
    translateX(${ dimensions[section].x }px)
    scaleX(${ dimensions[section].width / dimensions['products'].width })
    scaleY(${ dimensions[section].height / dimensions['products'].height })
  `;

  // Resize and position content
  contentEl.style.width = dimensions[section].width + 'px';
  contentEl.style.height = dimensions[section].height + 'px';

  contentEl.style.transform = `translateX(${ dimensions[section].x }px)`

  // size container? If we remove from CSS and do everything dynamically.
}


navLinkEls.forEach((navLink) => {
  navLink.addEventListener('mouseenter', (event) => {
    let targetPopover = event.target.getAttribute('data-nav');
    showSection(targetPopover);
  });
});

headerEl.addEventListener('mouseleave', () => {
  menuBox.classList.remove('open');
})








// PAYMENTS
// Payments
// Online payments

// Terminal
// In-person payments

// Connect
// Payments for platforms

// Billing
// Subscriptions & invoicing

// PAYOUTS
// Payouts
// Programmatic payouts

// Issuing
// Card creation

// BUSINESS OPERATIONS
// Radar
// Fraud & risk management

// Sigma
// Custom reports

// Atlas
// Startup incorporation