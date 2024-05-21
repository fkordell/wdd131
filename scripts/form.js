document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            id: 'fc-1888',
            name: "flux capacitor",
            averagerating: 4.5
        },
        {
            id: 'fc-2050',
            name: "power laces",
            averagerating: 4.7
        },
        {
            id: 'fs-1987',
            name: "time circuits",
            averagerating: 3.5
        },
        {
            id: 'ac-2000',
            name: "low voltage reactor",
            averagerating: 3.9
        },
        {
            id: 'jj-1969',
            name: "warp equalizer",
            averagerating: 5.0
        }
    ];

    const productSelect = document.getElementById('productName');
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.name;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;

    window.handleFormSubmit = function() {
        let reviewCounter = localStorage.getItem('reviewCounter');
        if (reviewCounter === null) {
            reviewCounter = 0;
        } else {
            reviewCounter = parseInt(reviewCounter, 10);
        }
        reviewCounter++;
        localStorage.setItem('reviewCounter', reviewCounter);
    };

    if (window.location.pathname.includes('review.html')) {
        let reviewCounter = localStorage.getItem('reviewCounter');
        if (reviewCounter === null) {
            reviewCounter = 0;
        } else {
            reviewCounter = parseInt(reviewCounter, 10);
        }
        document.getElementById('reviewCounter').textContent = reviewCounter;

        document.getElementById('currentyear').textContent = new Date().getFullYear();
        document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;
    }
});
