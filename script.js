// Mobile menu
const sideNav = document.getElementById('sideNav');
const toggle = document.getElementById('menuToggle');
toggle.addEventListener('click', () => {
  const open = sideNav.classList.toggle('open');
  toggle.innerHTML = open ? '<i class="mdi mdi-close"></i>' : '<i class="mdi mdi-menu"></i>';
});
const links = sideNav.querySelectorAll('a[href^="#"]');
links.forEach(a => a.addEventListener('click', () => {
  sideNav.classList.remove('open');
  toggle.innerHTML = '<i class="mdi mdi-menu"></i>';
}));

// Scroll offset for the fixed mobile header
const offset = () => document.getElementById('topbar').offsetHeight;
links.forEach(a => a.addEventListener('click', e => {
  const target = document.querySelector(a.getAttribute('href'));
  if (!target) return;
  e.preventDefault();
  window.scrollTo({ top: target.offsetTop - offset(), behavior: 'smooth' });
}));

// Resume tabs
const tabs = document.querySelectorAll('.tab');
const activateTab = name => {
  tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === name));
  document.querySelectorAll('.pane').forEach(p => p.classList.toggle('active', p.id === name));
  document.querySelectorAll('#' + name + ' .reveal').forEach(el => el.classList.add('show'));
  setActive();
};
tabs.forEach(t => t.addEventListener('click', () => activateTab(t.dataset.tab)));
// Sidebar links for Skills / Experience / Education open the matching tab
links.forEach(a => { if (a.dataset.tab) a.addEventListener('click', () => activateTab(a.dataset.tab)); });

// Navbar shadow on scroll
window.addEventListener('scroll', () => document.getElementById('topbar').classList.toggle('scrolled', window.scrollY > 10));

// Highlight the active menu item
const sectionIds = [...new Set([...links].map(a => a.getAttribute('href').slice(1)))];
const sections = sectionIds.map(id => document.getElementById(id));
function setActive() {
  let current = sections[0];
  sections.forEach(s => { if (window.scrollY + offset() + 160 >= s.offsetTop) current = s; });
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = sections[sections.length - 1];
  const tab = document.querySelector('.tab.active')?.dataset.tab;
  links.forEach(a => {
    const same = a.getAttribute('href') === '#' + current.id;
    a.classList.toggle('active', same && (!a.dataset.tab || a.dataset.tab === tab));
  });
}
window.addEventListener('scroll', setActive);
setActive();

// Reveal on scroll
const revealEls = document.querySelectorAll('.sec-title, .about, .group, .job, .steps li, .slider, .edu-item, .contact-card, .c-form, .stats');
revealEls.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('show'); io.unobserve(en.target); } });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// Show photo.jpg if it exists
const photo = document.getElementById('photo');
const img = new Image();
img.onload = () => { photo.style.backgroundImage = "url('photo.jpg')"; photo.classList.remove('no-photo'); };
img.src = 'photo.jpg';

document.getElementById('year').textContent = new Date().getFullYear();

// Contact form -> opens the visitor's email app with the message filled in
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const v = id => document.getElementById(id).value.trim();
  const topic = document.querySelector('input[name="topic"]:checked').value;
  const company = v('cCompany');
  const subject = `[${topic}] Message from ${v('cName')}${company ? ' (' + company + ')' : ''}`;
  const body = `${v('cMsg')}\n\n— ${v('cName')}\n${v('cEmail')}${company ? '\n' + company : ''}`;
  window.location.href = `mailto:nadilaindriyanirangkuti@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

// Project slider
const slidesEl = document.getElementById('slides');
const slideEls = [...slidesEl.querySelectorAll('.slide')];
const dotsEl = document.getElementById('sliderDots');
const stepW = () => slideEls[0].offsetWidth + parseFloat(getComputedStyle(slidesEl).columnGap || 24);
const perView = () => Math.max(1, Math.round(slidesEl.clientWidth / stepW()));
const pageCount = () => slideEls.length - perView() + 1;
const buildDots = () => {
  dotsEl.innerHTML = '';
  for (let i = 0; i < pageCount(); i++) {
    const d = document.createElement('button');
    d.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    d.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(d);
  }
  updateDots();
};
const currentIndex = () => Math.round(slidesEl.scrollLeft / stepW());
const updateDots = () => [...dotsEl.children].forEach((d, i) => d.classList.toggle('active', i === Math.min(currentIndex(), pageCount() - 1)));
const goTo = i => slidesEl.scrollTo({ left: i * stepW() });
const next = () => goTo(currentIndex() >= pageCount() - 1 ? 0 : currentIndex() + 1);
const prev = () => goTo(currentIndex() <= 0 ? pageCount() - 1 : currentIndex() - 1);
document.getElementById('nextSlide').addEventListener('click', next);
document.getElementById('prevSlide').addEventListener('click', prev);
slidesEl.addEventListener('scroll', updateDots);
window.addEventListener('resize', buildDots);
buildDots();

// Autoplay (pauses on hover/touch)
let auto = setInterval(next, 5000);
const pause = () => clearInterval(auto);
const resume = () => { clearInterval(auto); auto = setInterval(next, 5000); };
['mouseenter', 'touchstart', 'focusin'].forEach(ev => slidesEl.addEventListener(ev, pause, { passive: true }));
['mouseleave', 'focusout'].forEach(ev => slidesEl.addEventListener(ev, resume));

// Use real screenshots when images/<project>.jpg exists
document.querySelectorAll('.shot[data-img]').forEach(shot => {
  const im = new Image();
  im.onload = () => { im.alt = shot.closest('.slide').querySelector('h4').textContent; shot.querySelector('.mock').replaceWith(im); };
  im.src = shot.dataset.img;
});

// Project detail modal
const modal = document.getElementById('projectModal');
slideEls.forEach(slide => slide.querySelector('.more').addEventListener('click', () => {
  document.getElementById('mType').textContent = slide.querySelector('.tag-type').textContent;
  document.getElementById('mTitle').innerHTML = slide.querySelector('h4').innerHTML;
  document.getElementById('mDesc').innerHTML = slide.querySelector('p').innerHTML;
  const detail = document.getElementById('mDetail');
  detail.innerHTML = '';
  detail.appendChild(slide.querySelector('template.detail').content.cloneNode(true));
  pause();
  modal.showModal();
}));
document.getElementById('modalClose').addEventListener('click', () => modal.close());
modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });
modal.addEventListener('close', resume);

// Hide social icons that don't have a link yet
document.querySelectorAll('.soc[href="#"]').forEach(a => a.remove());
