document.addEventListener('DOMContentLoaded', () => {

  // ═══════════════════════════════════════════════
  //  STATIC DATA
  // ═══════════════════════════════════════════════

  const VIDEO_DATA = [
    { type:'vimeo', id:'1070281135', title:'TSHEGL',
      credits:['Director: Philipp Silbernagl','Production: Sandgrain'] },
    { type:'vimeo', id:'1063071817', title:'Wolfhaus',
      credits:['Director: Philipp Silbernagl','Production: Bocek Visual Storytelling'] },
    { type:'youtube_external', id:'QZfO0MFYk0E', title:'Analog',
      credits:['— credits to be added —'] },
    { type:'local', id:'videos/Usbef.mp4', title:'Und sie begannen ein fröhliches Fest',
      credits:['Director: Maya Bartetzko','Production: Maya Bartetzko'] },
  ];

  const RELEASE_DATA = {
    'anything-moves': {
      title:       'Anything that moves',
      meta:        'Daniel Bovolon - 2026',
      artwork:     'images/anything_that_moves_cover.png',
      description: 'Anything that moves is a living multisensorial space. The original sound composition was crafted with recordings gathered, shaped and created by Daniel Bovolon over the years 2023-2026. What the work asks is simple: attention. What attention reveals is not. The silence that fills the space has a different texture depending on who and where you are. Built through abstract composition, attentive listening, memory, psychoacoustic manipulation - silence holding everything together. Listening becomes an active field.',
      credits:     'Sound Design & Composition - Daniel Bovolon<br>Mix & Master - Daniel Bovolon<br>Violin - Alpay Jan Inkilap<br>Cello - Idil Pulat<br>Flute - Elle Sussman<br>Voice & Acoustic Guitar - Mauro Fernandez v.W.<br>Acoustic Guitar - Nikolas Wilson<br>Acoustic Guitar - Morten Christensen<br><br>All rights reserved.',
    },
    'mudral-wcib': {
      title:       'What could it be (Outro)',
      meta:        'Mudral - Wachuma Records - 2024',
      artwork:     'images/mudral_wcib_cover.jpg',
      description: 'From "VA - Illusion of Reality" on Wachuma Records.',
      credits:     'Produced by Daniel Bovolon aka Mudral.<br><br>All rights reserved.',
      bandcamp:    'https://wachuma.bandcamp.com/track/mudral-what-could-it-be-148-bpm-outro',
    },
    'mudral-oseee': {
      title:       'Oseee',
      meta:        'Mudral - 2026',
      artwork:     'images/mudral_oseee_cover.jpg',
      description: 'Listen on SoundCloud.',
      credits:     'Produced by Daniel Bovolon aka Mudral.<br><br>All rights reserved.',
      soundcloud:  'https://soundcloud.com/mudral_music/oseee-raw-version',
    },
    'mudral-midnight': {
      title:       'Midnight Zone',
      meta:        'Mudral - 2026',
      artwork:     'images/mudral_midnight_cover.jpg',
      description: 'Listen on SoundCloud.',
      credits:     'Produced by Daniel Bovolon aka Mudral.<br><br>All rights reserved.',
      soundcloud:  'https://soundcloud.com/mudral_music/midnight-zone-original-version',
    },
    'mudral-tofind': {
      title:       'To find at all',
      meta:        'Mudral - 2025',
      artwork:     'images/mudral_tofind_cover.jpg',
      description: 'Listen on SoundCloud.',
      credits:     'Produced by Daniel Bovolon aka Mudral.<br><br>All rights reserved.',
      soundcloud:  'https://soundcloud.com/mudral_music/to-find-at-all-part-one',
    },
    vorspuelung: {
      title:       'Vorspülung',
      meta:        'Spülmittel - January 2025',
      artwork:     'images/vorspuelung_cover.jpg',
      description: 'This album is an offshoot experiment by Spülmittel.',
      credits:     'Engineering: Clifford Staline, Akos Kopacz, Regina Park.<br>Written by Spülmittel - Mauro Fernandez von Waldenburg (bass, voice, synth), Martin Castillo Kötter (guitar, voice, synth), Daniel Bovolon (drums, voice, synth).<br>Produced, mixed and mastered by Daniel Bovolon.<br>Featuring: Martha Theuma (vocals), Gabriel Bovolon (guitar).<br><br>All rights reserved.',
      bandcamp:    'https://spulmittel.bandcamp.com/album/vorsp-lung',
    },
    glocken: {
      title:       'Glocken',
      meta:        'Daniel Bovolon - January 2026 - Bolzano/Bozen - Maria Himmelfahrt Kirche',
      artwork:     'images/glocken_cover.jpg',
      description: 'What emerged from a casual field recording in Bolzano\'s old town is Glocken - Teil 1. Originally inspired and created for a religiously-themed film score, Glocken dives into the frequencies of the Maria Himmelfahrt Kirche.',
      credits:     'All sound recorded and curated by Daniel Bovolon.<br><br>All rights reserved.',
      bandcamp:    'https://danielbovolon.bandcamp.com/album/glocken',
    },
  };

  const AUDIO_RELEASE_DATA = {
    'anything-moves': {
      title:       'Anything that moves',
      meta:        'Daniel Bovolon - 2026',
      artwork:     'images/anything_that_moves_cover.png',
      description: 'Anything that moves is a living multisensorial space. The original sound composition was crafted with recordings gathered, shaped and created by Daniel Bovolon over the years 2023-2026. What the work asks is simple: attention. What attention reveals is not. The silence that fills the space has a different texture depending on who and where you are. Built through abstract composition, attentive listening, memory, psychoacoustic manipulation - silence holding everything together. Listening becomes an active field.',
      credits:     'Sound Design & Composition - Daniel Bovolon<br>Mix & Master - Daniel Bovolon<br>Violin - Alpay Jan Inkilap<br>Cello - Idil Pulat<br>Flute - Elle Sussman<br>Voice & Acoustic Guitar - Mauro Fernandez v.W.<br>Acoustic Guitar - Nikolas Wilson<br>Acoustic Guitar - Morten Christensen<br><br>All rights reserved.',
    },
    dqh: {
      title:       'DQH',
      meta:        '2025',
      artwork:     'images/mudral_dqh_cover.jpg',
      description: 'DQH is a series of psychedelic exploratory audio trips.',
      credits:     'Produced by Daniel Bovolon aka Mudral.<br><br>All rights reserved.',
      soundcloud:  'https://soundcloud.com/mudral_music/dqh-part-2',
    },
    furor: {
      title:       'Furor et Ardor',
      meta:        'Daniel Bovolon - 2025',
      artwork:     'images/furor_cover.png',
      description: 'An anime-inspired sound library.',
      credits:     'All sound recorded and curated by Daniel Bovolon.<br><br>All rights reserved.',
    },
    spree: {
      title:       'Subzero',
      meta:        '2026 - Berlin',
      artwork:     'images/subzero_cover.png',
      description: 'Subzero is a sonic sub-space dedicated to capturing and shaping the sound of cold-temperature environments.',
      credits:     'All sound recorded and curated by Daniel Bovolon.<br><br>All rights reserved.',
    },
    fractures: {
      title:       'Fractures Vol.1',
      meta:        '2026 - Berlin',
      artwork:     'images/fractures_cover.jpg',
      description: 'Fractures - the sound of breaking material.',
      credits:     'All sound recorded and curated by Daniel Bovolon.<br><br>All rights reserved.',
    },
    'glocken-audio': {
      title:       'Glocken',
      meta:        'January 2026 - Bolzano/Bozen - Maria Himmelfahrt Kirche',
      artwork:     'images/glocken_cover.jpg',
      description: 'What emerged from a casual field recording in Bolzano\'s old town is Glocken - Teil 1. Originally inspired and created for a religiously-themed film score, Glocken dives into the frequencies of the Maria Himmelfahrt Kirche.',
      credits:     'All sound recorded and curated by Daniel Bovolon.<br><br>All rights reserved.',
      bandcamp:    'https://danielbovolon.bandcamp.com/album/glocken',
    },
    'wilhelm': {
      title:       'Wilhelm the Hunter',
      meta:        'Immersive Sound Collection — 2026 Berlin',
      artwork:     'images/wilhelm_cover.jpg',
      description: 'How loud does the world become when Wilhelm stays still? Fruit of a recent sound-hunt in the forests around Müggelsee at the edges of Berlin. All sound was recorded and shaped to reveal the true core resonances of the space — the hum of the wind resonating in the hunting blind, dry leaves, creatures calling, intense foley sound. Wilhelm the Hunter. Photo from recording location, Müggelsee area, Berlin.',
      credits:     'All sound recorded and designed by Daniel Bovolon.<br>Recorded at Müggelsee, Berlin, Germany.<br><br>All rights reserved.',
    },
  };

  // Track info for GAB display
  const TRACK_INFO = {
    atm:     { track: 'Anything that moves - Demo', album: 'Anything that moves' },
    atmb:    { track: 'Anything that moves - Demo', album: 'Anything that moves' },
    furor:   { track: 'Furor et Ardor',  album: 'Furor et Ardor' },
    spree:   { track: 'Frostschichten',  album: 'Subzero' },
    fia:     { track: 'FI-A',            album: 'Fractures Vol.1' },
    fib:     { track: 'FI-B',            album: 'Fractures Vol.1' },
    fic:     { track: 'FI-C',            album: 'Fractures Vol.1' },
    fid:     { track: 'FI-D',            album: 'Fractures Vol.1' },
    fie:     { track: 'FI-E',            album: 'Fractures Vol.1' },
    bells1:  { track: 'Glocken - Teil 1', album: 'Glocken' },
    bells2:  { track: 'Glocken - Teil 2', album: 'Glocken' },
    bells1b: { track: 'Glocken - Teil 1', album: 'Glocken' },
    bells2b: { track: 'Glocken - Teil 2', album: 'Glocken' },
    wilhelm: { track: 'Wilhelm the Hunter', album: 'Immersive Sound Collection' },
  };

  const COVER_MAP = {
    atm:     'images/anything_that_moves_cover.png',
    atmb:    'images/anything_that_moves_cover.png',
    furor:   'images/furor_cover.png',
    spree:   'images/subzero_cover.png',
    fia:     'images/fractures_cover.jpg',
    fib:     'images/fractures_cover.jpg',
    fic:     'images/fractures_cover.jpg',
    fid:     'images/fractures_cover.jpg',
    fie:     'images/fractures_cover.jpg',
    bells1:  'images/glocken_cover.jpg',
    bells2:  'images/glocken_cover.jpg',
    bells1b: 'images/glocken_cover.jpg',
    bells2b: 'images/glocken_cover.jpg',
    wilhelm: 'images/wilhelm_cover.jpg',
  };

  // Vimeo constants
  const BASE          = 'https://player.vimeo.com/video/';
  const PARAMS_NORMAL = '?title=0&byline=0&portrait=0&color=c8b89a&muted=1';
  const PARAMS_HOVER  = '?title=0&byline=0&portrait=0&color=c8b89a&autoplay=1&muted=1&loop=1&background=1';
  const PARAMS_PANEL  = '?title=0&byline=0&portrait=0&color=c8b89a&autoplay=1&muted=0';

  // ═══════════════════════════════════════════════
  //  NAV ELEMENTS
  // ═══════════════════════════════════════════════

  const navLinks  = document.querySelectorAll('.nav-link');
  const navHome   = document.getElementById('nav-home');
  const logoLink  = document.getElementById('nav-home-logo');
  const nav       = document.getElementById('nav');
  const loadScreen = document.getElementById('loading-screen');
  const DARK_SECTIONS = ['audio'];

  // ═══════════════════════════════════════════════
  //  HOME SLIDESHOW — one image per day, switches at midnight
  // ═══════════════════════════════════════════════

  (function initSlideshow() {
    const slides = Array.from(document.querySelectorAll('#home-slideshow .slide'));
    if (!slides.length) return;

    function getDayIndex() {
      const now = new Date();
      const start = new Date(now.getFullYear(), 0, 0);
      const diff = now - start;
      const oneDay = 1000 * 60 * 60 * 24;
      const dayOfYear = Math.floor(diff / oneDay);
      return dayOfYear % slides.length;
    }

    function showDaySlide() {
      slides.forEach(s => s.classList.remove('active'));
      slides[getDayIndex()].classList.add('active');
    }

    showDaySlide();

    // Schedule switch at next midnight
    function scheduleNextDay() {
      const now = new Date();
      const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const msUntilMidnight = midnight - now;
      setTimeout(() => {
        showDaySlide();
        scheduleNextDay(); // reschedule for next midnight
      }, msUntilMidnight);
    }

    scheduleNextDay();
  })();



  function randomSlide() {
    const slides = Array.from(document.querySelectorAll('#home-slideshow .slide'));
    if (!slides.length) return;
    slides.forEach(s => s.classList.remove('active'));
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((now - start) / 86400000);
    slides[dayOfYear % slides.length].classList.add('active');
  }

  // ═══════════════════════════════════════════════
  //  LOADING SCREEN
  // ═══════════════════════════════════════════════

  function showLoader(cb) {
    if (!loadScreen) { if (cb) cb(); return; }
    loadScreen.classList.add('loading-visible');
    setTimeout(() => {
      loadScreen.classList.remove('loading-visible');
      if (cb) cb();
    }, 300);
  }

  // ═══════════════════════════════════════════════
  //  SECTION SYSTEM
  // ═══════════════════════════════════════════════

  let activeId = null;

  function setNavActive(id) {
    navLinks.forEach(l =>
      l.classList.toggle('active', l.getAttribute('href').replace('#', '') === (id || 'home'))
    );
  }

  function hideSection(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove('section-visible');
  }

  function goHome() {
    if (activeId) hideSection(activeId);
    activeId = null;
    setNavActive(null);
    nav.classList.remove('nav-dark-bg');
    document.body.classList.add('on-home');
    randomSlide();
  }

  function showSection(id) {
    const target = document.getElementById(id);
    if (!target) return;
    if (activeId === id) { showLoader(goHome); return; }
    showLoader(() => {
      if (activeId) hideSection(activeId);
      activeId = id;
      target.scrollTop = 0;
      target.classList.add('section-visible');
      document.body.classList.remove('on-home');
      setNavActive(id);
      nav.classList.toggle('nav-dark-bg', DARK_SECTIONS.includes(id));
    });
  }

  navHome && navHome.addEventListener('click', e => {
    e.preventDefault();
    showLoader(goHome);
  });

  logoLink && logoLink.addEventListener('click', e => {
    e.preventDefault();
    showLoader(goHome);
  });

  navLinks.forEach(link => {
    if (link === navHome) return;
    link.addEventListener('click', e => {
      e.preventDefault();
      showSection(link.getAttribute('href').replace('#', ''));
    });
  });

  setNavActive(null);
  document.body.classList.add('on-home'); // start on home

  // ═══════════════════════════════════════════════
  //  GAB MOBILE: appear on play, hide on scroll down
  // ═══════════════════════════════════════════════
  (function initGabMobile() {
    const gabBar    = document.getElementById('global-audio-bar');
    const gabPlayBtn = document.getElementById('gab-play');
    if (!gabBar) return;

    function gabSetPlaying(on) {
      if (window.innerWidth > 700) return;
      gabBar.classList.toggle('gab-playing', on);
    }

    // Watch play button class for playing state
    if (gabPlayBtn) {
      new MutationObserver(() => {
        gabSetPlaying(gabPlayBtn.classList.contains('playing'));
      }).observe(gabPlayBtn, { attributes: true, attributeFilter: ['class'] });
    }

    // Scroll-hide: hide scrolling down, reveal scrolling up
    let lastY = 0;
    document.querySelectorAll('.page-section').forEach(sec => {
      sec.addEventListener('scroll', () => {
        if (window.innerWidth > 700) return;
        if (!gabBar.classList.contains('gab-playing')) return;
        const y = sec.scrollTop;
        if (y > lastY + 8)      gabBar.classList.add('gab-scroll-hidden');
        else if (y < lastY - 8) gabBar.classList.remove('gab-scroll-hidden');
        lastY = y;
      }, { passive: true });
    });
  })();

  document.querySelectorAll('.album-more-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const body = document.getElementById(btn.dataset.target);
      if (!body) return;
      body.hidden = !body.hidden;
      btn.textContent = body.hidden ? 'about' : 'less';
    });
  });


  // Section name (audio/discography) → go to home when clicked
  document.querySelectorAll('.section-name').forEach(el => {
    el.addEventListener('click', () => showLoader(goHome));
  });

  // Every track title click → opens audio detail panel
  // Player-ID → audio-release mapping
  const PLAYER_TO_RELEASE = {
    atm:'anything-moves',
    furor:'furor',
    spree:'spree', fia:'fractures', fib:'fractures', fic:'fractures',
    fid:'fractures', fie:'fractures',
    bells1:'glocken-audio', bells2:'glocken-audio',
    bells1b:'glocken-audio', bells2b:'glocken-audio',
    wilhelm:'wilhelm',
  };
  // Album title click → opens detail panel (same logic as cover)
  document.querySelectorAll('.audio-album-title').forEach(el => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', e => {
      e.stopPropagation();
      const albumDiv = el.closest('.audio-album');
      if (!albumDiv) return;
      const imgEl = albumDiv.querySelector('.audio-album-image--clickable');
      if (imgEl) imgEl.click();
    });
  });

  document.querySelectorAll('.track-title-main').forEach(el => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', e => {
      e.stopPropagation();
      // 1st: try album's clickable image (main audio section)
      const albumDiv = el.closest('.audio-album');
      if (albumDiv) {
        const imgEl = albumDiv.querySelector('.audio-album-image--clickable');
        if (imgEl) { imgEl.click(); return; }
      }
      // 2nd: find via player ID from the row's data-player attr
      const tr = el.closest('tr[data-player]') || el.closest('tr');
      const pid = tr && tr.dataset.player;
      if (pid) {
        const rid = PLAYER_TO_RELEASE[pid];
        if (rid) {
          const imgEl = document.querySelector(`.audio-album-image--clickable[data-audio-release="${rid}"]`);
          if (imgEl) { imgEl.click(); return; }
        }
      }
      // 3rd: fallback via TRACK_INFO to find matching release
      const titleText = el.textContent.trim();
      for (const [pid2, info] of Object.entries(TRACK_INFO)) {
        if (info.track === titleText) {
          const rid2 = PLAYER_TO_RELEASE[pid2];
          if (rid2) {
            const imgEl = document.querySelector(`.audio-album-image--clickable[data-audio-release="${rid2}"]`);
            if (imgEl) { imgEl.click(); return; }
          }
        }
      }
    });
  });
  // ═══════════════════════════════════════════════
  //  AUDIO PLAYERS
  // ═══════════════════════════════════════════════

  const allPlayers = [];

  function fmt(s) {
    s = Math.floor(s || 0);
    return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  }

  function initPlayer(id) {
    const audio    = document.getElementById('audio-' + id);
    const btn      = document.getElementById('btn-' + id);
    const fill     = document.getElementById('fill-' + id);
    const head     = document.getElementById('head-' + id);
    const timeEl   = document.getElementById('time-' + id);
    const durEl    = document.getElementById('dur-' + id);
    const prog     = document.getElementById('prog-' + id);
    const trackRow      = btn ? btn.closest('tr') : null;
    const trackNameEl   = document.getElementById('trackname-' + id);
    const trackNumEl    = document.getElementById('num-' + id);
    const albumDiv      = audio ? audio.closest('.audio-album') : null;
    const albumTitleEl  = albumDiv ? albumDiv.querySelector('.audio-album-title') : null;

    if (!audio || !btn) return;
    let rafId = null;

    // durEl shows total duration; updates to current time while playing
    audio.addEventListener('loadedmetadata', () => {
      if (durEl) durEl.textContent = fmt(audio.duration);
    });

    function tick() {
      if (!audio.duration) return;
      const pct = audio.currentTime / audio.duration * 100;
      if (fill)  fill.style.width = pct + '%';
      if (head)  head.style.left  = pct + '%';
      if (timeEl) timeEl.textContent = fmt(audio.currentTime);
      if (durEl)  durEl.textContent  = fmt(audio.currentTime); // progress in dur col
      if (!audio.paused) rafId = requestAnimationFrame(tick);
    }

    function setPlaying(on, ended = false) {
      btn.classList.toggle('playing', on);
      btn.classList.toggle('played', !on && ended);
      btn.innerHTML = on ? '<svg class="pause-icon" viewBox="0 0 12 14" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="1" y="1" width="3.5" height="12" fill="currentColor"/><rect x="7.5" y="1" width="3.5" height="12" fill="currentColor"/></svg>' : '<svg class="play-icon" viewBox="0 0 12 14" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><polygon points="0,0 12,7 0,14" fill="currentColor"/></svg>';
      if (fill) fill.classList.toggle('fill--playing', on);
      if (head) head.classList.toggle('head--playing', on);
      if (trackRow) trackRow.classList.toggle('track--playing', on);
      if (trackNameEl) trackNameEl.classList.toggle('name--playing', on);
      if (trackNumEl)  trackNumEl.classList.toggle('num--playing', on);
      if (albumTitleEl) albumTitleEl.classList.toggle('albtitle--playing', on);
      if (on) { if (rafId) cancelAnimationFrame(rafId); rafId = requestAnimationFrame(tick); }
      else    { if (rafId) cancelAnimationFrame(rafId); rafId = null; }
    }

    audio.addEventListener('ended', () => {
      setPlaying(false, true); // true = ended, show red triangle
      if (fill)  fill.style.width = '0%';
      if (head)  head.style.left  = '0%';
      if (timeEl) timeEl.textContent = '0:00';
      if (durEl)  durEl.textContent  = fmt(audio.duration) || '0:00';
    });

    btn.addEventListener('click', () => {
      const paused = audio.paused;
      // Pause all other players, clear their played state
      allPlayers.forEach(p => {
        if (p.audio !== audio && !p.audio.paused) {
          p.audio.pause();
          p.setPlaying(false);
        }
        // Clear played state on other buttons when a new one starts
        if (p.audio !== audio && paused) {
          p.btn.classList.remove('played');
        }
      });
      if (paused) { audio.play().catch(() => {}); setPlaying(true); }
      else        { audio.pause(); setPlaying(false); }
    });

    if (prog) {
      prog.addEventListener('click', e => {
        if (!audio.duration) return;
        const r = prog.getBoundingClientRect();
        const pct = (e.clientX - r.left) / r.width;
        audio.currentTime = pct * audio.duration;
        if (fill) fill.style.width  = pct * 100 + '%';
        if (head) head.style.left   = pct * 100 + '%';
      });
    }

    const playerObj = { audio, btn, fill, head, timeEl, durEl, prog,
      trackNameEl, trackNumEl, albumTitleEl, setPlaying, playerId: id };
    allPlayers.push(playerObj);
  }

  ['atm', 'atmb', 'furor', 'spree', 'fia', 'fib', 'fic', 'fid', 'fie', 'bells1', 'bells2', 'bells1b', 'bells2b', 'wilhelm']
    .forEach(id => initPlayer(id));

  // ═══════════════════════════════════════════════
  //  GLOBAL AUDIO BAR (GAB)
  // ═══════════════════════════════════════════════

  const gabCover  = document.getElementById('gab-cover');
  const gabAlbum  = document.getElementById('gab-album-name');
  const gabTitle  = document.getElementById('gab-title');
  const gabPlay   = document.getElementById('gab-play');
  const gabProg   = document.getElementById('gab-progress');
  const gabFill   = document.getElementById('gab-fill');
  const gabHead   = document.getElementById('gab-head');
  const gabTime   = document.getElementById('gab-time');

  let activePlayer = null;  // the player object currently shown in GAB
  let gabRaf = null;

  function gabTick() {
    if (!activePlayer || !activePlayer.audio.duration) return;
    const pct = activePlayer.audio.currentTime / activePlayer.audio.duration * 100;
    if (gabFill) gabFill.style.width = pct + '%';
    if (gabHead) gabHead.style.left  = pct + '%';
    if (gabTime) gabTime.textContent = fmt(activePlayer.audio.currentTime);
    if (!activePlayer.audio.paused) gabRaf = requestAnimationFrame(gabTick);
  }

  function gabShow(playerObj) {
    activePlayer = playerObj;
    const info  = TRACK_INFO[playerObj.playerId] || {};
    const cover = COVER_MAP[playerObj.playerId]  || '';
    if (gabTitle) gabTitle.textContent = info.track || '—';
    if (gabAlbum) gabAlbum.textContent = info.album || '—';
    if (gabCover) {
      gabCover.style.backgroundImage  = cover ? `url('${cover}')` : 'none';
      gabCover.style.backgroundSize   = 'cover';
      gabCover.style.backgroundPosition = 'center';
    }
  }

  function gabSetPlaying(on, ended = false) {
    if (gabPlay) {
      gabPlay.innerHTML = on ? '<svg class="pause-icon" viewBox="0 0 12 14" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="1" y="1" width="3.5" height="12" fill="currentColor"/><rect x="7.5" y="1" width="3.5" height="12" fill="currentColor"/></svg>' : '<svg class="play-icon" viewBox="0 0 12 14" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><polygon points="0,0 12,7 0,14" fill="currentColor"/></svg>';
      gabPlay.classList.toggle('playing', on);
      gabPlay.classList.toggle('played', !on && ended);
    }
    if (gabFill) gabFill.classList.toggle('fill--playing', on);
    if (gabHead) gabHead.classList.toggle('head--playing', on);
    if (on) {
      if (gabRaf) cancelAnimationFrame(gabRaf);
      gabRaf = requestAnimationFrame(gabTick);
    } else {
      if (gabRaf) { cancelAnimationFrame(gabRaf); gabRaf = null; }
    }
  }

  // Wire every player to update GAB on play/pause/end
  allPlayers.forEach(p => {
    p.audio.addEventListener('play', () => {
      gabShow(p);
      gabSetPlaying(true);
      p.setPlaying(true);  // always activate track row on play
    });
    p.audio.addEventListener('pause', () => {
      gabSetPlaying(false);
      p.setPlaying(false); // always deactivate track row on pause
    });
    p.audio.addEventListener('ended', () => {
      gabSetPlaying(false, true);
      if (gabFill) gabFill.style.width = '0%';
      if (gabHead) gabHead.style.left  = '0%';
      if (gabTime) gabTime.textContent = '0:00';
    });
  });

  // GAB play button
  gabPlay && gabPlay.addEventListener('click', () => {
    if (!activePlayer) return;
    const a = activePlayer.audio;
    if (a.paused) {
      // Also pause all other players
      allPlayers.forEach(p => {
        if (p !== activePlayer && !p.audio.paused) { p.audio.pause(); p.setPlaying(false); }
      });
      a.play().catch(() => {});
      gabSetPlaying(true);
      activePlayer.setPlaying(true);
    } else {
      a.pause();
      gabSetPlaying(false);
      activePlayer.setPlaying(false);
    }
  });

  // GAB seek
  gabProg && gabProg.addEventListener('click', e => {
    if (!activePlayer || !activePlayer.audio.duration) return;
    const r   = gabProg.getBoundingClientRect();
    const pct = (e.clientX - r.left) / r.width;
    activePlayer.audio.currentTime = pct * activePlayer.audio.duration;
    if (gabFill) gabFill.style.width = pct * 100 + '%';
    if (gabHead) gabHead.style.left  = pct * 100 + '%';
  });

  // On page load: populate GAB with a random track + activate row in audio section
  (function initGAB() {
    const candidates = allPlayers.filter(p => {
      const srcs = p.audio.getElementsByTagName('source');
      return srcs.length > 0 && srcs[0].getAttribute('src');
    });
    if (!candidates.length) return;
    const pick = candidates[Math.floor(Math.random() * candidates.length)];
    gabShow(pick);
    gabSetPlaying(false);
    // Pre-activate the track row in the main audio section
    // (red highlight, same as if GAB were already playing it)
    pick.setPlaying(false); // ensure play icon stays as play, not red
    // Mark this player as "armed" so GAB play button starts it

    // GAB cover click → open audio detail panel for active track
    const gabCoverEl = document.getElementById('gab-cover');
    const gabTitleEl = document.getElementById('gab-title');
    function gabOpenPanel() {
      if (!activePlayer) return;
      const id = activePlayer.playerId;
      // Map player ID to audio-release ID
      const releaseMap = {
        spree:'spree', fia:'fractures', fib:'fractures', fic:'fractures',
        fid:'fractures', fie:'fractures',
        bells1:'glocken-audio', bells2:'glocken-audio',
        bells1b:'glocken-audio', bells2b:'glocken-audio',
        wilhelm:'wilhelm',
      };
      const releaseId = releaseMap[id];
      if (!releaseId) return;
      const albumImgEl = document.querySelector(`.audio-album-image--clickable[data-audio-release="${releaseId}"]`);
      if (albumImgEl) albumImgEl.click();
    }
    if (gabCoverEl) { gabCoverEl.style.cursor = 'pointer'; gabCoverEl.addEventListener('click', gabOpenPanel); }
    if (gabTitleEl) { gabTitleEl.style.cursor = 'pointer'; gabTitleEl.addEventListener('click', gabOpenPanel); }
  })();

  // ═══════════════════════════════════════════════
  //  DISCOGRAPHY RELEASE PANEL
  // ═══════════════════════════════════════════════

  const releasePanel = document.getElementById('release-panel');
  const releaseClose = document.getElementById('release-close');

  document.querySelectorAll('.disc-item-img--clickable').forEach(el => {
    el.addEventListener('click', () => {
      const id   = el.dataset.release;
      const data = RELEASE_DATA[id];
      if (!data || !releasePanel) return;

      const artEl = document.getElementById('release-artwork');
      const titEl = document.getElementById('release-title');
      const metEl = document.getElementById('release-meta');
      const dscEl = document.getElementById('release-description');
      const crdEl = document.getElementById('release-credits');
      const bcEl  = document.getElementById('release-bandcamp-link');
      const apEl  = document.getElementById('release-audio-player');

      if (artEl) artEl.src = data.artwork;
      if (titEl) titEl.textContent = data.title;
      if (metEl) metEl.textContent = data.meta;
      if (dscEl) dscEl.innerHTML   = `<p>${data.description}</p>`;
      if (crdEl) crdEl.innerHTML   = `<p>${data.credits}</p>`;
      if (bcEl)  {
        if (data.bandcamp) {
          bcEl.href = data.bandcamp;
          bcEl.textContent = 'Listen on Bandcamp ↗';
          bcEl.style.display = 'inline';
        } else if (data.soundcloud) {
          bcEl.href = data.soundcloud;
          bcEl.textContent = 'Listen on SoundCloud ↗';
          bcEl.style.display = 'inline';
        } else {
          bcEl.style.display = 'none';
        }
      }
      if (apEl) apEl.hidden = (id !== 'glocken');
      const atmEl = document.getElementById('release-atm-player');
      if (atmEl) atmEl.hidden = (id !== 'anything-moves');

      releasePanel.classList.add('release-panel--open');
    });
  });

  releaseClose && releaseClose.addEventListener('click', () => {
    releasePanel && releasePanel.classList.remove('release-panel--open');
  });
  // Click on the panel's left margin strip → close (same as film backdrop)
  releasePanel && releasePanel.addEventListener('click', e => {
    if (e.target === releasePanel) {
      releasePanel.classList.remove('release-panel--open');
    }
  });

  // ═══════════════════════════════════════════════
  //  AUDIO RELEASE PANEL
  // ═══════════════════════════════════════════════

  const audioReleasePanel = document.getElementById('audio-release-panel');
  const audioReleaseClose = document.getElementById('audio-release-close');

  document.querySelectorAll('.audio-album-image--clickable').forEach(el => {
    el.addEventListener('click', () => {
      const id   = el.dataset.audioRelease;
      const data = AUDIO_RELEASE_DATA[id];
      if (!data || !audioReleasePanel) return;

      const artEl = document.getElementById('audio-release-artwork');
      const titEl = document.getElementById('audio-release-title');
      const metEl = document.getElementById('audio-release-meta');
      const dscEl = document.getElementById('audio-release-description');
      const crdEl = document.getElementById('audio-release-credits');
      const bcEl  = document.getElementById('audio-release-bandcamp-link');

      if (artEl) artEl.src = data.artwork;
      if (titEl) titEl.textContent = data.title;
      if (metEl) metEl.textContent = data.meta;
      if (dscEl) dscEl.innerHTML   = `<p>${data.description}</p>`;
      if (crdEl) crdEl.innerHTML   = `<p>${data.credits}</p>`;
      if (bcEl)  {
        if (data.bandcamp) {
          bcEl.href = data.bandcamp;
          bcEl.textContent = 'Listen on Bandcamp ↗';
          bcEl.style.display = 'inline';
        } else if (data.soundcloud) {
          bcEl.href = data.soundcloud;
          bcEl.textContent = 'Listen on SoundCloud ↗';
          bcEl.style.display = 'inline';
        } else {
          bcEl.style.display = 'none';
        }
      }

      audioReleasePanel.classList.add('release-panel--open');
    });
  });

  audioReleaseClose && audioReleaseClose.addEventListener('click', () => {
    audioReleasePanel && audioReleasePanel.classList.remove('release-panel--open');
  });
  audioReleasePanel && audioReleasePanel.addEventListener('click', e => {
    if (e.target === audioReleasePanel) {
      audioReleasePanel.classList.remove('release-panel--open');
    }
  });

  // ═══════════════════════════════════════════════
  //  WORK / FILM VIDEO PANEL
  // ═══════════════════════════════════════════════

  const videoPanel    = document.getElementById('video-panel');
  const backdrop      = document.getElementById('panel-backdrop');
  const vPanelClose   = document.getElementById('panel-close');
  const panelIframe   = document.getElementById('panel-iframe');
  const panelTitle    = document.getElementById('panel-title');
  const panelCredits  = document.getElementById('panel-credits');
  let panelState = 'closed';

  document.querySelectorAll('.work-overlay').forEach(overlay => {
    const idx  = parseInt(overlay.dataset.index, 10);
    const data = VIDEO_DATA[idx];
    if (!data) return;
    const inlineEl = document.getElementById(`vimeo-${idx}`)
                  || document.getElementById(`yt-${idx}`)
                  || document.getElementById(`local-${idx}`);
    if (!inlineEl) return;
    let hoverTimer = null;

    if (data.type === 'vimeo') {
      overlay.addEventListener('mouseenter', () => {
        hoverTimer = setTimeout(() => { inlineEl.src = BASE + data.id + PARAMS_HOVER; }, 200);
      });
      overlay.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimer);
        inlineEl.src = BASE + data.id + PARAMS_NORMAL;
      });
    } else if (data.type === 'local') {
      // Hover preview: play muted, restore poster frame on leave
      overlay.addEventListener('mouseenter', () => {
        hoverTimer = setTimeout(() => { inlineEl.play().catch(()=>{}); }, 200);
      });
      overlay.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimer);
        inlineEl.pause();
        // Force the video to reload the poster frame
        // Setting currentTime to 0 alone won't show the poster again
        const sources = inlineEl.getElementsByTagName('source');
        if (sources.length) {
          inlineEl.removeAttribute('src');
          inlineEl.load(); // forces poster to redisplay
        } else {
          inlineEl.currentTime = 0;
        }
      });
    }
    // YouTube doesn't allow hover-autoplay easily - just clickable

    overlay.addEventListener('click', () => {
      clearTimeout(hoverTimer);
      if (data.type === 'vimeo') {
        inlineEl.src = BASE + data.id + PARAMS_NORMAL;
      } else if (data.type === 'local') {
        inlineEl.pause();
        inlineEl.currentTime = 0;
      }
      openVideoPanel(idx);
    });
  });

  function openVideoPanel(idx) {
    if (panelState === 'closing') {
      videoPanel.addEventListener('animationend', () => openVideoPanel(idx), { once: true });
      return;
    }
    if (panelState === 'opening' || panelState === 'open') return;
    const d = VIDEO_DATA[idx];
    if (panelTitle)   panelTitle.textContent = d.title;
    if (panelCredits) panelCredits.innerHTML = d.credits.map(c => `<p>${c}</p>`).join('');
    const panelVideo = document.getElementById('panel-video');
    // Reset both players cleanly
    if (panelIframe) {
      panelIframe.removeAttribute('src');
      panelIframe.hidden = true;
      panelIframe.style.display = 'none';
    }
    if (panelVideo) {
      panelVideo.pause();
      panelVideo.removeAttribute('src');
      panelVideo.load();
      panelVideo.hidden = true;
      panelVideo.style.display = 'none';
    }
    // Show the right player for this video type
    if (d.type === 'vimeo') {
      if (panelIframe) {
        panelIframe.hidden = false;
        panelIframe.style.display = 'block';
        panelIframe.setAttribute('src', BASE + d.id + PARAMS_PANEL);
      }
    } else if (d.type === 'youtube') {
      if (panelIframe) {
        panelIframe.hidden = false;
        panelIframe.style.display = 'block';
        panelIframe.setAttribute('src', `https://www.youtube.com/embed/${d.id}?autoplay=1&modestbranding=1&rel=0`);
      }
    } else if (d.type === 'local') {
      if (panelVideo) {
        panelVideo.hidden = false;
        panelVideo.style.display = 'block';
        panelVideo.setAttribute('src', d.id);
        panelVideo.play().catch(()=>{});
      }
    }
    videoPanel.classList.remove('panel-open', 'panel-closing', 'panel-opening');
    void videoPanel.offsetWidth;
    panelState = 'opening';
    videoPanel.classList.add('panel-opening');
    backdrop && backdrop.classList.add('backdrop-visible');
    videoPanel.addEventListener('animationend', () => {
      videoPanel.classList.remove('panel-opening');
      videoPanel.classList.add('panel-open');
      panelState = 'open';
    }, { once: true });
  }

  function closeVideoPanel() {
    if (panelState === 'closed' || panelState === 'closing') return;
    if (panelState === 'opening') {
      videoPanel.addEventListener('animationend', closeVideoPanel, { once: true });
      return;
    }
    videoPanel.classList.remove('panel-open', 'panel-opening');
    void videoPanel.offsetWidth;
    panelState = 'closing';
    videoPanel.classList.add('panel-closing');
    backdrop && backdrop.classList.remove('backdrop-visible');
    videoPanel.addEventListener('animationend', () => {
      videoPanel.classList.remove('panel-closing');
      panelState = 'closed';
      setTimeout(() => {
        if (panelIframe) panelIframe.src = '';
        const pv = document.getElementById('panel-video');
        if (pv) { pv.pause(); pv.removeAttribute('src'); pv.load(); }
      }, 100);
    }, { once: true });
  }

  vPanelClose && vPanelClose.addEventListener('click', closeVideoPanel);
  backdrop    && backdrop.addEventListener('click', closeVideoPanel);

  // ═══════════════════════════════════════════════
  //  PRODUCTION CATALOG FILTERS
  // ═══════════════════════════════════════════════

  (function initCatalogFilters() {
    const filterBtns = document.querySelectorAll('.cat-filter');
    const rows = document.querySelectorAll('#catalog-body .cat-row');
    if (!filterBtns.length) return;
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('cat-filter--active'));
        btn.classList.add('cat-filter--active');
        const filter = btn.dataset.filter;
        rows.forEach(row => {
          if (filter === 'all' || row.dataset.cat === filter) {
            row.classList.remove('cat-hidden');
          } else {
            row.classList.add('cat-hidden');
          }
        });
      });
    });
  })();

  // ═══════════════════════════════════════════════
  //  GLOBAL ESCAPE KEY
  // ═══════════════════════════════════════════════

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    releasePanel      && releasePanel.classList.remove('release-panel--open');
    audioReleasePanel && audioReleasePanel.classList.remove('release-panel--open');
    closeVideoPanel();
  });

});

// GAB toggle button
document.addEventListener('DOMContentLoaded', () => {
  const gabBar    = document.getElementById('global-audio-bar');
  const gabToggle = document.getElementById('gab-toggle');
  if (!gabBar || !gabToggle) return;

  gabToggle.addEventListener('click', e => {
    e.stopPropagation();
    gabBar.classList.toggle('gab-collapsed');
    gabBar.classList.remove('gab-panel-open');
  });
});


// ─── MOBILE MENU TOGGLE ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn      = document.getElementById('mobile-menu-toggle');
  const homeDiscover = document.getElementById('home-discover-btn');
  const closeBtn     = document.getElementById('mobile-menu-close');
  const nav          = document.getElementById('nav');
  if (!nav) return;

  function isOpen()  { return nav.classList.contains('mobile-nav-open'); }
  function openMenu()  {
    nav.classList.add('mobile-nav-open');
    menuBtn && menuBtn.classList.add('menu-active');
  }
  function closeMenu() {
    nav.classList.remove('mobile-nav-open');
    menuBtn && menuBtn.classList.remove('menu-active');
  }
  function toggleMenu() { isOpen() ? closeMenu() : openMenu(); }

  menuBtn      && menuBtn.addEventListener('click',      e => { e.stopPropagation(); toggleMenu(); });
  homeDiscover && homeDiscover.addEventListener('click', e => { e.stopPropagation(); toggleMenu(); });
  closeBtn     && closeBtn.addEventListener('click',     e => { e.stopPropagation(); closeMenu(); });

  // Close menu when a nav link is clicked
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => closeMenu()));

  // Close when clicking outside
  document.addEventListener('click', e => {
    if (!nav.contains(e.target) && e.target !== menuBtn && e.target !== homeDiscover) closeMenu();
  });

  // Section-name clicks → go home (mobile)
  document.querySelectorAll('.section-name').forEach(el => {
    el.addEventListener('click', () => {
      closeMenu();
      if (typeof showLoader === 'function' && typeof goHome === 'function') {
        showLoader(goHome);
      }
    });
  });
});


// ─── GAB DRAGGABLE on mobile ────────────────────────────────────
(function() {
  const gab = document.getElementById('global-audio-bar');
  if (!gab) return;
  let isDragging = false;
  let startX, startY, startLeft, startTop;
  let moved = false;

  function onStart(e) {
    // Only enable drag on mobile (touch devices or narrow screens)
    if (window.innerWidth > 700) return;
    // Don't drag from interactive elements (toggle, play, cover)
    const target = e.target;
    if (target.closest('#gab-toggle') ||
        target.closest('.gab-play-btn') ||
        target.closest('.gab-cover') ||
        target.closest('.gab-title')) {
      return;
    }
    const t = e.touches ? e.touches[0] : e;
    isDragging = true;
    moved = false;
    startX = t.clientX;
    startY = t.clientY;
    const rect = gab.getBoundingClientRect();
    startLeft = rect.left;
    startTop = rect.top;
    gab.classList.add('gab-dragging');
    e.preventDefault();
  }

  function onMove(e) {
    if (!isDragging) return;
    const t = e.touches ? e.touches[0] : e;
    const dx = t.clientX - startX;
    const dy = t.clientY - startY;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) moved = true;
    let newLeft = startLeft + dx;
    let newTop = startTop + dy;
    // Constrain inside viewport
    const w = gab.offsetWidth;
    const h = gab.offsetHeight;
    newLeft = Math.max(0, Math.min(window.innerWidth - w, newLeft));
    newTop = Math.max(0, Math.min(window.innerHeight - h, newTop));
    gab.style.left = newLeft + 'px';
    gab.style.top = newTop + 'px';
    gab.style.right = 'auto';
    gab.style.bottom = 'auto';
    e.preventDefault();
  }

  function onEnd() {
    if (!isDragging) return;
    isDragging = false;
    gab.classList.remove('gab-dragging');
  }

  gab.addEventListener('touchstart', onStart, { passive: false });
  gab.addEventListener('touchmove',  onMove,  { passive: false });
  gab.addEventListener('touchend',   onEnd);
  gab.addEventListener('mousedown',  onStart);
  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup',   onEnd);
})();
