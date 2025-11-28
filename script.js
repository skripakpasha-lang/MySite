// -----------------------------
// 1. Згортаюче меню при прокрутці
// -----------------------------
const header = document.querySelector('header');
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if(currentScroll > lastScroll && currentScroll > 100){
        header.style.top = '-100px'; // ховаємо при скролі вниз
    } else {
        header.style.top = '0'; // показуємо при скролі вгору
    }
    lastScroll = currentScroll;
});

// -----------------------------
// 2. Галерея / Модальне вікно
// -----------------------------
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalClose = document.getElementById('modal-close');

if(modal){
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = img.src;
        });
    });

    modalClose.addEventListener('click', () => modal.style.display = 'none');
    modal.addEventListener('click', e => { if(e.target === modal) modal.style.display = 'none'; });
}

// -----------------------------
// 3. Пошук по сторінці
// -----------------------------
function searchContent() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const elements = document.querySelectorAll('.searchable'); // елементи, які шукаємо
    elements.forEach(el => {
        if(el.textContent.toLowerCase().includes(query)){
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    });
}

// -----------------------------
// 4. Валідація форми реєстрації
// -----------------------------
function validateForm(formId){
    const form = document.getElementById(formId);
    if(!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // не відправляти на сервер
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        if(name.trim() === '' || email.trim() === ''){
            alert('Будь ласка, заповніть всі поля');
            return;
        }
        if(!email.includes('@')){
            alert('Введіть правильний email');
            return;
        }
        alert('Форма успішно відправлена!');
        form.reset();
    });
}

// Виклик для форми реєстрації (id="register-form")
validateForm('register-form');

// -----------------------------
// 5. Лічильник відвідувачів (локально для тесту)
// -----------------------------
let visits = localStorage.getItem('visits') ? parseInt(localStorage.getItem('visits')) : 0;
visits++;
localStorage.setItem('visits', visits);
const counter = document.getElementById('visit-counter');
if(counter){
    counter.textContent = `Ви відвідали цей сайт: ${visits} разів`;
}

// -----------------------------
// 6. Додаткові функції
// -----------------------------
// Можна додавати сюди анімації кнопок, прокрутку до секцій, відтворення аудіо/відео тощо.
