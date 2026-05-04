document.addEventListener('DOMContentLoaded', () => {

    const subForm = document.getElementById('subForm');
    if (subForm) {
        subForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! Skeif Botsogo will contact you shortly to confirm your order.');
        });
    }

    const questionForm = document.getElementById('questionForm');
    if (questionForm) {
        questionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your question! We will respond shortly.');
            e.target.reset();
        });
    }
});
