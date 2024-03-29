const hamburger = document.getElementById('hamburger');
const cross = document.getElementById('cross');
const sidebar = document.getElementById('sidebar');

function toggler() {
    sidebar.classList.toggle('hidden');
}

hamburger.addEventListener('click', toggler);
cross.addEventListener('click', toggler);
