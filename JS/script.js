localStorage.removeItem('visited');


function formatAngka(num) {
    if (isNaN(num)) return "0";
    return num % 1 === 0 ? 
        num.toString() : 
        num.toLocaleString('id-ID', { 
            maximumFractionDigits: 2,
            minimumFractionDigits: 0,
            useGrouping: false
        });
}


const welcomeModal = document.querySelector('.welcome-modal');
const modalCloseBtns = document.querySelectorAll('.modal-close, .close-modal');

function showWelcomeModal() {
    if (!localStorage.getItem('visited')) {
        welcomeModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeWelcomeModal() {
    welcomeModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    localStorage.setItem('visited', 'true');
}

modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', closeWelcomeModal);
});


function hitungLuas() {
    const sisi = parseFloat(document.getElementById('sisi-luas').value);
    const hasilDiv = document.getElementById('hasil-luas');
    
    hasilDiv.style.display = 'none';

    if (!validasiInput(sisi)) {
        tampilkanError(hasilDiv, "Masukkan angka valid yahh, mul 0!");
        return;
    }

    const luas = formatAngka(sisi * sisi);
    hasilDiv.innerHTML = `
        <h3>Hasil Luas Persegi</h3>
        <div class="result-content">
            <img src="https://i.postimg.cc/4y5W3k0T/formula-luas.png" alt="Rumus">
            <div>
                <p>L = ${sisi} × ${sisi}</p>
                <p class="hasil-angka">${luas}<span class="unit"> cm²</span></p>
            </div>
        </div>
    `;
    hasilDiv.style.display = 'block';
}

function hitungKeliling() {
    const sisi = parseFloat(document.getElementById('sisi-keliling').value);
    const hasilDiv = document.getElementById('hasil-keliling');
    
    hasilDiv.style.display = 'none';

    if (!validasiInput(sisi)) {
        tampilkanError(hasilDiv, "Masukkan angka yang valid yaah, mulai dari 0.");
        return;
    }

    const keliling = formatAngka(4 * sisi);
    hasilDiv.innerHTML = `
        <h3>Hasil Keliling Persegi</h3>
        <div class="result-content">
            <img src="https://i.postimg.cc/TPt6Mh4W/formula-keliling.png" alt="Rumus">
            <div>
                <p>K = 4 × ${sisi}</p>
                <p class="hasil-angka">${keliling}<span class="unit"> cm</span></p>
            </div>
        </div>
    `;
    hasilDiv.style.display = 'block';
}


function validasiInput(nilai) {
    return !isNaN(nilai) && nilai > 0;
}

function tampilkanError(element, pesan) {
    element.innerHTML = `<p class="error">${pesan}</p>`;
    element.style.display = 'block';
    element.style.animation = 'shake 0.4s ease';
    setTimeout(() => element.style.animation = '', 400);
}


function resetLuas() {
    document.getElementById('sisi-luas').value = '';
    document.getElementById('hasil-luas').style.display = 'none';
}

function resetKeliling() {
    document.getElementById('sisi-keliling').value = '';
    document.getElementById('hasil-keliling').style.display = 'none';
}


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(showWelcomeModal, 500);
    
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);

    let selectedRating = 0;

    document.querySelectorAll('.star').forEach((star, index, stars) => {
        star.addEventListener('click', () => {
            selectedRating = parseInt(star.getAttribute('data-value'));
            
            stars.forEach((s, i) => {
                if (i < selectedRating) {
                    s.classList.add('selected');
                } else {
                    s.classList.remove('selected');
                }
            });
        });
    });

    function kirimFeedback() {
        const feedback = document.getElementById('feedback').value;
        const rating = selectedRating; 
    
        if (rating === 0) {
            alert('Silakan pilih rating terlebih dahulu!');
            return;
        }
    
        if (feedback.trim() === '') {
            alert('Silakan masukkan kritik dan saran Anda!');
            return;
        }
    
        
        const payload = {
            content: `**Feedback Baru**\n\n**Rating:** ${rating}/5\n**Kritik dan Saran:**\n${feedback}`
        };
    
        
        fetch("https://discord.com/api/webhooks/1354294224991948820/kKh28jTfuBWNsvtmB9u4vfUh6ZwnWRmYwZYmdg3X24wVZ3gCGkuXjVYTYnS1jRepM8PB", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(response => {
            if (response.ok) {
                alert('Feedback berhasil dikirim! Terima kasih atas masukan Anda.');
                document.getElementById('feedback').value = ''; 
                document.querySelectorAll('.star').forEach(star => star.classList.remove('selected'));
                selectedRating = 0;
            } else {
                alert('Gagal mengirim feedback. Silakan coba lagi nanti.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Terjadi kesalahan saat mengirim feedback.');
        });
    }

    document.getElementById('kirim-feedback').addEventListener('click', kirimFeedback);
});