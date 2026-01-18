// --- BAGIAN 1: PENCARIAN ---
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.building-item');

searchInput.addEventListener('keyup', function(event) {
    const searchText = event.target.value.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector('.card-title').innerText.toLowerCase();
        const location = card.querySelector('.badge').innerText.toLowerCase();

        if (title.includes(searchText) || location.includes(searchText)) {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none'; 
        }
    });
});

// --- BAGIAN 2: PETA DINAMIS (YANG SAYA TAMBAHKAN) ---
const mapButtons = document.querySelectorAll('.btn-peta');
const mapFrame = document.getElementById('mapFrame');
const mapSection = document.getElementById('peta-lokasi');

mapButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        // 1. Ambil link peta dari tombol yang diklik
        const mapUrl = this.getAttribute('data-map');
        
        // 2. Ubah peta di bawah sesuai link tersebut
        mapFrame.src = mapUrl;

        // 3. Scroll layar ke bawah menuju peta
        mapSection.scrollIntoView({ behavior: 'smooth' });
    });
});