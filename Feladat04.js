document.addEventListener('DOMContentLoaded', function() {
    var bekezdes = document.getElementById('bekezdes');
    var beviteliMezo = document.getElementById('beviteliMezo');

    beviteliMezo.addEventListener('input', function() {
        bekezdes.textContent = beviteliMezo.value;
    });
});
