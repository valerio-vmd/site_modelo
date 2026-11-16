'use strict';
(() => {
  const c = window.SITE;
  if (!c) return;
  const $ = (selector) => document.querySelector(selector);
  const text = (selector, value) => { const el = $(selector); if (el) el.textContent = value; };
  const element = (tag, className, value) => { const el = document.createElement(tag); if (className) el.className = className; if (value !== undefined) el.textContent = value; return el; };
  const safeUrl = (value, hosts) => {
    try { const url = new URL(value); return url.protocol === 'https:' && !url.username && !url.password && (!hosts || hosts.includes(url.hostname)) ? url.href : ''; } catch { return ''; }
  };
  const imagePath = (value) => /^assets\/[a-zA-Z0-9_./-]+\.(jpg|jpeg|png|webp|avif|svg)$/.test(value) && !value.includes('..') ? value : 'assets/clinica.jpg';
  const phone = /^\d{10,15}$/.test(c.whatsapp) ? c.whatsapp : '';
  const wa = (message) => phone ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}` : '#contato';
  const external = (a, url) => { a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer'; return a; };
  const image = (src, alt) => { const img = element('img'); img.src = imagePath(src); img.alt = alt; img.loading = 'lazy'; img.width = 900; img.height = 700; return img; };
  document.querySelectorAll('[data-name]').forEach(el => { el.textContent = c.name; });
  document.querySelectorAll('[data-tagline]').forEach(el => { el.textContent = c.tagline; });
  document.title = `${c.name} | ${c.tagline}`;
  $('meta[name="description"]').content = c.description;
  $('meta[property="og:title"]').content = document.title;
  $('meta[property="og:description"]').content = c.description;
  const publicUrl = safeUrl(c.url);
  if (publicUrl) {
    const canonical = element('link'); canonical.rel = 'canonical'; canonical.href = publicUrl; document.head.append(canonical);
    for (const [property, content] of [['og:url', publicUrl], ['og:image', new URL(imagePath(c.hero.image), publicUrl).href]]) {
      const meta = element('meta'); meta.setAttribute('property', property); meta.content = content; document.head.append(meta);
    }
  }
  $('#demo').hidden = !c.demo;
  $('#services-demo').hidden = !c.demo;
  $('#gallery-demo').hidden = !c.demo;
  document.querySelectorAll('.photo-note').forEach(el => { el.hidden = !c.demo; });
  text('#hero-eyebrow', c.hero.eyebrow); text('#hero-title', c.hero.title); text('#hero-text', c.hero.text);
  $('#hero-image').src = imagePath(c.hero.image); $('#hero-image').alt = c.hero.alt;
  text('#about-title', c.about.title); text('#about-text', c.about.text);
  $('#about-image').src = imagePath(c.about.image); $('#about-image').alt = c.about.alt;
  text('#year', new Date().getFullYear());
  text('#professional', [c.professional, c.registration].filter(Boolean).join(' · ') || 'Modelo demonstrativo • responsável e registro profissional a configurar.');
  document.querySelectorAll('[data-whatsapp]').forEach(a => { if (phone) external(a, wa(c.message)); });
  c.services.forEach(service => {
    const card = element('article', 'service-card'); const content = element('div', 'service-content');
    const link = element('a', '', 'Quero saber mais ↗'); link.href = '#contato';
    if (phone) external(link, wa(`Olá! Vim pelo site e gostaria de informações sobre ${service.title}.`));
    content.append(element('h3', '', service.title), element('p', '', service.text), link);
    card.append(image(service.image, `Imagem ilustrativa de ${service.title}`), content); $('#services').append(card);
  });
  c.differences.forEach((item, index) => {
    const card = element('article'); card.append(element('span', 'difference-number', String(index + 1).padStart(2, '0')), element('h3', '', item.title), element('p', '', item.text)); $('#differences').append(card);
  });
  const dialog = $('#image-dialog');
  c.gallery.forEach(item => {
    const button = element('button'); button.type = 'button'; button.setAttribute('aria-label', `Ampliar: ${item.alt}`); button.append(image(item.image, item.alt));
    button.addEventListener('click', () => { $('#dialog-image').src = imagePath(item.image); $('#dialog-image').alt = item.alt; dialog.showModal(); });
    $('#gallery').append(button);
  });
  $('#close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
  if (!c.testimonials.length) {
    const box = element('div', 'testimonial-empty'); box.append(element('p', '', 'Este espaço será dedicado a relatos reais, publicados com autorização. No modelo demonstrativo, nenhuma avaliação foi inventada.')); $('#testimonials').append(box);
  } else {
    const list = element('div', 'testimonial-list');
    c.testimonials.forEach(item => { const quote = element('blockquote'); const rating = Math.max(1, Math.min(5, Number(item.rating) || 5)); const stars = element('div', 'stars', '★'.repeat(rating)); stars.setAttribute('aria-label', `${rating} de 5 estrelas`); quote.append(stars, element('p', '', item.text), element('cite', '', item.name)); list.append(quote); });
    $('#testimonials').append(list);
  }
  c.faq.forEach(item => { const details = element('details'); details.append(element('summary', '', item.question), element('p', '', item.answer)); $('#faq').append(details); });
  const sections = { about: 'sobre', services: 'tratamentos', differences: 'diferenciais', gallery: 'estrutura', testimonials: 'depoimentos', faq: 'duvidas' };
  Object.entries(sections).forEach(([key, id]) => { if (c.sections[key] === false) { $(`#${id}`).hidden = true; document.querySelectorAll(`a[href="#${id}"]`).forEach(a => { a.hidden = true; }); } });
  const contacts = [['Endereço', c.address], ['Horário de atendimento', c.hours], ['Telefone', c.phone], ['E-mail', c.email]];
  contacts.forEach(([label, value]) => { const dd = element('dd'); dd.textContent = value || 'A configurar para esta clínica'; if (label === 'Telefone' && /^[+\d() .-]{8,25}$/.test(value)) { const a = element('a', '', value); a.href = `tel:${value.replace(/[^+\d]/g, '')}`; dd.replaceChildren(a); } if (label === 'E-mail' && /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(value)) { const a = element('a', '', value); a.href = `mailto:${value}`; dd.replaceChildren(a); } $('#contact-details').append(element('dt', '', label), dd); });
  const instagram = safeUrl(c.instagram, ['instagram.com', 'www.instagram.com']);
  if (instagram) $('#social-links').append(external(element('a', 'text-link', 'Instagram ↗'), instagram));
  if (c.address) {
    const box = $('#map-box'); const button = element('button', 'button small', 'Carregar mapa'); button.type = 'button';
    box.replaceChildren(element('p', '', 'O mapa é fornecido pelo Google. Ao carregá-lo, seu navegador se conecta a esse serviço.'), button);
    button.addEventListener('click', () => { const iframe = element('iframe'); iframe.title = `Localização: ${c.address}`; iframe.src = `https://www.google.com/maps?q=${encodeURIComponent(c.address)}&output=embed`; iframe.loading = 'lazy'; iframe.referrerPolicy = 'no-referrer'; iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-popups'); box.replaceChildren(iframe); });
  }
  const toggle = $('.menu-toggle'); const nav = $('#navigation');
  const closeMenu = () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); };
  toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
  $('#contact-form').addEventListener('submit', event => {
    event.preventDefault(); const form = event.currentTarget;
    if (!form.reportValidity()) return;
    if (!phone) { text('#form-status', 'Este é um modelo demonstrativo. Configure o WhatsApp da clínica para habilitar o contato. Nenhuma mensagem foi enviada.'); return; }
    const data = new FormData(form);
    const message = [`Olá! Vim pelo site.`, `Nome: ${data.get('name').trim()}`, `Telefone: ${data.get('phone').trim()}`, data.get('email') ? `E-mail: ${data.get('email').trim()}` : '', `Assunto: ${data.get('subject')}`, `Mensagem: ${data.get('message').trim()}`].filter(Boolean).join('\n');
    const link = external(element('a', 'text-link', 'Abrir mensagem no WhatsApp ↗'), wa(message));
    $('#form-status').replaceChildren(document.createTextNode('Mensagem preparada. Revise e envie no WhatsApp: '), link);
  });
})();
