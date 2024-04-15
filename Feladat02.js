document.addEventListener("DOMContentLoaded", function() {
    var mezok = document.querySelectorAll('input');

    mezok.forEach(function(mezo) {
        mezo.addEventListener('focus', function() {
            mezo.style.color = 'green';
        });

        mezo.addEventListener('blur', function() {
            mezo.style.color = 'black';
        });
    });
});
