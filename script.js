const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('visible', entry.isIntersecting);
  });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal').forEach((element) => {
  observer.observe(element);
});

const typewriter = document.querySelector('.typewriter');

if (typewriter) {
  const text = typewriter.dataset.text || '';
  let index = 0;
  let started = false;

  const write = () => {
    if (index <= text.length) {
      typewriter.textContent = text.slice(0, index);
      index += 1;
      setTimeout(write, 38);
      return;
    }

    typewriter.classList.add('done');
  };

  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !started) {
        started = true;
        write();
      }
    });
  }, { threshold: 0.45 });

  heroObserver.observe(typewriter);
}
