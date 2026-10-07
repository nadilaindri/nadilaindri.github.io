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
const revealEls = document.querySelectorAll('.sec-title, .about, .group, .xp-item, .cert-card, .steps li, .slider, .edu-item, .contact-card, .c-form, .stats');
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
  const subject = v('cSubject');
  const body = `${v('cMsg')}\n\n— ${v('cName')}\n${v('cEmail')}`;
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

// Certificate modal: shows the image from Google Drive and links to it
const certModal = document.getElementById('certModal');
const driveId = url => (url.match(/\/d\/([\w-]+)/) || url.match(/[?&]id=([\w-]+)/) || [])[1];
document.querySelectorAll('.cert-card').forEach(card => card.addEventListener('click', () => {
  const url = card.dataset.drive.trim();
  const id = url && driveId(url);
  const title = card.querySelector('h4').textContent;
  document.getElementById('cTitle').textContent = title;
  document.getElementById('cIssuer').textContent = card.querySelector('.cert-issuer').textContent;
  const box = document.getElementById('cImg');
  if (id) {
    box.innerHTML = '';
    const img = new Image();
    img.alt = title + ' certificate';
    img.referrerPolicy = 'no-referrer'; // Google Drive blocks images requested with a referrer
    const sources = [`https://drive.google.com/thumbnail?id=${id}&sz=w1600`, `https://lh3.googleusercontent.com/d/${id}=w1600`];
    img.onerror = () => {
      if (sources.length) img.src = sources.shift();
      else box.innerHTML = '<div class="empty"><i class="mdi mdi-image-off-outline"></i>Certificate preview is unavailable right now.</div>';
    };
    img.src = sources.shift();
    box.appendChild(img);
  } else {
    box.innerHTML = '<div class="empty"><i class="mdi mdi-certificate-outline"></i>Certificate image coming soon.</div>';
  }
  if (typeof pause === 'function') pause();
  certModal.showModal();
}));
document.getElementById('certClose').addEventListener('click', () => certModal.close());
certModal.addEventListener('click', e => { if (e.target === certModal) certModal.close(); });

// Project slider: load each card's screenshot from Google Drive (data-drive)
const driveImage = (id, w = 1000) => {
  const img = new Image();
  img.referrerPolicy = 'no-referrer'; // Google Drive blocks images requested with a referrer
  const sources = [`https://drive.google.com/thumbnail?id=${id}&sz=w${w}`, `https://lh3.googleusercontent.com/d/${id}=w${w}`];
  img.onerror = () => { if (sources.length) img.src = sources.shift(); };
  img.src = sources.shift();
  return img;
};
slideEls.forEach(slide => {
  const id = slide.dataset.drive && driveId(slide.dataset.drive);
  if (!id) return;
  const shot = slide.querySelector('.shot');
  const img = driveImage(id);
  img.alt = slide.querySelector('h4').textContent + ' screenshot';
  img.onload = () => {
    if (img.naturalHeight > img.naturalWidth) shot.classList.add('portrait');
    shot.querySelector('.mock')?.replaceWith(img);
  };
});

// Hide social icons that don't have a link yet
document.querySelectorAll('.soc[href="#"]').forEach(a => a.remove());

// Typing headline (Hello! I AM ...)
(() => {
  const el = document.getElementById('typed');
  if (!el) return;
  const words = el.dataset.words.split('|').map(w => w.trim()).filter(Boolean);
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || words.length === 0) return;
  let w = 0, i = 0, deleting = false;
  el.textContent = '';
  const tick = () => {
    const word = words[w];
    el.textContent = word.slice(0, i);
    if (!deleting && i < word.length) { i++; return setTimeout(tick, 85); }
    if (!deleting) { deleting = true; return setTimeout(tick, 1800); }
    if (i > 0) { i--; return setTimeout(tick, 40); }
    deleting = false; w = (w + 1) % words.length;
    setTimeout(tick, 350);
  };
  tick();
})();

// View Project: show the project screenshot in a pop-up (reuses the certificate modal)
slideEls.forEach(slide => {
  const btn = slide.querySelector('button.more');
  const id = slide.dataset.drive && driveId(slide.dataset.drive);
  if (!btn || !id) return;
  btn.addEventListener('click', () => {
    const title = slide.querySelector('h4').textContent;
    document.getElementById('cIssuer').textContent = slide.querySelector('.tag-type').textContent;
    document.getElementById('cTitle').textContent = title;
    const box = document.getElementById('cImg');
    box.innerHTML = '';
    const img = driveImage(id, 1600);
    img.alt = title + ' screenshot';
    const tryFallback = img.onerror; // driveImage's fallback to the second Drive URL
    img.onerror = () => {
      if (img.src.includes('/thumbnail')) tryFallback();
      else box.innerHTML = '<div class="empty"><i class="mdi mdi-image-off-outline"></i>Preview is unavailable right now.</div>';
    };
    box.appendChild(img);
    if (typeof pause === 'function') pause();
    certModal.showModal();
  });
});
certModal.addEventListener('close', () => { if (typeof resume === 'function') resume(); });
