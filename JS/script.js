function hitungLuas() {
    const sisi = parseFloat(document.getElementById('sisi-luas').value);
    const resultDiv = document.getElementById('hasil-luas');
    
    if (!validateInput(sisi)) {
        resultDiv.innerHTML = "Masukkan angka positif!";
        resultDiv.style.display = 'block';
        return;
    }

    const luas = sisi * sisi;
    resultDiv.innerHTML = `
        <h3>Hasil:</h3>
        <p>Rumus: L = S × S</p>
        <p>L = ${sisi} × ${sisi}</p>
        <p>L = ${luas} cm²</p>
    `;
    resultDiv.style.display = 'block';
}

function hitungKeliling() {
    const sisi = parseFloat(document.getElementById('sisi-keliling').value);
    const resultDiv = document.getElementById('hasil-keliling');
    
    if (!validateInput(sisi)) {
        resultDiv.innerHTML = "Masukkan angka positif!";
        resultDiv.style.display = 'block';
        return;
    }

    const keliling = 4 * sisi;
    resultDiv.innerHTML = `
        <h3>Hasil:</h3>
        <p>Rumus: K = 4 × S</p>
        <p>K = 4 × ${sisi}</p>
        <p>K = ${keliling} cm</p>
    `;
    resultDiv.style.display = 'block';
}

function validateInput(value) {
    return !isNaN(value) && value > 0;
}