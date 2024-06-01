// document.addEventListener('DOMContentLoaded', () => {
//     function getRandomElements(arr, count) {
//         const shuffled = arr.slice(0);
//         let i = arr.length;
//         const min = i - count;
//         let temp, index;

//         while (i-- > min) {
//             index = Math.floor((i + 1) * Math.random());
//             temp = shuffled[index];
//             shuffled[index] = shuffled[i];
//             shuffled[i] = temp;
//         }

//         return shuffled.slice(min);
//     }

//     function getUniqueValues(data, key) {
//         return [...new Set(data.map(item => key.split('.').reduce((o, k) => o && o[k], item)))];
//     }

//     function createFilterOptions(data) {
//         const locationFilter = document.getElementById('filter-location');
//         const cuisineFilter = document.getElementById('filter-cuisine');
//         const priceFilter = document.getElementById('filter-price');

//         const locations = getUniqueValues(data.restaurants, 'location.city');
//         const cuisines = getUniqueValues(data.restaurants, 'cuisine');
//         const prices = getUniqueValues(data.restaurants, 'price_range');

//         locations.forEach(location => {
//             const option = document.createElement('option');
//             option.value = location;
//             option.textContent = location;
//             locationFilter.appendChild(option);
//         });

//         cuisines.forEach(cuisine => {
//             const option = document.createElement('option');
//             option.value = cuisine;
//             option.textContent = cuisine;
//             cuisineFilter.appendChild(option);
//         });

//         prices.forEach(price => {
//             const option = document.createElement('option');
//             option.value = price;
//             option.textContent = price;
//             priceFilter.appendChild(option);
//         });
//     }

//     function displayRestaurants(data) {
//         const restaurantListings = document.getElementById('restaurant-listings');
//         restaurantListings.innerHTML = ''; 

//         data.forEach(restaurant => {
//             const card = document.createElement('div');
//             card.classList.add('card');
//             card.innerHTML = `
//                 <div class="card-content">
//                     <h3>${restaurant.name}</h3>
//                     <p>Location: ${restaurant.location.city}</p>
//                     <p>Phone: ${restaurant.phone}</p>
//                     <button class="details-button" data-name="${restaurant.name}">View Details</button>
//                 </div>
//             `;
//             restaurantListings.appendChild(card);

//             card.querySelector('.details-button').addEventListener('click', () => {
//                 window.location.href = `details.html?name=${encodeURIComponent(restaurant.name)}`;
//             });
//         });
//     }

//     function displayFeaturedRestaurants(data) {
//         const featuredRestaurants = document.getElementById('featured-restaurants');
//         featuredRestaurants.innerHTML = ''; 

//         data.forEach(restaurant => {
//             const card = document.createElement('div');
//             card.classList.add('card');
//             card.innerHTML = `
//                 <div class="card-content">
//                     <h3>${restaurant.name}</h3>
//                     <p>Location: ${restaurant.location.city}</p>
//                     <p>Phone: ${restaurant.phone}</p>
//                     <button class="details-button" data-name="${restaurant.name}">View Details</button>
//                 </div>
//             `;
//             featuredRestaurants.appendChild(card);

//             card.querySelector('.details-button').addEventListener('click', () => {
//                 window.location.href = `details.html?name=${encodeURIComponent(restaurant.name)}`;
//             });
//         });
//     }

//     function filterRestaurants(data) {
//         const selectedLocation = document.getElementById('filter-location').value;
//         const selectedCuisine = document.getElementById('filter-cuisine').value;
//         const selectedPrice = document.getElementById('filter-price').value;

//         let filteredData = data.restaurants;

//         if (selectedLocation) {
//             filteredData = filteredData.filter(restaurant => restaurant.location.city === selectedLocation);
//         }

//         if (selectedCuisine) {
//             filteredData = filteredData.filter(restaurant => restaurant.cuisine === selectedCuisine);
//         }

//         if (selectedPrice) {
//             filteredData = filteredData.filter(restaurant => restaurant.price_range === selectedPrice);
//         }

//         displayRestaurants(filteredData);
//     }

//     fetch('restaurant.json')
//         .then(response => response.json())
//         .then(data => {
//             const restaurantListings = document.getElementById('restaurant-listings');
//             if (restaurantListings) {
//                 createFilterOptions(data);
//                 displayRestaurants(data.restaurants);

//                 document.getElementById('filter-location').addEventListener('change', () => filterRestaurants(data));
//                 document.getElementById('filter-cuisine').addEventListener('change', () => filterRestaurants(data));
//                 document.getElementById('filter-price').addEventListener('change', () => filterRestaurants(data));
//             }

//             const featuredRestaurants = document.getElementById('featured-restaurants');
//             if (featuredRestaurants) {
//                 const featuredData = getRandomElements(data.restaurants, 4);
//                 displayFeaturedRestaurants(featuredData);
//             }

//             const params = new URLSearchParams(window.location.search);
//             const restaurantName = params.get('name');

//             if (restaurantName) {
//                 const restaurant = data.restaurants.find(rest => rest.name === restaurantName);
//                 if (restaurant) {
//                     displayRestaurantDetails(restaurant);
//                     displayPreviousReviews(restaurant.name); // Display previous reviews on page load
//                 } else {
//                     document.getElementById('restaurant-details').innerHTML = '<p>Restaurant not found.</p>';
//                 }
//             }

//             function displayRestaurantDetails(restaurant) {
//                 const restaurantDetails = document.getElementById('restaurant-details');
//                 if (restaurantDetails) {
//                     restaurantDetails.innerHTML = `
//                         <h2>${restaurant.name}</h2>
//                         <p><strong>Location:</strong> ${restaurant.location.street}, ${restaurant.location.city}, ${restaurant.location.state}</p>
//                         <p><strong>Phone:</strong> ${restaurant.phone}</p>
//                         <p><strong>Price Range:</strong> ${restaurant.price_range}</p>
//                         <p><strong>Cuisine:</strong> ${restaurant.cuisine}</p>
//                         <p><strong>Type:</strong> ${restaurant.type}</p>
//                         <p><strong>Rating:</strong> ${restaurant.rating}</p>
//                     `;
//                 }
//             }
//         })
//         .catch(error => console.error('Error fetching data:', error));

//     const navigateButton = document.getElementById('listings-button');
//     if (navigateButton) {
//         navigateButton.addEventListener('click', () => {
//             window.location.href = './listings.html'; 
//         });
//     }

//     const hamburger = document.getElementById('hamburger-menu');
//     const navLinks = document.getElementById('nav-links');

//     hamburger.addEventListener('click', () => {
//         navLinks.classList.toggle('show');
//         hamburger.classList.toggle('open');
//     });

//     document.getElementById('currentyear').textContent = new Date().getFullYear();
//     document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;


//     function showModal() {
//         const modal = document.getElementById("review-modal");
//         const span = document.getElementsByClassName("close")[0];
//         modal.style.display = "block";

//         span.onclick = function() {
//             modal.style.display = "none";
//         }

//         window.onclick = function(event) {
//             if (event.target == modal) {
//                 modal.style.display = "none";
//             }
//         }
//     }


//     function storeReview(restaurantName, review) {
//         let reviews = JSON.parse(localStorage.getItem(restaurantName)) || [];
//         reviews.push(review);
//         localStorage.setItem(restaurantName, JSON.stringify(reviews));
//     }

  
//     function displayPreviousReviews(restaurantName) {
//         const reviewsContainer = document.getElementById('previous-reviews');
//         reviewsContainer.innerHTML = '';

//         let reviews = JSON.parse(localStorage.getItem(restaurantName)) || [];

//         if (reviews.length === 0) {
//             reviewsContainer.innerHTML = '<p>No reviews yet.</p>';
//             return;
//         }

//         reviews.forEach(review => {
//             const reviewDiv = document.createElement('div');
//             reviewDiv.classList.add('review');
//             reviewDiv.innerHTML = `
//                 <p><strong>${review.name}</strong></p>
//                 <p>${review.text}</p>
//                 <p>Rating: ${review.rating}</p>
//             `;
//             reviewsContainer.appendChild(reviewDiv);
//         });
//     }


//     const reviewForm = document.getElementById('review-form');
//     if (reviewForm) {
//         reviewForm.addEventListener('submit', function(event) {
//             event.preventDefault();

//             const restaurantName = document.getElementById('review-restaurant').value;
//             const review = {
//                 name: document.getElementById('review-name').value,
//                 text: document.getElementById('review-text').value,
//                 rating: document.getElementById('review-rating').value
//             };

//             storeReview(restaurantName, review);
//             showModal();
//             reviewForm.reset(); 
//         });
//     }


//     const viewReviewsButton = document.getElementById('view-reviews-button');
//     if (viewReviewsButton) {
//         viewReviewsButton.addEventListener('click', function() {
//             const restaurantName = getQueryParameter('name') || document.getElementById('review-restaurant').value;
//             displayPreviousReviews(restaurantName);
//         });
//     }


//     function getQueryParameter(name) {
//         const urlParams = new URLSearchParams(window.location.search);
//         return urlParams.get(name);
//     }
// });


document.addEventListener('DOMContentLoaded', () => {
    function getRandomElements(arr, count) {
        const shuffled = arr.slice(0);
        let i = arr.length;
        const min = i - count;
        let temp, index;

        while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }

        return shuffled.slice(min);
    }

    function getUniqueValues(data, key) {
        return [...new Set(data.map(item => key.split('.').reduce((o, k) => o && o[k], item)))];
    }

    function createFilterOptions(data) {
        const locationFilter = document.getElementById('filter-location');
        const cuisineFilter = document.getElementById('filter-cuisine');
        const priceFilter = document.getElementById('filter-price');

        const locations = getUniqueValues(data.restaurants, 'location.city');
        const cuisines = getUniqueValues(data.restaurants, 'cuisine');
        const prices = getUniqueValues(data.restaurants, 'price_range');

        locations.forEach(location => {
            const option = document.createElement('option');
            option.value = location;
            option.textContent = location;
            locationFilter.appendChild(option);
        });

        cuisines.forEach(cuisine => {
            const option = document.createElement('option');
            option.value = cuisine;
            option.textContent = cuisine;
            cuisineFilter.appendChild(option);
        });

        prices.forEach(price => {
            const option = document.createElement('option');
            option.value = price;
            option.textContent = price;
            priceFilter.appendChild(option);
        });
    }

    function displayRestaurants(data) {
        const restaurantListings = document.getElementById('restaurant-listings');
        restaurantListings.innerHTML = ''; 

        data.forEach(restaurant => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <div class="card-content">
                    <h3>${restaurant.name}</h3>
                    <p>Location: ${restaurant.location.city}</p>
                    <p>Phone: ${restaurant.phone}</p>
                    <button class="details-button" data-name="${restaurant.name}">View Details</button>
                </div>
            `;
            restaurantListings.appendChild(card);

            card.querySelector('.details-button').addEventListener('click', () => {
                window.location.href = `details.html?name=${encodeURIComponent(restaurant.name)}`;
            });
        });
    }

    function displayFeaturedRestaurants(data) {
        const featuredRestaurants = document.getElementById('featured-restaurants');
        featuredRestaurants.innerHTML = ''; 

        data.forEach(restaurant => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <div class="card-content">
                    <h3>${restaurant.name}</h3>
                    <p>Location: ${restaurant.location.city}</p>
                    <p>Phone: ${restaurant.phone}</p>
                    <button class="details-button" data-name="${restaurant.name}">View Details</button>
                </div>
            `;
            featuredRestaurants.appendChild(card);

            card.querySelector('.details-button').addEventListener('click', () => {
                window.location.href = `details.html?name=${encodeURIComponent(restaurant.name)}`;
            });
        });
    }

    function filterRestaurants(data) {
        const selectedLocation = document.getElementById('filter-location').value;
        const selectedCuisine = document.getElementById('filter-cuisine').value;
        const selectedPrice = document.getElementById('filter-price').value;

        let filteredData = data.restaurants;

        if (selectedLocation) {
            filteredData = filteredData.filter(restaurant => restaurant.location.city === selectedLocation);
        }

        if (selectedCuisine) {
            filteredData = filteredData.filter(restaurant => restaurant.cuisine === selectedCuisine);
        }

        if (selectedPrice) {
            filteredData = filteredData.filter(restaurant => restaurant.price_range === selectedPrice);
        }

        displayRestaurants(filteredData);
    }

    fetch('restaurant.json')
        .then(response => response.json())
        .then(data => {
            const restaurantListings = document.getElementById('restaurant-listings');
            if (restaurantListings) {
                createFilterOptions(data);
                displayRestaurants(data.restaurants);

                document.getElementById('filter-location').addEventListener('change', () => filterRestaurants(data));
                document.getElementById('filter-cuisine').addEventListener('change', () => filterRestaurants(data));
                document.getElementById('filter-price').addEventListener('change', () => filterRestaurants(data));
            }

            const featuredRestaurants = document.getElementById('featured-restaurants');
            if (featuredRestaurants) {
                const featuredData = getRandomElements(data.restaurants, 4);
                displayFeaturedRestaurants(featuredData);
            }

            const params = new URLSearchParams(window.location.search);
            const restaurantName = params.get('name');
            console.log('Page loaded with restaurant name:', restaurantName); // Debug log

            if (restaurantName) {
                const restaurant = data.restaurants.find(rest => rest.name === restaurantName);
                if (restaurant) {
                    displayRestaurantDetails(restaurant);
                    displayPreviousReviews(restaurant.name); // Display previous reviews on page load
                } else {
                    document.getElementById('restaurant-details').innerHTML = '<p>Restaurant not found.</p>';
                }
            }

            function displayRestaurantDetails(restaurant) {
                const restaurantDetails = document.getElementById('restaurant-details');
                if (restaurantDetails) {
                    restaurantDetails.innerHTML = `
                        <h2>${restaurant.name}</h2>
                        <p><strong>Location:</strong> ${restaurant.location.street}, ${restaurant.location.city}, ${restaurant.location.state}</p>
                        <p><strong>Phone:</strong> ${restaurant.phone}</p>
                        <p><strong>Price Range:</strong> ${restaurant.price_range}</p>
                        <p><strong>Cuisine:</strong> ${restaurant.cuisine}</p>
                        <p><strong>Type:</strong> ${restaurant.type}</p>
                        <p><strong>Rating:</strong> ${restaurant.rating}</p>
                    `;
                }
            }
        })
        .catch(error => console.error('Error fetching data:', error));

    const navigateButton = document.getElementById('listings-button');
    if (navigateButton) {
        navigateButton.addEventListener('click', () => {
            window.location.href = './listings.html'; 
        });
    }

    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        hamburger.classList.toggle('open');
    });

    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;

    // Function to handle modal
    function showModal() {
        const modal = document.getElementById("review-modal");
        const span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    // Function to store reviews in local storage
    function storeReview(restaurantName, review) {
        console.log(`Storing review for ${restaurantName}:`, review); // Debug log
        let reviews = JSON.parse(localStorage.getItem(restaurantName)) || [];
        reviews.push(review);
        localStorage.setItem(restaurantName, JSON.stringify(reviews));
        console.log(`Review stored for ${restaurantName}:`, review); // Debug log
    }

    // Function to display reviews from local storage
    function displayPreviousReviews(restaurantName) {
        console.log(`Displaying previous reviews for ${restaurantName}`); // Debug log
        const reviewsContainer = document.getElementById('previous-reviews');
        reviewsContainer.innerHTML = '';

        let reviews = JSON.parse(localStorage.getItem(restaurantName)) || [];
        console.log(`Retrieved reviews for ${restaurantName}:`, reviews); // Debug log

        if (reviews.length === 0) {
            reviewsContainer.innerHTML = '<p>No reviews yet.</p>';
            return;
        }

        reviews.forEach(review => {
            const reviewDiv = document.createElement('div');
            reviewDiv.classList.add('review');
            reviewDiv.innerHTML = `
                <p><strong>${review.name}</strong></p>
                <p>${review.text}</p>
                <p>Rating: ${review.rating}</p>
            `;
            reviewsContainer.appendChild(reviewDiv);
        });

        // Display the count of reviews
        const reviewCount = document.getElementById('review-count');
        if (reviewCount) {
            reviewCount.textContent = `Total Reviews: ${reviews.length}`;
        }
    }

    // Event listener for form submission
    const reviewForm = document.getElementById('review-form');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const restaurantName = getQueryParameter('name');
            const review = {
                name: document.getElementById('review-name').value,
                text: document.getElementById('review-text').value,
                rating: document.getElementById('review-rating').value,
                restaurant: restaurantName
            };

            storeReview(restaurantName, review);
            showModal();
            reviewForm.reset(); // Ensure this is a form element and has a reset method

            // Display the updated reviews immediately
            displayPreviousReviews(restaurantName);
        });
    }

    // Event listener for viewing previous reviews
    const viewReviewsButton = document.getElementById('view-reviews-button');
    if (viewReviewsButton) {
        viewReviewsButton.addEventListener('click', function() {
            const restaurantName = getQueryParameter('name');
            displayPreviousReviews(restaurantName);
        });
    }

    // Function to get query parameter
    function getQueryParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Ensure reviews are displayed on page load for the current restaurant
    const params = new URLSearchParams(window.location.search);
    const currentRestaurantName = params.get('name');
    console.log('Current restaurant name on page load:', currentRestaurantName); // Debug log
    if (currentRestaurantName) {
        displayPreviousReviews(currentRestaurantName);
    }
});

