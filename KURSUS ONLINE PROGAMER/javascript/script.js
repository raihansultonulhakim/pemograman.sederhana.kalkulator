function showAreaForm() {
    document.getElementById('area-form').style.display = 'block';
    document.getElementById('perimeter-form').style.display = 'none';
}

function showPerimeterForm() {
    document.getElementById('area-form').style.display = 'none';
    document.getElementById('perimeter-form').style.display = 'block';
}

document.getElementById('areaCalculator').addEventListener('submit', function (e) {
    e.preventDefault();
    const alas = document.getElementById('alas').value;
    const tinggi = document.getElementById('tinggi').value;
    const luas = 0.5 * alas * tinggi;
    document.getElementById('areaResult').innerHTML = `L = ${luas}`;
});

document.getElementById('perimeterCalculator').addEventListener('submit', function (e) {
    e.preventDefault();
    const sisi1 = document.getElementById('sisi1').value;
    const sisi2 = document.getElementById('sisi2').value;
    const sisi3 = document.getElementById('sisi3').value;
    const keliling = parseFloat(sisi1) + parseFloat(sisi2) + parseFloat(sisi3);
    document.getElementById('perimeterResult').innerHTML = `K = ${keliling}`;
});

function resetArea() {
    document.getElementById('areaCalculator').reset();
    document.getElementById('areaResult').innerHTML = '';
}

function resetPerimeter() {
    document.getElementById('perimeterCalculator').reset();
    document.getElementById('perimeterResult').innerHTML = '';
}
