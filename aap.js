document.addEventListener('DOMContentLoaded', function () {
    var socialDropdownBtn = document.getElementById('socialDropdownBtn');
    var socialDropdown = document.getElementById('socialDropdown');
    if (socialDropdownBtn && socialDropdown) {
        socialDropdownBtn.addEventListener('click', function (event) {
            event.stopPropagation();
            socialDropdown.classList.toggle('show');
        });
        document.addEventListener('click', function (event) {
            if (!socialDropdown.contains(event.target)) {
                socialDropdown.classList.remove('show');
            }
        });
    }
});
