document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.category-btn');
    const articles = document.querySelectorAll('.article-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {

            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            button.classList.add('active');
            
            const category = button.dataset.category;
            
            articles.forEach(article => {
                const articleCategories = article.dataset.categories.split(' ');
                if (category === 'all' || articleCategories.includes(category)) {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
            });
        });
    });
});