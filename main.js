import { showSlides } from './herobanner.js';
// Function to add same header and footer to all html pages with id="header" or "footer"
async function includeHTML() {
  // Fetch the header HTML
  const headerFetch = await fetch('header.html');
  const headerHtml = await headerFetch.text();
  document.querySelector('header').innerHTML = headerHtml;

  // Fetch the footer HTML
  const footerFetch = await fetch('footer.html');
  const footerHtml = await footerFetch.text();
  document.querySelector('footer').innerHTML = footerHtml;
}

includeHTML();

// Herobanner slideshow
showSlides();
