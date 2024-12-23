const allElms = document.querySelectorAll('.navi_1_0_0_history__item');
allElms
    .forEach(elm => {
        elm.addEventListener('click', () => {
            allElms
                .forEach(elm => {
                    elm.classList.remove('active');
                });
            elm.classList.add('active');
        });
    });
