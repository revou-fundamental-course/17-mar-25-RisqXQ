function hitungLuas() {
    const sisi = parseFloat(document.getElementById('sisi-luas').value);
    const resultDiv = document.getElementById('hasil-luas');
    
    if (!validateInput(sisi)) {
        resultDiv.innerHTML = "<p class='error'>Masukkan angka positif yang valid!</p>";
        resultDiv.style.display = 'block';
        return;
    }

    const luas = sisi * sisi;
    resultDiv.innerHTML = `
        <h3>Hasil Perhitungan Luas</h3>
        <div class="result-content">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Regular_quadrilateral.svg/250px-Regular_quadrilateral.svg.png" alt="Formula Luas" style="width: 180px; margin: 10px 0;">
            <p>Rumus: L = S × S</p>
            <p>Perhitungan: L = ${sisi} × ${sisi}</p>
            <p class="hasil-angka">Luas = ${luas} cm²</p>
        </div>
    `;
    resultDiv.style.display = 'block';
}

function hitungKeliling() {
    const sisi = parseFloat(document.getElementById('sisi-keliling').value);
    const resultDiv = document.getElementById('hasil-keliling');
    
    if (!validateInput(sisi)) {
        resultDiv.innerHTML = "<p class='error'>Masukkan angka positif yang valid!</p>";
        resultDiv.style.display = 'block';
        return;
    }

    const keliling = 4 * sisi;
    resultDiv.innerHTML = `
        <h3>Hasil Perhitungan Keliling</h3>
        <div class="result-content">
            <img src="https://yos3prens.wordpress.com/wp-content/uploads/2012/10/persegi-pqrs.png?w=640" alt="Formula Keliling" style="width: 180px; margin: 10px 0;">
            <p>Rumus: K = 4 × S</p>
            <p>Perhitungan: K = 4 × ${sisi}</p>
            <p class="hasil-angka">Keliling = ${keliling} cm</p>
        </div>
    `;
    resultDiv.style.display = 'block';
}

function validateInput(value) {
    return !isNaN(value) && value > 0;
}