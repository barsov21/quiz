document.addEventListener("DOMContentLoaded", () => {
// Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          overlay = document.querySelector('.overlay');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });
          
    function openModal() {
        overlay.classList.add('show');
        overlay.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }


    function closeModal() {
        overlay.classList.add('hide');
        overlay.classList.remove('show');
        document.body.style.overflow = '';
    }

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay || e.target.getAttribute('data-close') == "") {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code == "Escape" && overlay.classList.contains('show')) {
            closeModal();
        }
    });

    const menu = document.querySelector('.header__nav-menu'),
          menuItem = document.querySelectorAll('.header__nav-item'),
          humburger = document.querySelector('.humburger');

    humburger.addEventListener('click', () => {
        humburger.classList.toggle('humburger_active');
        menu.classList.toggle('header__nav-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            humburger.classList.toggle('humburger_active');
            menu.classList.toggle('header__nav-menu_active');
        });
    });

    const btns = document.querySelectorAll('.quiz-card__text');
    const arr = [];

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const elem = e.target.innerHTML;
            arr.push(elem);
            console.log(arr);
        });
    });
});