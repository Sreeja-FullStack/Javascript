document.addEventListener('DOMContentLoaded', () => {
    // Move underline effect
    const nav = document.querySelector('.nav-links');
    const links = nav.querySelectorAll('ul a');
    const underline = nav.querySelector('.underline');

    links.forEach(link => {
        link.addEventListener('click', function () {
            const width = this.offsetWidth;
            const left = this.offsetLeft;

            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            underline.style.width = `${width}px`;
            underline.style.left = `${left}px`;
        });
    });

    // Mobile menu toggle
    const hamBurger = document.querySelector('.ham-burger');
    hamBurger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamBurger.classList.toggle('active');
    });

    // Sticky header on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // SVG Circle chart animation on scroll
    const circlecharts = document.querySelectorAll('.circlechart');
    const makeSvg = (percentage, innerText = "") => {
        const absPercentage = Math.abs(percentage);
        const percentageStr = percentage.toString();
        return `
            <svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">
                <circle class="circle-chart__background" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                <circle class="circle-chart__circle" stroke-dasharray="${absPercentage},100" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                <g class="circle-chart__info">
                    <text class="circle-chart__percent" x="17.9" y="15.5">${percentageStr}%</text>
                    ${innerText ? `<text class="circle-chart__subline" x="16.91549431" y="22">${innerText}</text>` : ""}
                </g>
            </svg>
        `;
    };

    circlecharts.forEach(circlechart => {
        const percentage = circlechart.dataset.percentage;
        const innerText = circlechart.innerText;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    circlechart.innerHTML = makeSvg(percentage, innerText);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(circlechart);
    });

   // Portfolio filtering
   const portfolioItems = document.querySelector(".portfolio-items");
   const portfolioMenuItems = document.querySelectorAll(".portfolio-menu ul li");

   portfolioMenuItems.forEach(function(item) {
       item.addEventListener("click", function() {
           portfolioMenuItems.forEach(item => item.classList.remove("active"));
           item.classList.add("active");
           const filter = item.getAttribute("data-filter");

           const items = portfolioItems.querySelectorAll(".item");
           items.forEach(function(item) {
               if (filter === "*" || item.classList.contains(filter.slice(1))) {
                   item.style.display = "block";
               } else {
                   item.style.display = "none";
               }
           });
       });
   });

    // Form Validation (basic example)
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;
        const formFields = form.querySelectorAll('input, textarea');

        formFields.forEach(field => {
            if (field.value.trim() === '') {
                valid = false;
                field.classList.add('error');
            } else {
                field.classList.remove('error');
            }
        });

        if (valid) {
            alert('Form submitted successfully');
        }
    });

    // Theme color settings
    const themeSettingsToggle = document.querySelector('.theme-settings .toggle-btn');
    const colorBoxes = document.querySelectorAll('.color-box');
    const colorPicker = document.querySelector('#color-picker');
    const darkModeToggle = document.querySelector('#dark-mode');

    themeSettingsToggle.addEventListener('click', () => {
        document.querySelector('.theme-settings').classList.toggle('active');
    });

    colorBoxes.forEach(box => {
        box.addEventListener('click', function () {
            colorBoxes.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const color = getComputedStyle(this).backgroundColor;
            document.documentElement.style.setProperty('--primary-color', color);
        });
    });

    colorPicker.addEventListener('input', () => {
        const color = colorPicker.value;
        document.documentElement.style.setProperty('--primary-color', color);
    });

    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    });
});
