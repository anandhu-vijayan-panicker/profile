const nav = document.querySelector('.nav');
const burgerBtn = document.querySelector('.nav__burger');
const mobileMenu = document.querySelector('.nav__mobile');
const progressBar = document.querySelector('.scroll-progress__bar');
const navLinks = document.querySelectorAll('.nav__link[data-target]');
const sections = [...document.querySelectorAll('main section[id]')];
let menuOpen = false;

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  closeMobileMenu();
}

function openMobileMenu() {
  menuOpen = true;
  mobileMenu.hidden = false;
  burgerBtn.setAttribute('aria-expanded', 'true');
  burgerBtn.setAttribute('aria-label', 'Close menu');
  requestAnimationFrame(() => mobileMenu.classList.add('is-open'));
  document.body.style.overflow = 'hidden';
  burgerBtn.innerHTML =
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>';
}

function closeMobileMenu() {
  if (!menuOpen) return;
  menuOpen = false;
  mobileMenu.classList.remove('is-open');
  burgerBtn.setAttribute('aria-expanded', 'false');
  burgerBtn.setAttribute('aria-label', 'Open menu');
  setTimeout(() => {
    mobileMenu.hidden = true;
  }, 320);
  document.body.style.overflow = '';
  burgerBtn.innerHTML =
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"/></svg>';
}

function updateScrollUI() {
  const scrollY = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

  nav.classList.toggle('nav--scrolled', scrollY > 20);
  if (progressBar) progressBar.style.width = `${progress}%`;

  const offset = nav.offsetHeight + 80;
  let current = sections[0]?.id || 'hero';

  sections.forEach((section) => {
    if (scrollY >= section.offsetTop - offset) current = section.id;
  });

  navLinks.forEach((link) => {
    link.classList.toggle('nav__link--active', link.dataset.target === current);
  });
}

window.addEventListener('scroll', updateScrollUI, { passive: true });

document.querySelectorAll('[data-target]').forEach((el) => {
  el.addEventListener('click', () => scrollToId(el.dataset.target));
});

document.querySelector('.nav__logo')?.addEventListener('click', (e) => {
  e.preventDefault();
  scrollToId('hero');
});

if (burgerBtn && mobileMenu) {
  burgerBtn.addEventListener('click', () => {
    if (menuOpen) closeMobileMenu();
    else openMobileMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOpen) closeMobileMenu();
  });
}

/* Skills marquee */
const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';
const SIMPLEICON = 'https://cdn.simpleicons.org/';

const SKILL_ICONS = {
  Flutter: `${DEVICON}flutter/flutter-original.svg`,
  Dart: `${DEVICON}dart/dart-original.svg`,
  Android: `${DEVICON}android/android-original.svg`,
  iOS: `${DEVICON}apple/apple-original.svg`,
  React: `${DEVICON}react/react-original.svg`,
  'Vue.js': `${DEVICON}vuejs/vuejs-original.svg`,
  JavaScript: `${DEVICON}javascript/javascript-original.svg`,
  TypeScript: `${DEVICON}typescript/typescript-original.svg`,
  HTML: `${DEVICON}html5/html5-original.svg`,
  CSS: `${DEVICON}css3/css3-original.svg`,
  Bootstrap: `${DEVICON}bootstrap/bootstrap-original.svg`,
  PHP: `${DEVICON}php/php-original.svg`,
  Laravel: `${DEVICON}laravel/laravel-original.svg`,
  Python: `${DEVICON}python/python-original.svg`,
  Django: `${DEVICON}django/django-plain.svg`,
  FastAPI: `${SIMPLEICON}fastapi/009688`,
  'Node.js': `${DEVICON}nodejs/nodejs-original.svg`,
  MySQL: `${DEVICON}mysql/mysql-original.svg`,
  MSSQL: `${DEVICON}microsoftsqlserver/microsoftsqlserver-plain.svg`,
  MongoDB: `${DEVICON}mongodb/mongodb-original.svg`,
  Firebase: `${DEVICON}firebase/firebase-plain.svg`,
  Supabase: `${SIMPLEICON}supabase/3FCF8E`,
  AWS: 'https://api.iconify.design/logos:aws.svg',
  Docker: `${DEVICON}docker/docker-original.svg`,
  Git: `${DEVICON}git/git-original.svg`,
  'CI/CD': `${DEVICON}jenkins/jenkins-original.svg`,
  Stripe: `${SIMPLEICON}stripe/635BFF`,
  Razorpay: `${SIMPLEICON}razorpay/0C2451`,
  Sentry: `${SIMPLEICON}sentry/362D59`,
  Postman: `${SIMPLEICON}postman/FF6C37`,
  Figma: `${SIMPLEICON}figma/F24E1E`,
};

function buildSkillPill(name) {
  const pill = document.createElement('span');
  pill.className = 'skill-pill';

  const iconWrap = document.createElement('span');
  iconWrap.className = 'skill-pill__icon-wrap';

  const iconSrc = SKILL_ICONS[name];
  if (iconSrc) {
    const img = document.createElement('img');
    img.src = iconSrc;
    img.alt = '';
    img.width = 18;
    img.height = 18;
    img.loading = 'lazy';
    img.className = 'skill-pill__icon';
    img.onerror = () => img.remove();
    iconWrap.appendChild(img);
  }

  pill.appendChild(iconWrap);

  const label = document.createElement('span');
  label.className = 'skill-pill__label';
  label.textContent = name;
  pill.appendChild(label);
  return pill;
}

function initSkillsMarquee() {
  document.querySelectorAll('.skills-strip__track[data-skills]').forEach((track) => {
    const skills = track.dataset.skills.split(',');
    const group1 = document.createElement('div');
    group1.className = 'skills-strip__group';
    const group2 = document.createElement('div');
    group2.className = 'skills-strip__group';
    group2.setAttribute('aria-hidden', 'true');

    skills.forEach((skill) => {
      group1.appendChild(buildSkillPill(skill.trim()));
      group2.appendChild(buildSkillPill(skill.trim()));
    });

    track.append(group1, group2);
  });
}

/* Scroll reveal with stagger */
function initReveal() {
  const reveal = (el) => {
    const stagger = el.dataset.stagger;
    if (stagger && !prefersReducedMotion) {
      el.style.transitionDelay = `${Number(stagger) * 0.08}s`;
    }
    el.classList.add('is-visible');
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) reveal(el);
    else observer.observe(el);
  });
}

/* Projects grid — fill orphan row slots */
function initProjectsGridFiller() {
  const grid = document.querySelector('[data-projects-grid]');
  if (!grid) return;

  const MORE_CLASS = 'project-card--more';
  let resizeTimer;

  function getColumnCount() {
    const styles = getComputedStyle(grid);
    const cols = styles.gridTemplateColumns.split(' ').filter(Boolean).length;
    return cols || 1;
  }

  function buildMoreCard(span) {
    const link = document.createElement('a');
    link.href = '#websites';
    link.className = `card project-card ${MORE_CLASS} reveal`;
    link.style.gridColumn = `span ${span}`;
    link.setAttribute('aria-label', 'See more websites and web apps');
    link.innerHTML = `
      <span class="project-card--more__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
        </svg>
      </span>
      <span class="project-card--more__title">See More</span>
      <span class="project-card--more__text">Explore websites &amp; web apps I've built for clients worldwide.</span>
      <span class="project-card--more__cta">View Web Projects →</span>
    `;

    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('websites');
      if (target) {
        target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }
    });

    return link;
  }

  function updateFiller() {
    grid.querySelector(`.${MORE_CLASS}`)?.remove();

    const cards = grid.querySelectorAll('.project-card:not(.' + MORE_CLASS + ')');
    const cols = getColumnCount();
    const remainder = cards.length % cols;

    if (remainder === 0) return;

    const span = cols - remainder;
    const more = buildMoreCard(span);
    grid.appendChild(more);
  }

  function scheduleUpdate() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateFiller, 100);
  }

  updateFiller();
  window.addEventListener('resize', scheduleUpdate, { passive: true });
}

/* Thread lines — signature dotted connectors (site-wide) */
const SVG_NS = 'http://www.w3.org/2000/svg';

function threadPoint(rect, containerRect, side) {
  const cx = rect.left + rect.width / 2 - containerRect.left;
  const cy = rect.top + rect.height / 2 - containerRect.top;
  switch (side) {
    case 'left':
      return { x: rect.left - containerRect.left, y: cy };
    case 'right':
      return { x: rect.right - containerRect.left, y: cy };
    case 'top':
      return { x: cx, y: rect.top - containerRect.top };
    case 'bottom':
      return { x: cx, y: rect.bottom - containerRect.top };
    default:
      return { x: cx, y: cy };
  }
}

function threadCurve(from, to) {
  const midX = from.x + (to.x - from.x) * 0.5;
  return `M ${from.x} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${to.x} ${to.y}`;
}

function createThreadPath(d, delay = 0, variant = '') {
  const path = document.createElementNS(SVG_NS, 'path');
  path.setAttribute('d', d);
  path.setAttribute('class', variant ? `thread-lines__path thread-lines__path--${variant}` : 'thread-lines__path');
  if (delay) path.style.animationDelay = `${delay}s`;
  return path;
}

function initThreadLines() {
  const wraps = [...document.querySelectorAll('.thread-wrap[data-thread]')];
  if (!wraps.length) return;

  const timers = new WeakMap();

  function isEnabled(wrap) {
    const min = Number(wrap.dataset.threadMin || 0);
    return !min || window.innerWidth >= min;
  }

  function getHubPoint(wrap, containerRect) {
    const hubSel = wrap.dataset.threadHub;
    if (hubSel === 'center') {
      return { x: containerRect.width / 2, y: containerRect.height * 0.12 };
    }
    const hubEl = wrap.querySelector(hubSel);
    if (!hubEl) return null;
    const hubRect = hubEl.getBoundingClientRect();
    return threadPoint(hubRect, containerRect, wrap.dataset.threadHubSide || 'center');
  }

  function drawWrap(wrap) {
    const svg = wrap.querySelector('.thread-lines__svg');
    const pathsGroup = wrap.querySelector('.thread-lines__paths');
    if (!svg || !pathsGroup) return;

    pathsGroup.replaceChildren();

    if (!isEnabled(wrap)) {
      wrap.classList.remove('is-threaded');
      return;
    }

    const mode = wrap.dataset.thread;
    const containerRect = wrap.getBoundingClientRect();
    svg.setAttribute('viewBox', `0 0 ${containerRect.width} ${containerRect.height}`);

    const nodes = [...wrap.querySelectorAll('.thread-node')];

    if (mode === 'hub') {
      const hub = getHubPoint(wrap, containerRect);
      if (!hub || !nodes.length) return;

      nodes.forEach((node, i) => {
        const nodeRect = node.getBoundingClientRect();
        const anchorSide = wrap.classList.contains('contact-network') ? 'left' : 'center';
        const nx = wrap.classList.contains('contact-network')
          ? nodeRect.left + 28 - containerRect.left
          : threadPoint(nodeRect, containerRect, anchorSide).x;
        const ny = nodeRect.top + nodeRect.height / 2 - containerRect.top;
        const midX = hub.x + (nx - hub.x) * 0.55;
        const d = `M ${hub.x} ${hub.y} C ${midX} ${hub.y}, ${midX} ${ny}, ${nx} ${ny}`;
        const path = createThreadPath(d, i * 0.12);
        pathsGroup.appendChild(path);
        node.dataset.pathIndex = String(i);
      });
    }

    if (mode === 'chain') {
      for (let i = 0; i < nodes.length - 1; i += 1) {
        const a = nodes[i].getBoundingClientRect();
        const b = nodes[i + 1].getBoundingClientRect();
        const from = threadPoint(a, containerRect, 'right');
        const to = threadPoint(b, containerRect, 'left');
        pathsGroup.appendChild(createThreadPath(threadCurve(from, to), i * 0.15));
      }
    }

    if (mode === 'timeline-left') {
      const dotEls = nodes.map((node) => {
        const head = node.querySelector('.exp-card__head');
        const dot = node.querySelector('.exp-timeline__dot');
        return { head, dot, node };
      });

      const dotPoints = dotEls.map(({ head, dot, node }) => {
        const anchor = dot || head || node;
        const rect = anchor.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top,
        };
      });

      if (dotPoints.length >= 1) {
        const railX = dotPoints[0].x;
        const gap = 10;

        for (let i = 0; i < dotPoints.length - 1; i += 1) {
          const y1 = dotPoints[i].y + gap;
          const y2 = dotPoints[i + 1].y - gap;
          if (y2 > y1) {
            pathsGroup.appendChild(
              createThreadPath(`M ${railX} ${y1} L ${railX} ${y2}`, i * 0.1, 'rail')
            );
          }
        }

        dotEls.forEach(({ node, dot }, i) => {
          const nodeRect = node.getBoundingClientRect();
          const { x: railX, y: dotY } = dotPoints[i];
          const endX = nodeRect.left - containerRect.left;
          pathsGroup.appendChild(
            createThreadPath(`M ${railX} ${dotY} L ${endX} ${dotY}`, i * 0.08 + 0.04, 'branch')
          );
        });
      }
    }

    if (mode === 'bridge' && nodes.length >= 2) {
      const a = nodes[0].getBoundingClientRect();
      const b = nodes[1].getBoundingClientRect();
      const from = threadPoint(a, containerRect, 'right');
      const to = threadPoint(b, containerRect, 'left');
      pathsGroup.appendChild(createThreadPath(threadCurve(from, to)));
    }

    wrap.classList.toggle('is-threaded', pathsGroup.childElementCount > 0);

    if (wrap.dataset.threadInteractive !== undefined) {
      nodes.forEach((node) => {
        if (node.classList.contains('contact-node--static')) return;
        node.onmouseenter = () => {
          pathsGroup.children[node.dataset.pathIndex]?.classList.add('is-active');
        };
        node.onmouseleave = () => {
          pathsGroup.children[node.dataset.pathIndex]?.classList.remove('is-active');
        };
      });
    }
  }

  function scheduleDraw(wrap) {
    clearTimeout(timers.get(wrap));
    timers.set(
      wrap,
      setTimeout(() => drawWrap(wrap), 80)
    );
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          scheduleDraw(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  wraps.forEach((wrap) => {
    observer.observe(wrap);
    if (wrap.getBoundingClientRect().top < window.innerHeight) scheduleDraw(wrap);

    if (wrap.classList.contains('exp-timeline')) {
      wrap.querySelectorAll('.exp-card').forEach((card) => {
        const cardObserver = new MutationObserver(() => scheduleDraw(wrap));
        cardObserver.observe(card, { attributes: true, attributeFilter: ['class'] });
      });
    }
  });

  window.addEventListener(
    'resize',
    () => wraps.forEach(scheduleDraw),
    { passive: true }
  );
  window.addEventListener('load', () => wraps.forEach(scheduleDraw));
}

/* Page ready */
function initPage() {
  document.body.classList.add('is-loaded');
  updateScrollUI();
}

initSkillsMarquee();
initProjectsGridFiller();
initReveal();
initThreadLines();
initPage();
