    const questionForm = document.getElementById('questionForm');
    if (questionForm) {
        questionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your question! We will respond shortly.');
            e.target.reset();
        });
    }
});
