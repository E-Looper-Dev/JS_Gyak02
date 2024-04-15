document.addEventListener('DOMContentLoaded', function() {
    var bekezdes = document.getElementById('bekezdes');
    var kep = document.getElementById('kep');

    kep.addEventListener('load', function() {
        bekezdes.textContent = 'Betöltött';
    });

    kep.addEventListener('click', function() {
        bekezdes.textContent = 'Rákattintott';
    });
});
