function toggleMoreInfo() {
    var more = document.getElementById('more-info');
    var learnMoreBut = document.querySelector('.learn-more');

    if (more.classList.contains('show')) {
        more.classList.remove('show');
        setTimeout(function() {
            more.style.display = 'none'; 
            learnMoreBut.textContent = 'Learn More Information About Pooja';
        }, 400);
    } else {
        more.style.display = 'block'; 
        setTimeout(function() {
            more.classList.add('show');
            learnMoreBut.textContent = 'Hide Information About Pooja'; 
        }, 10); 
    }
}