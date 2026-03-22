/**
 * Portfolio JavaScript
 * Author: Abdullah Aal Amin
 * Description: Full Stack Laravel Developer Portfolio
 */

// ============================================
// CUSTOM CURSOR MODULE
// ============================================
/**
 * Initializes custom cursor with smooth following effect
 * Creates two cursor elements: a small dot and a larger ring
 */
const initCursor = () => {
  const cur = document.getElementById('cur');
  const curR = document.getElementById('cur-r');
  
  if (!cur || !curR) return;
  
  let mx = 0, my = 0, rx = 0, ry = 0;
  
  // Track mouse position
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    cur.style.left = mx + 'px';
    cur.style.top = my + 'px';
  });
  
  // Smooth following animation for ring cursor
  (function loop() {
    rx += (mx - rx) * 0.11;
    ry += (my - ry) * 0.11;
    curR.style.left = rx + 'px';
    curR.style.top = ry + 'px';
    requestAnimationFrame(loop);
  })();
};

// ============================================
// CANVAS PARTICLES MODULE
// ============================================
/**
 * Initializes animated particle background with connecting lines
 * Particles float randomly and connect when close to each other
 */
const initParticles = () => {
  const cv = document.getElementById('bgc');
  const cx = cv.getContext('2d');
  
  if (!cv || !cx) return;
  
  let W, H;
  
  // Resize canvas to window size
  function resize() {
    W = cv.width = innerWidth;
    H = cv.height = innerHeight;
  }
  resize();
  addEventListener('resize', resize);
  
  // Characters to display in particles
  const CHARS = 'LARAVELPHPMYSQLAPI01./{}[];'.split('');
  
  /**
   * Particle class
   * Handles individual particle movement and rendering
   */
  class P {
    constructor() {
      this.reset();
    }
    
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.35;
      this.vy = (Math.random() - 0.5) * 0.35;
      this.sz = Math.random() * 1.5 + 0.5;
      this.ch = Math.random() < 0.25 ? CHARS[Math.floor(Math.random() * CHARS.length)] : null;
      this.a = Math.random() * 0.35 + 0.1;
      this.life = 0;
      this.maxLife = 180 + Math.random() * 280;
    }
    
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.life++;
      
      // Reset particle if it goes off screen or reaches max life
      if (this.life > this.maxLife || this.x < 0 || this.x > W || this.y < 0 || this.y > H) {
        this.reset();
      }
    }
    
    draw() {
      const alpha = this.a * Math.sin(Math.PI * this.life / this.maxLife);
      
      if (this.ch) {
        // Draw character
        cx.font = `${8 + this.sz * 2}px 'DM Mono'`;
        cx.fillStyle = `rgba(200, 245, 106, ${alpha * 0.45})`;
        cx.fillText(this.ch, this.x, this.y);
      } else {
        // Draw circle
        cx.beginPath();
        cx.arc(this.x, this.y, this.sz, 0, Math.PI * 2);
        cx.fillStyle = `rgba(200, 245, 106, ${alpha})`;
        cx.fill();
      }
    }
  }
  
  // Create particles
  const pts = Array.from({ length: 90 }, () => new P());
  
  /**
   * Draw connecting lines between nearby particles
   */
  function drawLines() {
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x;
        const dy = pts[i].y - pts[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 130) {
          cx.beginPath();
          cx.moveTo(pts[i].x, pts[i].y);
          cx.lineTo(pts[j].x, pts[j].y);
          cx.strokeStyle = `rgba(200, 245, 106, ${(1 - dist / 130) * 0.055})`;
          cx.lineWidth = 0.5;
          cx.stroke();
        }
      }
    }
  }
  
  // Animation loop
  (function anim() {
    cx.clearRect(0, 0, W, H);
    drawLines();
    pts.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(anim);
  })();
};

// ============================================
// NAVIGATION MODULE
// ============================================
/**
 * Initializes navigation scroll effects
 * Adds background on scroll and animates timeline bar
 */
const initNavigation = () => {
  window.addEventListener('scroll', () => {
    // Toggle navigation background
    const nav = document.getElementById('nav');
    if (nav) {
      nav.classList.toggle('sc', scrollY > 40);
    }
    
    // Animate timeline bar in experience section
    const exp = document.getElementById('experience');
    const bar = document.getElementById('tlbar');
    
    if (exp && bar) {
      const tl = exp.querySelector('.tline');
      const tbh = tl.offsetHeight;
      const rect = exp.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (-rect.top + 200) / (rect.height)));
      bar.style.height = (progress * tbh) + 'px';
    }
  });
};

// ============================================
// TYPEWRITER ANIMATION MODULE
// ============================================
/**
 * Initializes typewriter effect for hero section
 * Cycles through different job titles
 */
const initTypewriter = () => {
  const lines = [
    'Senior Laravel Developer',
    'Full Stack PHP Engineer',
    'AI Integration Specialist',
    'Technical Project Lead'
  ];
  
  let lineIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  const tw = document.getElementById('tw');
  if (!tw) return;
  
  function type() {
    const currentLine = lines[lineIndex];
    
    if (!isDeleting) {
      // Typing
      tw.textContent = '> ' + currentLine.slice(0, charIndex + 1);
      charIndex++;
      
      if (charIndex === currentLine.length) {
        isDeleting = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      // Deleting
      tw.textContent = '> ' + currentLine.slice(0, charIndex - 1);
      charIndex--;
      
      if (charIndex === 0) {
        isDeleting = false;
        lineIndex = (lineIndex + 1) % lines.length;
      }
    }
    
    setTimeout(type, isDeleting ? 42 : 85);
  }
  
  setTimeout(type, 1400);
};

// ============================================
// COUNTER ANIMATION MODULE
// ============================================
/**
 * Initializes counter animation for statistics
 * Animates numbers when they come into view
 */
const initCounter = () => {
  /**
   * Animates a counter element from 0 to target value
   * @param {HTMLElement} el - Counter element
   */
  function animateCount(el) {
    const target = parseInt(el.dataset.t);
    if (!target) return;
    
    let current = 0;
    const step = Math.max(1, Math.floor(target / 28));
    
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current;
      
      if (current >= target) {
        clearInterval(interval);
      }
    }, 42);
  }
  
  // Observe when hero card comes into view
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.cn').forEach(animateCount);
        counterObserver.disconnect();
      }
    });
  }, { threshold: 0.5 });
  
  const heroCard = document.getElementById('hcard');
  if (heroCard) {
    counterObserver.observe(heroCard);
  }
};

// ============================================
// SCROLL REVEAL MODULE
// ============================================
/**
 * Initializes scroll reveal animations
 * Elements fade in and slide up when they come into view
 */
const initScrollReveal = () => {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.d || 0);
        setTimeout(() => {
          entry.target.classList.add('on');
        }, delay);
      }
    });
  }, { threshold: 0.1 });
  
  // Add staggered delays to reveal elements
  document.querySelectorAll('.rv').forEach((el, i) => {
    el.dataset.d = (i % 6) * 70;
    revealObserver.observe(el);
  });
  
  // Add staggered delays to grid items
  document.querySelectorAll('.pgrid .pcard').forEach((card, i) => {
    card.style.transitionDelay = `${i * 55}ms`;
  });
  
  document.querySelectorAll('.agrid .acard').forEach((card, i) => {
    card.style.transitionDelay = `${i * 55}ms`;
  });
};

// ============================================
// 3D TILT EFFECT MODULE
// ============================================
/**
 * Initializes 3D tilt effect on cards
 * Cards tilt based on mouse position
 * @param {HTMLElement} el - Element to apply tilt effect to
 * @param {number} intensity - Tilt intensity (default: 7)
 */
function initTiltEffect(el, intensity = 7) {
  if (!el) return;
  
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Apply 3D transform
    el.style.transform = `perspective(700px) rotateY(${xPos * intensity}deg) rotateX(${-yPos * intensity}deg) scale(1.015)`;
    
    // Update glow position
    const glow = el.querySelector('.hcard-glow');
    if (glow) {
      glow.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width * 100) + '%');
      glow.style.setProperty('--my', ((e.clientY - rect.top) / rect.height * 100) + '%');
    }
    
    // Update CSS variables for other effects
    el.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width * 100) + '%');
    el.style.setProperty('--my', ((e.clientY - rect.top) / rect.height * 100) + '%');
  });
  
  // Reset transform on mouse leave
  el.addEventListener('mouseleave', () => {
    el.style.transform = '';
    el.style.transition = 'transform 0.5s ease';
  });
  
  // Fast transition on mouse enter
  el.addEventListener('mouseenter', () => {
    el.style.transition = 'transform 0.15s ease';
  });
}

/**
 * Applies tilt effect to all relevant cards
 */
const applyTiltEffects = () => {
  // Apply to hero card
  const heroCard = document.querySelector('.hcard');
  if (heroCard) {
    initTiltEffect(heroCard, 8);
  }
  
  // Apply to all project cards
  document.querySelectorAll('.pcard').forEach(card => {
    initTiltEffect(card, 5);
  });
};

// ============================================
// FORM HANDLING MODULE
// ============================================
/**
 * Initializes contact form with Formspree integration
 * Handles form submission, validation, and user feedback
 */
const initFormHandler = () => {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnLoading = document.getElementById('btn-loading');
  
  if (!form || !submitBtn) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Show loading state
    submitBtn.disabled = true;
    if (btnText) btnText.style.display = 'none';
    if (btnLoading) btnLoading.style.display = 'inline';
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        // Success state
        submitBtn.style.background = 'var(--tl)';
        submitBtn.style.boxShadow = '0 10px 30px rgba(74,217,176,.3)';
        if (btnLoading) btnLoading.style.display = 'none';
        if (btnText) {
          btnText.style.display = 'inline';
          btnText.textContent = 'Message Sent ✓';
        }
        form.reset();
        
        const statusDiv = document.getElementById('form-status');
        if (statusDiv) statusDiv.style.display = 'none';
      } else {
        let errorMsg = 'Oops! There was a problem submitting your form';
        try {
          const data = await response.json();
          if (Object.hasOwn(data, 'errors')) {
            errorMsg = data.errors.map(error => error.message).join(", ");
          } else if (data.error) {
            errorMsg = data.error;
          }
        } catch (parseError) {}
        throw new Error(errorMsg);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Error state
      submitBtn.style.background = 'var(--pk)';
      submitBtn.style.boxShadow = '0 10px 30px rgba(240,98,146,.3)';
      if (btnLoading) btnLoading.style.display = 'none';
      if (btnText) {
        btnText.style.display = 'inline';
        btnText.textContent = 'Error! Try Again';
      }
      
      const statusDiv = document.getElementById('form-status');
      if (statusDiv) {
        statusDiv.style.display = 'block';
        statusDiv.style.color = 'var(--pk)';
        statusDiv.style.padding = '10px';
        statusDiv.style.borderRadius = '8px';
        statusDiv.style.background = 'rgba(240,98,146,.1)';
        statusDiv.style.border = '1px solid rgba(240,98,146,.2)';
        statusDiv.style.marginTop = '10px';
        statusDiv.style.fontSize = '13px';
        statusDiv.style.textAlign = 'center';
        statusDiv.textContent = error.message;
      }
      
      // Reset button after 3 seconds
      setTimeout(() => {
        submitBtn.style.background = '';
        submitBtn.style.boxShadow = '';
        if (btnText) btnText.textContent = 'Send Message →';
        submitBtn.disabled = false;
      }, 3000);
    }
  });
};

// ============================================
// INITIALIZATION
// ============================================
/**
 * Initializes all modules when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initParticles();
  initNavigation();
  initTypewriter();
  initCounter();
  initScrollReveal();
  applyTiltEffects();
  initFormHandler();
});
