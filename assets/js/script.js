const container = document.getElementById('particles');
for (let i = 0; i < 24; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.setProperty('--x', Math.random() * 100 + '%');
  p.style.setProperty('--dur', (6 + Math.random() * 10) + 's');
  p.style.setProperty('--delay', (Math.random() * 8) + 's');
  container.appendChild(p);
}
