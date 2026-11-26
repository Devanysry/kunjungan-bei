/* Interaksi website Kunjungan Industri BEI */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  /* ---------- Identitas ---------- */
  $$('.js-nama').forEach(e => e.textContent = IDENTITAS.nama);
  $$('.js-identitas').forEach(e => e.textContent = `${IDENTITAS.nama} · ${IDENTITAS.kelas} · ${IDENTITAS.sekolah}`);
  $('#metaTanggal').textContent = IDENTITAS.tanggal;

  /* ---------- Tema ---------- */
  const root = document.documentElement;
  const saved = store.get('tema');
  if (saved) root.dataset.theme = saved;
  $('#themeBtn').addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next; store.set('tema', next);
  });

  /* ---------- Navigasi & progress ---------- */
  const nav = $('#nav'), links = $('#links'), menuBtn = $('#menuBtn'), bar = $('#progress');
  menuBtn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  });
  $$('a', links).forEach(a => a.addEventListener('click', () => { links.classList.remove('open'); menuBtn.setAttribute('aria-expanded', false); }));
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
    nav.classList.toggle('solid', h.scrollTop > 40);
  }, { passive: true });

  const sections = $$('main section[id]');
  const navLinks = $$('a', links);
  const spy = new IntersectionObserver(es => {
    es.forEach(e => {
      if (e.isIntersecting) navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => spy.observe(s));

  /* ---------- Ticker ---------- */
  const tk = $('#ticker');
  const items = TICKER.map((n, i) => {
    const up = (i * 7 + 3) % 3 !== 0;
    return `<span class="tk ${up ? 'up' : 'down'}">${n} <i>${up ? '▲' : '▼'}</i></span>`;
  }).join('');
  tk.innerHTML = items + items;

  /* ---------- Statistik (counter) ---------- */
  $('#stats').innerHTML = STATS.map(s => `
    <div class="stat reveal">
      <div class="num" data-to="${s.value}" data-dec="${s.decimals || 0}" data-pre="${s.prefix || ''}" data-suf="${s.suffix || ''}">0</div>
      <p>${s.label}</p>
    </div>`).join('');
  const fmt = (n, d) => n.toLocaleString('id-ID', { minimumFractionDigits: d, maximumFractionDigits: d });
  function count(el) {
    const to = +el.dataset.to, d = +el.dataset.dec, pre = el.dataset.pre, suf = el.dataset.suf;
    const dur = 1400, t0 = performance.now();
    (function tick(t) {
      const p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = pre + fmt(to * e, d) + suf;
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      const n = $('.num', e.target); if (n && !n.dataset.done) { n.dataset.done = 1; count(n); }
      io.unobserve(e.target);
    }
  }), { threshold: .2 });

  /* ---------- Timeline sejarah ---------- */
  const tl = $('#timeline'), tld = $('#timelineDetail');
  tl.innerHTML = SEJARAH.map((s, i) => `<button role="tab" data-i="${i}" class="${i === 0 ? 'active' : ''}"><span>${s.year}</span></button>`).join('');
  function showSejarah(i) {
    const s = SEJARAH[i];
    $$('button', tl).forEach((b, j) => b.classList.toggle('active', i === j));
    tld.innerHTML = `<h4>${s.year} · ${s.title}</h4><p>${s.text}</p>`;
  }
  tl.addEventListener('click', e => { const b = e.target.closest('button'); if (b) showSejarah(+b.dataset.i); });
  showSejarah(0);

  /* ---------- Kegiatan ---------- */
  const steps = $('#steps'); let cur = 0;
  steps.innerHTML = KEGIATAN.map((k, i) => `<li><button role="tab" data-i="${i}"><b>${String(i + 1).padStart(2, '0')}</b><span>${k.judul}</span></button></li>`).join('');
  function showStep(i) {
    cur = (i + KEGIATAN.length) % KEGIATAN.length;
    const k = KEGIATAN[cur], card = $('#stepCard');
    card.classList.remove('swap'); void card.offsetWidth; card.classList.add('swap');
    $('#stepImg').src = k.img; $('#stepImg').alt = k.judul;
    $('#stepNum').textContent = `Tahap ${cur + 1} dari ${KEGIATAN.length}`;
    $('#stepTitle').textContent = k.judul;
    $('#stepText').textContent = k.teks;
    $('#stepLearn').textContent = k.belajar;
    $$('button', steps).forEach((b, j) => b.classList.toggle('active', j === cur));
  }
  steps.addEventListener('click', e => { const b = e.target.closest('button'); if (b) showStep(+b.dataset.i); });
  $('#prevStep').addEventListener('click', () => showStep(cur - 1));
  $('#nextStep').addEventListener('click', () => showStep(cur + 1));
  showStep(0);

  /* ---------- Galeri + filter + lightbox ---------- */
  $('#countFoto').textContent = FOTO.length;
  const gal = $('#gallery'), fil = $('#filters');
  fil.innerHTML = Object.entries(KATEGORI).map(([k, v], i) => `<button data-k="${k}" class="${i === 0 ? 'active' : ''}">${v}</button>`).join('');
  let visible = FOTO.map((_, i) => i);
  gal.innerHTML = FOTO.map((f, i) => `
    <figure class="g-item" data-i="${i}" data-cat="${f.cat}" tabindex="0">
      <img src="${f.src}" alt="${f.cap}" loading="lazy">
      <figcaption>${f.cap}</figcaption>
    </figure>`).join('');
  fil.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $$('button', fil).forEach(x => x.classList.toggle('active', x === b));
    visible = [];
    $$('.g-item', gal).forEach(g => {
      const show = b.dataset.k === 'semua' || g.dataset.cat === b.dataset.k;
      g.classList.toggle('hide', !show);
      if (show) visible.push(+g.dataset.i);
    });
  });

  const lb = $('#lightbox'); let lbPos = 0;
  function openLb(idx) {
    lbPos = visible.indexOf(idx); if (lbPos < 0) lbPos = 0;
    renderLb(); lb.hidden = false; document.body.classList.add('noscroll');
  }
  function renderLb() {
    const f = FOTO[visible[lbPos]];
    $('#lbImg').src = f.src; $('#lbImg').alt = f.cap;
    $('#lbCap').textContent = `${f.cap}  (${lbPos + 1}/${visible.length})`;
  }
  function moveLb(d) { lbPos = (lbPos + d + visible.length) % visible.length; renderLb(); }
  function closeLb() { lb.hidden = true; document.body.classList.remove('noscroll'); }
  gal.addEventListener('click', e => { const g = e.target.closest('.g-item'); if (g) openLb(+g.dataset.i); });
  gal.addEventListener('keydown', e => { if (e.key === 'Enter') { const g = e.target.closest('.g-item'); if (g) openLb(+g.dataset.i); } });
  $('#lbClose').addEventListener('click', closeLb);
  $('#lbPrev').addEventListener('click', () => moveLb(-1));
  $('#lbNext').addEventListener('click', () => moveLb(1));
  lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') moveLb(-1);
    if (e.key === 'ArrowRight') moveLb(1);
  });

  /* ---------- Vlog: bab video ---------- */
  const vid = $('#vlogVideo'), ch = $('#chapters');
  const mmss = t => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
  ch.innerHTML = BAB_VIDEO.map((b, i) => `<li><button data-i="${i}"><time>${mmss(b.t)}</time>${b.label}</button></li>`).join('');
  ch.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    vid.currentTime = BAB_VIDEO[+b.dataset.i].t; vid.play().catch(() => {});
  });
  vid.addEventListener('timeupdate', () => {
    let a = 0; BAB_VIDEO.forEach((b, i) => { if (vid.currentTime >= b.t - 0.05) a = i; });
    $$('button', ch).forEach((x, i) => x.classList.toggle('active', i === a));
  });

  /* ---------- Refleksi ---------- */
  $('#kesimpulan').textContent = KESIMPULAN;
  $('#refleksiCards').innerHTML = REFLEKSI.map(r => `<article class="card reveal"><h4>${r.judul}</h4><p>${r.teks}</p></article>`).join('');

  /* ---------- Kuis ---------- */
  const quiz = $('#quiz'); let qi = 0, skor = 0;
  function renderQuiz() {
    if (qi >= KUIS.length) {
      const msg = skor === KUIS.length ? 'Sempurna! Kamu menyimak dengan baik.' : skor >= 3 ? 'Bagus! Pemahamanmu sudah kuat.' : 'Ayo tonton vlog dan baca profil BEI sekali lagi.';
      quiz.innerHTML = `<div class="quiz-end"><div class="big">${skor}/${KUIS.length}</div><p>${msg}</p><button class="btn primary sm" id="qAgain">Ulangi kuis</button></div>`;
      $('#qAgain').onclick = () => { qi = 0; skor = 0; renderQuiz(); };
      return;
    }
    const k = KUIS[qi];
    quiz.innerHTML = `<p class="q-count">Pertanyaan ${qi + 1} dari ${KUIS.length}</p><h4>${k.q}</h4>
      <div class="opts">${k.opts.map((o, i) => `<button data-i="${i}">${o}</button>`).join('')}</div><p class="q-fb" aria-live="polite"></p>`;
    $$('.opts button', quiz).forEach(b => b.onclick = () => {
      const ok = +b.dataset.i === k.a; if (ok) skor++;
      $$('.opts button', quiz).forEach((x, i) => { x.disabled = true; if (i === k.a) x.classList.add('ok'); });
      if (!ok) b.classList.add('bad');
      $('.q-fb', quiz).textContent = ok ? 'Benar!' : 'Belum tepat. Jawaban yang benar ditandai hijau.';
      setTimeout(() => { qi++; renderQuiz(); }, 1300);
    });
  }
  renderQuiz();

  /* ---------- Reveal on scroll ---------- */
  $$('.reveal').forEach(el => io.observe(el));
})();
