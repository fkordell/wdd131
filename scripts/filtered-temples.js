document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.getElementById('menuToggle');
    var slidingMenu = document.getElementById('slidingMenu');
    var spans = menuButton.querySelectorAll('span');
    var imagesContainer = document.querySelector('.images');
    var menuLinks = document.querySelectorAll('.sliding-menu a');
    var titleElement = document.querySelector('main h2');

    var toggleMenu = function () {
        slidingMenu.classList.toggle('open');
        spans[0].classList.toggle('rotate-45');
        spans[0].classList.toggle('translate-y-1');
        spans[1].classList.toggle('opacity-0');
        spans[2].classList.toggle('rotate-45');
        spans[2].classList.toggle('translate-y-1');
    };
    menuButton.addEventListener('click', toggleMenu);

    const temples = [
        {
          templeName: "Aba Nigeria",
          location: "Aba, Nigeria",
          dedicated: "2005, August, 7",
          area: 11500,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
          templeName: "Manti Utah",
          location: "Manti, Utah, U.S.",
          dedicated: "1888, May, 21",
          area: 74792,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
          templeName: "Payson Utah",
          location: "Payson, Utah, U.S.",
          dedicated: "2015, June, 7",
          area: 96630,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
          templeName: "Yigo Guam",
          location: "Yigo, Guam",
          dedicated: "2020, May, 2",
          area: 6861,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
          templeName: "Washington D.C.",
          location: "Kensington, Maryland, U.S.",
          dedicated: "1974, November, 19",
          area: 156558,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
          templeName: "Lima Perú",
          location: "Lima, Perú",
          dedicated: "1986, January, 10",
          area: 9600,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
          templeName: "Mexico City Mexico",
          location: "Mexico City, Mexico",
          dedicated: "1983, December, 2",
          area: 116642,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Atlanta Georgia",
            location: "Atlanta, Georgia, U.S.",
            dedicated: "1983, June, 4",
            area:  34500,
            imageUrl: "https://churchofjesuschrist.org/imgs/2f38e41532b2b5529266317c51193b68fdcf81d5/full/320%2C/0/default"
            
        },
        {
            templeName: "Cape Town South Africa",
            location:  "Cape Town, Western Cape Province, South Africa",
            dedicated: "Announced",
            area: 9500,
            imageUrl: "https://churchofjesuschrist.org/imgs/d45d952e583a11ec8730eeeeac1ef8ed58640819/full/320%2C/0/default"
        },
        {
            templeName: "Pocatello Idaho",
            location:  "Pocatello, Idaho, U.S.",
            dedicated: "2021, November, 7",
            area: 71125,
            imageUrl: "https://churchofjesuschrist.org/imgs/088138fe9fc211ec987feeeeac1e2a17f945bcb2/full/320%2C/0/default"
        },
      ];

      menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var filterType = e.target.getAttribute('href').substring(1);
            filterTemples(filterType);
            updateTitle(filterType); 
        });
    });

    function filterTemples(filter) {
        imagesContainer.innerHTML = ''; 
        let filteredTemples = [];
        if (filter === 'Old') {
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        } else if (filter === 'New') {
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        } else if (filter === 'Large') {
            filteredTemples = temples.filter(temple => temple.area > 90000);
        } else if (filter === 'Small') {
            filteredTemples = temples.filter(temple => temple.area < 10000);
        } else {
            filteredTemples = temples; 
        }
        displayTemples(filteredTemples);
    }

    function displayTemples(temples) {
        temples.forEach(temple => {
            var card = document.createElement('figure');
            card.className = 'temple-card';
    
            var templeName = document.createElement('h3');
            templeName.textContent = temple.templeName;
    
            var location = document.createElement('p');
            location.innerHTML = "<strong>Location:</strong> " + temple.location;
    
            var dedicated = document.createElement('p');
            dedicated.innerHTML = "<strong>Dedicated:</strong> " + temple.dedicated;
    
            var area = document.createElement('p');
            area.innerHTML = "<strong>Area:</strong> " + temple.area + " sq ft";
    
            var figure = document.createElement('figure');
    
            var image = document.createElement('img');
            image.src = temple.imageUrl;
            image.alt = temple.templeName;  
            image.loading = 'lazy';
    
            var figcaption = document.createElement('figcaption');
            figcaption.textContent = temple.templeName;  
    
          
            figure.appendChild(image);
            figure.appendChild(figcaption);
    
            card.appendChild(templeName);
            card.appendChild(location);
            card.appendChild(dedicated);
            card.appendChild(area);
            card.appendChild(figure); 
    
        
            imagesContainer.appendChild(card);
        });
    }

    function updateTitle(filterType) {
        titleElement.textContent = filterType.charAt(0).toUpperCase() + filterType.slice(1); 
    }

    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;

    filterTemples('Home'); 
    updateTitle('Home');
});
