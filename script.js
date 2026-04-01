let noMoved = false;

function mulai() {
  const nama = document.getElementById('nama-input').value.trim() || 'kamu';

  document.getElementById('greeting').textContent = 'Alo My Princess, ';
  document.getElementById('setup-view').style.display = 'none';
  document.getElementById('main-view').style.display = 'block';
}

function yesClick() {
  document.getElementById('ask-card').style.display = 'none';
  document.getElementById('yes-card').style.display = 'block';

  setInterval(createLove, 300);
}

function noClick() {
  const btn = document.getElementById('no-btn');

  noMoved = true;

  const top = Math.floor(Math.random() * 80) + 10;
  const left = Math.floor(Math.random() * 80) + 10;

  btn.style.position = 'fixed';
  btn.style.top = top + '%';
  btn.style.left = left + '%';
  btn.style.zIndex = 9999;
}

// Ambil nama dari URL
const params = new URLSearchParams(window.location.search);
const namaParam = params.get('nama');

if (namaParam) {
  document.getElementById('nama-input').value = namaParam;
  mulai();
}

function mulai() {
  const namaInput = document.getElementById('nama-input').value.trim();
  const namaBenar = "Putri Indah Cahyani";
  
  if (namaInput !== namaBenar) {
    alert("Your name is incorrect!");
    return;
  }

  document.getElementById('greeting').textContent = 'Alo My Princess, ';
  document.getElementById('setup-view').style.display = 'none';
  document.getElementById('main-view').style.display = 'block';
}

function createLove() {
  const container = document.getElementById('love-container');

  const love = document.createElement('div');
  love.classList.add('love-text');
  love.innerText = 'I love u <3';

  love.style.left = Math.random() * 100 + 'vw';
  love.style.top = Math.random() * 100 + 'vh';
  love.style.fontSize = (Math.random() * 10 + 16) + 'px';

  container.appendChild(love);

  setTimeout(() => {
    love.remove();
  }, 3000);
}