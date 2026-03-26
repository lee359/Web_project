    
    const bar = document.getElementById('progress-bar');
    function updateProgressBar() {
      var h = document.documentElement;
      var raw = h.scrollTop / (h.scrollHeight - h.clientHeight) || 0;
      var prog = Math.max(raw, 0.02);
      bar.style.transform = 'scaleX(' + prog + ')';
    }
    updateProgressBar();
    window.addEventListener('scroll', updateProgressBar, { passive: true });
    window.addEventListener('resize', updateProgressBar, { passive: true });

    
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -36px 0px' });

    var targets = document.querySelectorAll(
      '.container h2, .container h3, .container h4, ' +
      '.container > p, .container > ul, .container > ol, ' +
      '.container > blockquote, .container .highlight, ' +
      '.container .mermaid-wrap, .container > img, .container > hr'
    );
    targets.forEach(function (el, i) {
      el.classList.add('reveal');
      el.style.transitionDelay = (Math.min(i % 6, 5) * 55) + 'ms';
      observer.observe(el);
    });

    
    document.querySelectorAll('.container table').forEach(function (tbl) {
      if (!tbl.parentElement.classList.contains('table-wrap')) {
        var wrap = document.createElement('div');
        wrap.className = 'table-wrap reveal';
        tbl.parentNode.insertBefore(wrap, tbl);
        wrap.appendChild(tbl);
        observer.observe(wrap);
      }
    });

    
    mermaid.initialize({ startOnLoad: true, theme: 'neutral', securityLevel: 'strict' });

    
    var lightbox = document.getElementById('mermaid-lightbox');
    var lightboxContent = document.getElementById('mermaid-lightbox-content');
    var lightboxClose = document.getElementById('mermaid-lightbox-close');

    function openLightbox(svgHTML) {
      document.getElementById('lb-svg-wrap').innerHTML = svgHTML;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeLightbox();
    });

    // Reliably attach Mermaid zoom buttons without fixed timeout.
    function attachMermaidZoomButtons(root) {
      root.querySelectorAll('.mermaid-wrap').forEach(function (wrap) {
        if (wrap.dataset.zoomBound === '1') return;
        wrap.dataset.zoomBound = '1';
        var btn = document.createElement('button');
        btn.className = 'mermaid-zoom-btn';
        btn.setAttribute('aria-label', '放大圖表');
        btn.textContent = '⤢ 放大';
        wrap.appendChild(btn);
        btn.addEventListener('click', function () {
          var svg = wrap.querySelector('svg');
          if (svg) openLightbox(svg.outerHTML);
        });
      });
    }

    attachMermaidZoomButtons(document);
    var mermaidWrapObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (node) {
          if (!(node instanceof Element)) return;
          if (node.matches && node.matches('.mermaid-wrap')) {
            attachMermaidZoomButtons(node.parentElement || document);
            return;
          }
          if (node.querySelector && node.querySelector('.mermaid-wrap')) {
            attachMermaidZoomButtons(node);
          }
        });
      });
    });
    mermaidWrapObserver.observe(document.body, { childList: true, subtree: true });

    
    document.querySelectorAll('[data-roadmap]').forEach(function (stack) {
      var viewport = stack.querySelector('[data-roadmap-viewport]');
      if (!viewport) return;

      var cards = Array.from(viewport.querySelectorAll('.roadmap-card'));
      var leftZone = viewport.querySelector('.roadmap-zone-left');
      var rightZone = viewport.querySelector('.roadmap-zone-right');
      var active = 0;
      var direction = 'init';

      var dotsWrap = document.createElement('div');
      dotsWrap.className = 'roadmap-dots';
      dotsWrap.setAttribute('role', 'tablist');
      dotsWrap.setAttribute('aria-label', '學習路線圖進度');
      viewport.appendChild(dotsWrap);

      var dots = cards.map(function (_, index) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'roadmap-dot';
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-label', '前往第 ' + (index + 1) + ' 階段');
        dot.addEventListener('click', function (e) {
          e.stopPropagation();
          if (index === active) return;
          direction = index > active ? 'next' : 'prev';
          active = index;
          applyLayout();
        });
        dotsWrap.appendChild(dot);
        return dot;
      });

      function applyLayout() {
        cards.forEach(function (card, index) {
          card.classList.remove('active', 'stack-1', 'stack-2', 'stack-3', 'out', 'slide-in-next', 'slide-in-prev');
          if (index === active) {
            card.classList.add('active');
            if (direction === 'next') card.classList.add('slide-in-next');
            if (direction === 'prev') card.classList.add('slide-in-prev');
            return;
          }
          var diff = index - active;
          if (diff > 0 && diff <= 3) {
            card.classList.add('stack-' + diff);
          } else {
            card.classList.add('out');
          }
        });

        dots.forEach(function (dot, index) {
          var isActive = index === active;
          dot.classList.toggle('active', isActive);
          dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
      }

      function goNext() {
        direction = 'next';
        active = (active + 1) % cards.length;
        applyLayout();
      }

      function goPrev() {
        direction = 'prev';
        active = (active - 1 + cards.length) % cards.length;
        applyLayout();
      }

      leftZone.addEventListener('click', goPrev);
      rightZone.addEventListener('click', goNext);

      viewport.addEventListener('mousemove', function (e) {
        var rect = viewport.getBoundingClientRect();
        var isLeft = (e.clientX - rect.left) < rect.width / 2;
        viewport.classList.toggle('hover-left', isLeft);
        viewport.classList.toggle('hover-right', !isLeft);
      });
      viewport.addEventListener('mouseleave', function () {
        viewport.classList.remove('hover-left', 'hover-right');
      });

      viewport.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          goPrev();
        }
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          goNext();
        }
      });
      viewport.setAttribute('tabindex', '0');

      applyLayout();
    });
