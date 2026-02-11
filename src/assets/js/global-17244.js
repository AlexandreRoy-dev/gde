(function() {
  const init = () => {
    const contactForms = document.querySelectorAll('.contact-form');
    contactForms.forEach(form => {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const button = form.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        button.textContent = 'SENDING...';
        button.disabled = true;
        setTimeout(() => {
          button.textContent = 'MESSAGE SENT!';
          button.classList.add('bg-green-500');
          button.classList.remove('bg-amber-500');
          form.reset();
          setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            button.classList.remove('bg-green-500');
            button.classList.add('bg-amber-500');
          }, 3000);
        }, 1500);
      });
    });

    const mobileToggles = document.querySelectorAll('.mobile-menu-toggle');
    mobileToggles.forEach(toggle => {
      toggle.addEventListener('click', function() {
        const nav = this.closest('nav');
        let mobileMenu = nav.querySelector('.mobile-menu');
        if (mobileMenu) {
          mobileMenu.remove();
        } else {
          mobileMenu = document.createElement('div');
          mobileMenu.className = 'mobile-menu md:hidden bg-zinc-900 border-t border-zinc-800 px-6 py-4';
          mobileMenu.innerHTML = '<ul class="space-y-4"><li><a href="#about" class="block text-zinc-400 hover:text-amber-500 transition-colors text-sm uppercase tracking-widest">About</a></li><li><a href="#services" class="block text-zinc-400 hover:text-amber-500 transition-colors text-sm uppercase tracking-widest">Services</a></li><li><a href="#testimonials" class="block text-zinc-400 hover:text-amber-500 transition-colors text-sm uppercase tracking-widest">Testimonials</a></li><li><a href="#contact" class="block bg-amber-500 text-zinc-950 px-6 py-2 text-sm uppercase tracking-widest font-semibold text-center">Contact</a></li></ul>';
          nav.appendChild(mobileMenu);
        }
      });
    });

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            const mobileMenus = document.querySelectorAll('.mobile-menu');
            mobileMenus.forEach(menu => menu.remove());
          }
        }
      });
    });
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();