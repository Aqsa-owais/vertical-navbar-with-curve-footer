document.addEventListener('DOMContentLoaded', () => {
    const socialDropdownBtn = document.getElementById('socialDropdownBtn');
    const socialDropdown = document.getElementById('socialDropdown');

    if (socialDropdownBtn && socialDropdown) {
        socialDropdownBtn.addEventListener('click', (event: Event) => {
            event.stopPropagation();
            socialDropdown.classList.toggle('show');
        });

        document.addEventListener('click', (event: Event) => {
            if (!socialDropdown.contains(event.target as Node)) {
                socialDropdown.classList.remove('show');
            }
        });
    }
});