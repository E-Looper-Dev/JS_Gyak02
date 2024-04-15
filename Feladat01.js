var gomb = document.getElementById('gomb');

    
document.addEventListener('DOMContentLoaded', function() {
    var gomb = document.getElementById('gomb');
    gomb.addEventListener('mouseover', function() {
        gomb.textContent = 'Sikerült';
    });
});