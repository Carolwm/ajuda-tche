var btVerMais = document.querySelectorAll('.ver-mais');

btVerMais.forEach(function(button) {
    button.addEventListener('click', function() {
        var link = button.getAttribute('data-link');
        window.location.href = link;
    });
});
