// TMDB API Configuration
const TMDB_API_KEY = '1b7c076a0e4849aeefd1f3c429c79c3d'; // Free API key for demo
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// Default movies for first-time users
const defaultMovies = [
    {
        id: '1',
        title: "The Shawshank Redemption",
        year: 1994,
        poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        rating: null,
        watched: false,
        addedAt: new Date(Date.now() - 86400000 * 10).toISOString(),
        tmdbId: 278
    },
    {
        id: '2',
        title: "The Dark Knight",
        year: 2008,
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        rating: 5,
        watched: true,
        addedAt: new Date(Date.now() - 86400000 * 8).toISOString(),
        tmdbId: 155
    },
    {
        id: '3',
        title: "Inception",
        year: 2010,
        poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        rating: 4,
        watched: true,
        addedAt: new Date(Date.now() - 86400000 * 7).toISOString(),
        tmdbId: 27205
    },
    {
        id: '4',
        title: "3 Idiots",
        year: 2009,
        poster: "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCABitC4Xos6nwOeG.jpg",
        rating: null,
        watched: false,
        addedAt: new Date(Date.now() - 86400000 * 6).toISOString(),
        tmdbId: 20453
    },
    {
        id: '5',
        title: "Breaking Bad",
        year: 2008,
        poster: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
        rating: 5,
        watched: true,
        addedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
        tmdbId: 1396
    },
    {
        id: '6',
        title: "Stranger Things",
        year: 2016,
        poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
        rating: null,
        watched: false,
        addedAt: new Date(Date.now() - 86400000 * 4).toISOString(),
        tmdbId: 66732
    },
    {
        id: '7',
        title: "Interstellar",
        year: 2014,
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        rating: 5,
        watched: true,
        addedAt: new Date(Date.now() - 86400000 * 3).toISOString(),
        tmdbId: 157336
    },
    {
        id: '8',
        title: "Dangal",
        year: 2016,
        poster: "https://image.tmdb.org/t/p/w500/6a6clrhNDFmE13KD7dbRJuJn8pq.jpg",
        rating: 4,
        watched: true,
        addedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
        tmdbId: 356983
    },
    {
        id: '9',
        title: "Money Heist",
        year: 2017,
        poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
        rating: null,
        watched: false,
        addedAt: new Date(Date.now() - 86400000 * 1).toISOString(),
        tmdbId: 71446
    },
    {
        id: '10',
        title: "The Matrix",
        year: 1999,
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        rating: 5,
        watched: true,
        addedAt: new Date().toISOString(),
        tmdbId: 603
    },
    {
        id: '11',
        title: "PK",
        year: 2014,
        poster: "https://image.tmdb.org/t/p/w500/4B2aJitNx05Ftl5cFc70w1c2Wbw.jpg",
        rating: null,
        watched: false,
        addedAt: new Date().toISOString(),
        tmdbId: 290595
    },
    {
        id: '12',
        title: "The Witcher",
        year: 2019,
        poster: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
        rating: 4,
        watched: true,
        addedAt: new Date().toISOString(),
        tmdbId: 71912
    }
];

// Application State
let movies = JSON.parse(localStorage.getItem('movieWatchlist')) || defaultMovies;
let currentRating = 0;
let selectedMovieId = null;
let searchTimeout = null;

// DOM Elements
const movieGrid = document.getElementById('movieGrid');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const statusFilter = document.getElementById('statusFilter');
const sortBy = document.getElementById('sortBy');
const addMovieModal = document.getElementById('addMovieModal');
const ratingModal = document.getElementById('ratingModal');
const movieSearchInput = document.getElementById('movieSearchInput');
const searchResults = document.getElementById('searchResults');
const manualMovieForm = document.getElementById('manualMovieForm');
const ratingMovieInfo = document.getElementById('ratingMovieInfo');
const starRating = document.getElementById('starRating');
const toast = document.getElementById('toast');

// Recommendation Data
const recommendations = {
    hollywood: [
        {
            title: "Inception",
            year: 2010,
            poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
            rating: 8.8,
            genre: "Sci-Fi, Thriller",
            tmdbId: 27205
        },
        {
            title: "The Dark Knight",
            year: 2008,
            poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
            rating: 9.0,
            genre: "Action, Crime, Drama",
            tmdbId: 155
        },
        {
            title: "Interstellar",
            year: 2014,
            poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
            rating: 8.6,
            genre: "Adventure, Drama, Sci-Fi",
            tmdbId: 157336
        },
        {
            title: "The Shawshank Redemption",
            year: 1994,
            poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
            rating: 9.3,
            genre: "Drama",
            tmdbId: 278
        },
        {
            title: "Pulp Fiction",
            year: 1994,
            poster: "https://image.tmdb.org/t/p/w500/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg",
            rating: 8.9,
            genre: "Crime, Drama",
            tmdbId: 680
        },
        {
            title: "The Matrix",
            year: 1999,
            poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
            rating: 8.7,
            genre: "Action, Sci-Fi",
            tmdbId: 603
        }
    ],
    bollywood: [
        {
            title: "3 Idiots",
            year: 2009,
            poster: "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCABitC4Xos6nwOeG.jpg",
            rating: 8.4,
            genre: "Comedy, Drama",
            tmdbId: 20453
        },
        {
            title: "Dangal",
            year: 2016,
            poster: "https://image.tmdb.org/t/p/w500/6a6clrhNDFmE13KD7dbRJuJn8pq.jpg",
            rating: 8.3,
            genre: "Biography, Drama, Sport",
            tmdbId: 356983
        },
        {
            title: "PK",
            year: 2014,
            poster: "https://image.tmdb.org/t/p/w500/4B2aJitNx05Ftl5cFc70w1c2Wbw.jpg",
            rating: 7.8,
            genre: "Comedy, Drama, Sci-Fi",
            tmdbId: 290595
        },
        {
            title: "Lagaan",
            year: 2001,
            poster: "https://image.tmdb.org/t/p/w500/1g0WzKXKndNhZFKdDlz5xnU7cKU.jpg",
            rating: 8.1,
            genre: "Drama, Sport",
            tmdbId: 2022
        },
        {
            title: "Rang De Basanti",
            year: 2006,
            poster: "https://image.tmdb.org/t/p/w500/8t7bBdBE6UJgdAUQwWjcnG0x5Wr.jpg",
            rating: 8.1,
            genre: "Comedy, Crime, Drama",
            tmdbId: 1948
        },
        {
            title: "Taare Zameen Par",
            year: 2007,
            poster: "https://image.tmdb.org/t/p/w500/wnFwqP0jqVbnzQdGGUzxq3QqQNk.jpg",
            rating: 8.3,
            genre: "Drama, Family",
            tmdbId: 2976
        }
    ],
    webseries: [
        {
            title: "Breaking Bad",
            year: 2008,
            poster: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
            rating: 9.5,
            genre: "Crime, Drama, Thriller",
            tmdbId: 1396
        },
        {
            title: "Stranger Things",
            year: 2016,
            poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
            rating: 8.7,
            genre: "Drama, Fantasy, Horror",
            tmdbId: 66732
        },
        {
            title: "The Crown",
            year: 2016,
            poster: "https://image.tmdb.org/t/p/w500/7k7oKJUyJhNZnWj0YJf7YzJfJfJ.jpg",
            rating: 8.6,
            genre: "Biography, Drama, History",
            tmdbId: 65494
        },
        {
            title: "Money Heist",
            year: 2017,
            poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
            rating: 8.3,
            genre: "Action, Crime, Drama",
            tmdbId: 71446
        },
        {
            title: "The Witcher",
            year: 2019,
            poster: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
            rating: 8.2,
            genre: "Action, Adventure, Drama",
            tmdbId: 71912
        },
        {
            title: "The Mandalorian",
            year: 2019,
            poster: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKq1q.jpg",
            rating: 8.8,
            genre: "Action, Adventure, Sci-Fi",
            tmdbId: 82856
        }
    ]
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    // Check if this is the first time loading (no movies in localStorage)
    const isFirstTime = !localStorage.getItem('movieWatchlist');
    if (isFirstTime) {
        // Save default movies to localStorage
        localStorage.setItem('movieWatchlist', JSON.stringify(defaultMovies));
        movies = defaultMovies;
    }
    
    renderMovies();
    renderRecommendations();
    setupEventListeners();
    setupTabNavigation();
});

// Event Listeners Setup
function setupEventListeners() {
    // Search and filter events
    searchInput.addEventListener('input', handleSearch);
    statusFilter.addEventListener('change', handleFilter);
    sortBy.addEventListener('change', handleSort);

    // Modal events
    movieSearchInput.addEventListener('input', handleMovieSearch);
    manualMovieForm.addEventListener('submit', handleManualAdd);
    
    // Star rating events
    starRating.addEventListener('click', handleStarClick);
    starRating.addEventListener('mouseover', handleStarHover);
    starRating.addEventListener('mouseout', handleStarHoverOut);

    // Close modals on outside click
    window.addEventListener('click', (e) => {
        if (e.target === addMovieModal) closeAddMovieModal();
        if (e.target === ratingModal) closeRatingModal();
    });
}

// Tab Navigation Setup
function setupTabNavigation() {
    // Main tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.dataset.tab;
            switchTab(tabName);
        });
    });

    // Recommendation tabs
    const recTabBtns = document.querySelectorAll('.rec-tab-btn');
    recTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const recTabName = btn.dataset.recTab;
            switchRecTab(recTabName);
        });
    });
}

function switchTab(tabName) {
    // Update main tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tabName}-content`).classList.add('active');
}

function switchRecTab(recTabName) {
    // Update recommendation tab buttons
    document.querySelectorAll('.rec-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-rec-tab="${recTabName}"]`).classList.add('active');

    // Update recommendation content
    document.querySelectorAll('.rec-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${recTabName}-content`).classList.add('active');
}

// Movie Management Functions
function addMovie(movieData) {
    const movie = {
        id: Date.now().toString(),
        title: movieData.title,
        year: movieData.year || new Date().getFullYear(),
        poster: movieData.poster || null,
        rating: null,
        watched: false,
        addedAt: new Date().toISOString(),
        tmdbId: movieData.tmdbId || null
    };

    movies.unshift(movie);
    saveMovies();
    renderMovies();
    showToast('Movie added to watchlist!', 'success');
}

function updateMovieRating(movieId, rating) {
    const movie = movies.find(m => m.id === movieId);
    if (movie) {
        movie.rating = rating;
        movie.watched = true;
        saveMovies();
        renderMovies();
        showToast('Rating saved successfully!', 'success');
    }
}

function deleteMovie(movieId) {
    movies = movies.filter(m => m.id !== movieId);
    saveMovies();
    renderMovies();
    showToast('Movie removed from watchlist!', 'success');
}

function saveMovies() {
    localStorage.setItem('movieWatchlist', JSON.stringify(movies));
}

// Rendering Functions
function renderMovies() {
    const filteredMovies = getFilteredMovies();
    
    if (filteredMovies.length === 0) {
        movieGrid.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }

    movieGrid.style.display = 'grid';
    emptyState.style.display = 'none';

    movieGrid.innerHTML = filteredMovies.map(movie => `
        <div class="movie-card" data-id="${movie.id}">
            <div class="movie-poster">
                ${movie.poster ? 
                    `<img src="${movie.poster}" alt="${movie.title}" onerror="this.style.display='none'">` : 
                    '<i class="fas fa-film"></i>'
                }
            </div>
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <p class="movie-year">${movie.year}</p>
                <div class="movie-rating">
                    <div class="stars">
                        ${generateStars(movie.rating)}
                    </div>
                    <span class="rating-text">
                        ${movie.rating ? `${movie.rating}/5` : 'Not rated'}
                    </span>
                </div>
                <div class="movie-actions">
                    ${movie.rating ? 
                        `<button class="btn btn-secondary" onclick="editRating('${movie.id}')">
                            <i class="fas fa-edit"></i> Edit Rating
                        </button>` :
                        `<button class="btn btn-primary" onclick="rateMovie('${movie.id}')">
                            <i class="fas fa-star"></i> Rate Movie
                        </button>`
                    }
                    <button class="btn btn-danger" onclick="deleteMovie('${movie.id}')">
                        <i class="fas fa-trash"></i> Remove
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderRecommendations() {
    // Render Hollywood recommendations
    const hollywoodGrid = document.getElementById('hollywoodGrid');
    hollywoodGrid.innerHTML = recommendations.hollywood.map(movie => `
        <div class="recommendation-card" onclick="addFromRecommendation('hollywood', ${movie.tmdbId})">
            <div class="recommendation-poster">
                <img src="${movie.poster}" alt="${movie.title}" onerror="this.style.display='none'">
                <div class="recommendation-overlay">
                    <div class="recommendation-stars">
                        ${generateStars(Math.round(movie.rating / 2))}
                    </div>
                    <span class="recommendation-score">${movie.rating}/10</span>
                </div>
            </div>
            <div class="recommendation-info">
                <h3 class="recommendation-title">${movie.title}</h3>
                <p class="recommendation-year">${movie.year}</p>
                <div class="recommendation-rating">
                    <div class="recommendation-stars">
                        ${generateStars(Math.round(movie.rating / 2))}
                    </div>
                    <span class="recommendation-score">${movie.rating}/10</span>
                </div>
                <p class="recommendation-genre">${movie.genre}</p>
                <button class="add-to-watchlist-btn" onclick="event.stopPropagation(); addFromRecommendation('hollywood', ${movie.tmdbId})">
                    <i class="fas fa-plus"></i> Add to Watchlist
                </button>
            </div>
        </div>
    `).join('');

    // Render Bollywood recommendations
    const bollywoodGrid = document.getElementById('bollywoodGrid');
    bollywoodGrid.innerHTML = recommendations.bollywood.map(movie => `
        <div class="recommendation-card" onclick="addFromRecommendation('bollywood', ${movie.tmdbId})">
            <div class="recommendation-poster">
                <img src="${movie.poster}" alt="${movie.title}" onerror="this.style.display='none'">
                <div class="recommendation-overlay">
                    <div class="recommendation-stars">
                        ${generateStars(Math.round(movie.rating / 2))}
                    </div>
                    <span class="recommendation-score">${movie.rating}/10</span>
                </div>
            </div>
            <div class="recommendation-info">
                <h3 class="recommendation-title">${movie.title}</h3>
                <p class="recommendation-year">${movie.year}</p>
                <div class="recommendation-rating">
                    <div class="recommendation-stars">
                        ${generateStars(Math.round(movie.rating / 2))}
                    </div>
                    <span class="recommendation-score">${movie.rating}/10</span>
                </div>
                <p class="recommendation-genre">${movie.genre}</p>
                <button class="add-to-watchlist-btn" onclick="event.stopPropagation(); addFromRecommendation('bollywood', ${movie.tmdbId})">
                    <i class="fas fa-plus"></i> Add to Watchlist
                </button>
            </div>
        </div>
    `).join('');

    // Render Web Series recommendations
    const webseriesGrid = document.getElementById('webseriesGrid');
    webseriesGrid.innerHTML = recommendations.webseries.map(movie => `
        <div class="recommendation-card" onclick="addFromRecommendation('webseries', ${movie.tmdbId})">
            <div class="recommendation-poster">
                <img src="${movie.poster}" alt="${movie.title}" onerror="this.style.display='none'">
                <div class="recommendation-overlay">
                    <div class="recommendation-stars">
                        ${generateStars(Math.round(movie.rating / 2))}
                    </div>
                    <span class="recommendation-score">${movie.rating}/10</span>
                </div>
            </div>
            <div class="recommendation-info">
                <h3 class="recommendation-title">${movie.title}</h3>
                <p class="recommendation-year">${movie.year}</p>
                <div class="recommendation-rating">
                    <div class="recommendation-stars">
                        ${generateStars(Math.round(movie.rating / 2))}
                    </div>
                    <span class="recommendation-score">${movie.rating}/10</span>
                </div>
                <p class="recommendation-genre">${movie.genre}</p>
                <button class="add-to-watchlist-btn" onclick="event.stopPropagation(); addFromRecommendation('webseries', ${movie.tmdbId})">
                    <i class="fas fa-plus"></i> Add to Watchlist
                </button>
            </div>
        </div>
    `).join('');
}

function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<i class="fas fa-star ${i <= rating ? '' : 'empty'}"></i>`;
    }
    return stars;
}

// Filtering and Sorting
function getFilteredMovies() {
    let filtered = [...movies];

    // Search filter
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(movie => 
            movie.title.toLowerCase().includes(searchTerm)
        );
    }

    // Status filter
    const status = statusFilter.value;
    if (status === 'watched') {
        filtered = filtered.filter(movie => movie.watched);
    } else if (status === 'unwatched') {
        filtered = filtered.filter(movie => !movie.watched);
    }

    // Sorting
    const sortType = sortBy.value;
    filtered.sort((a, b) => {
        switch (sortType) {
            case 'rating':
                return (b.rating || 0) - (a.rating || 0);
            case 'release':
                return b.year - a.year;
            case 'title':
                return a.title.localeCompare(b.title);
            case 'added':
            default:
                return new Date(b.addedAt) - new Date(a.addedAt);
        }
    });

    return filtered;
}

function handleSearch() {
    renderMovies();
}

function handleFilter() {
    renderMovies();
}

function handleSort() {
    renderMovies();
}

// TMDB API Functions
async function searchMovies(query) {
    if (!query.trim()) return [];

    try {
        const response = await fetch(
            `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&language=en-US&page=1&include_adult=false`
        );
        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error('Error searching movies:', error);
        return [];
    }
}

// Modal Functions
function openAddMovieModal() {
    addMovieModal.classList.add('show');
    movieSearchInput.focus();
}

function closeAddMovieModal() {
    addMovieModal.classList.remove('show');
    movieSearchInput.value = '';
    searchResults.innerHTML = '';
    manualMovieForm.reset();
}

function openRatingModal(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (!movie) return;

    selectedMovieId = movieId;
    currentRating = movie.rating || 0;
    
    ratingMovieInfo.innerHTML = `
        ${movie.poster ? 
            `<img src="${movie.poster}" alt="${movie.title}">` : 
            '<i class="fas fa-film" style="font-size: 3rem; color: #cbd5e0;"></i>'
        }
        <h3>${movie.title}</h3>
        <p>${movie.year}</p>
    `;

    updateStarDisplay();
    ratingModal.classList.add('show');
}

function closeRatingModal() {
    ratingModal.classList.remove('show');
    selectedMovieId = null;
    currentRating = 0;
}

// Search and Add Movie Functions
async function handleMovieSearch() {
    const query = movieSearchInput.value.trim();
    
    if (searchTimeout) {
        clearTimeout(searchTimeout);
    }

    if (query.length < 2) {
        searchResults.innerHTML = '';
        return;
    }

    searchTimeout = setTimeout(async () => {
        const results = await searchMovies(query);
        displaySearchResults(results);
    }, 300);
}

function displaySearchResults(results) {
    if (results.length === 0) {
        searchResults.innerHTML = '<p style="padding: 15px; color: #718096;">No movies found</p>';
        return;
    }

    searchResults.innerHTML = results.slice(0, 5).map(movie => `
        <div class="search-result-item" onclick="selectMovieFromSearch(${JSON.stringify(movie).replace(/"/g, '&quot;')})">
            <div class="search-result-poster">
                ${movie.poster_path ? 
                    `<img src="${TMDB_IMAGE_BASE_URL}${movie.poster_path}" alt="${movie.title}">` : 
                    '<i class="fas fa-film"></i>'
                }
            </div>
            <div class="search-result-info">
                <h4>${movie.title}</h4>
                <p>${movie.release_date ? movie.release_date.split('-')[0] : 'Unknown year'}</p>
            </div>
        </div>
    `).join('');
}

function selectMovieFromSearch(movie) {
    const movieData = {
        title: movie.title,
        year: movie.release_date ? parseInt(movie.release_date.split('-')[0]) : new Date().getFullYear(),
        poster: movie.poster_path ? `${TMDB_IMAGE_BASE_URL}${movie.poster_path}` : null,
        tmdbId: movie.id
    };

    addMovie(movieData);
    closeAddMovieModal();
}

function handleManualAdd(e) {
    e.preventDefault();
    
    const formData = new FormData(manualMovieForm);
    const movieData = {
        title: formData.get('movieTitle') || document.getElementById('movieTitle').value,
        year: parseInt(formData.get('movieYear') || document.getElementById('movieYear').value) || new Date().getFullYear(),
        poster: formData.get('moviePoster') || document.getElementById('moviePoster').value || null
    };

    if (!movieData.title) {
        showToast('Please enter a movie title', 'error');
        return;
    }

    addMovie(movieData);
    closeAddMovieModal();
}

// Recommendation Functions
function addFromRecommendation(category, tmdbId) {
    let movieData;
    
    if (category === 'hollywood') {
        movieData = recommendations.hollywood.find(m => m.tmdbId === tmdbId);
    } else if (category === 'bollywood') {
        movieData = recommendations.bollywood.find(m => m.tmdbId === tmdbId);
    } else if (category === 'webseries') {
        movieData = recommendations.webseries.find(m => m.tmdbId === tmdbId);
    }

    if (movieData) {
        addMovie(movieData);
        showToast(`${movieData.title} added to watchlist!`, 'success');
    }
}

// Rating Functions
function rateMovie(movieId) {
    openRatingModal(movieId);
}

function editRating(movieId) {
    openRatingModal(movieId);
}

function handleStarClick(e) {
    if (e.target.tagName === 'I') {
        currentRating = parseInt(e.target.dataset.rating);
        updateStarDisplay();
    }
}

function handleStarHover(e) {
    if (e.target.tagName === 'I') {
        const rating = parseInt(e.target.dataset.rating);
        highlightStars(rating);
    }
}

function handleStarHoverOut() {
    updateStarDisplay();
}

function updateStarDisplay() {
    highlightStars(currentRating);
    updateRatingText();
}

function highlightStars(rating) {
    const stars = starRating.querySelectorAll('i');
    stars.forEach((star, index) => {
        star.classList.toggle('active', index < rating);
    });
}

function updateRatingText() {
    const ratingText = document.querySelector('.rating-text');
    if (ratingText) {
        ratingText.textContent = currentRating > 0 ? 
            `Rating: ${currentRating}/5` : 
            'Click on a star to rate';
    }
}

function saveRating() {
    if (selectedMovieId && currentRating > 0) {
        updateMovieRating(selectedMovieId, currentRating);
        closeRatingModal();
    } else {
        showToast('Please select a rating', 'error');
    }
}

// Utility Functions
function showToast(message, type = 'success') {
    const toastElement = document.getElementById('toast');
    const toastMessage = toastElement.querySelector('.toast-message');
    const toastIcon = toastElement.querySelector('.toast-icon');

    toastMessage.textContent = message;
    toastIcon.className = `toast-icon fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`;
    
    toastElement.className = `toast ${type}`;
    toastElement.classList.add('show');

    setTimeout(() => {
        toastElement.classList.remove('show');
    }, 3000);
}

// Global Functions (for onclick handlers)
window.openAddMovieModal = openAddMovieModal;
window.closeAddMovieModal = closeAddMovieModal;
window.closeRatingModal = closeRatingModal;
window.rateMovie = rateMovie;
window.editRating = editRating;
window.deleteMovie = deleteMovie;
window.saveRating = saveRating;
window.addFromRecommendation = addFromRecommendation; 