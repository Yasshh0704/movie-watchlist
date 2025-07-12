# 🎬 Movie Watchlist - LinkedIn Portfolio Project

A beautiful and modern movie watchlist application with rating functionality, built with vanilla JavaScript and integrated with The Movie Database (TMDB) API.

![Movie Watchlist](https://img.shields.io/badge/Status-Live-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![API](https://img.shields.io/badge/API-TMDB-blue)
![Deployment](https://img.shields.io/badge/Deployment-Netlify-purple)

## 🌐 Live Demo

**🔗 Website Link for LinkedIn:**
```
https://your-movie-watchlist.netlify.app
```

## 📱 LinkedIn Post Template

Here's a professional LinkedIn post you can use:

---

**🎬 Just Built: Interactive Movie Watchlist Web App!**

Excited to share my latest project - a modern, responsive movie watchlist application built with vanilla JavaScript, HTML5, and CSS3!

**✨ Key Features:**
• Real-time movie search using TMDB API
• Interactive 5-star rating system
• Hollywood, Bollywood & Web Series recommendations
• Beautiful glassmorphism UI design
• Responsive design for all devices
• Local storage for data persistence

**🛠️ Tech Stack:**
• HTML5, CSS3, Vanilla JavaScript (ES6+)
• TMDB API integration
• Local Storage API
• Responsive CSS Grid & Flexbox
• Modern CSS animations

**🔗 Check it out:** [Movie Watchlist App](https://your-movie-watchlist.netlify.app)

#WebDevelopment #JavaScript #Portfolio #MovieApp #Frontend #CSS #API

---

## 🚀 Quick Deployment Guide

### Option 1: Netlify (Recommended - Free)

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **Deploy from GitHub**
   ```bash
   # Push your code to GitHub first
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/movie-watchlist.git
   git push -u origin main
   ```

3. **Deploy on Netlify**
   - Click "New site from Git"
   - Connect your GitHub repository
   - Deploy settings: Build command (leave empty), Publish directory: `.`
   - Click "Deploy site"

4. **Get Your Live URL**
   - Netlify will provide: `https://your-site-name.netlify.app`
   - You can customize the URL in site settings

### Option 2: GitHub Pages (Free)

1. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: "Deploy from a branch"
   - Branch: `main`, folder: `/ (root)`
   - Save

2. **Your URL will be:**
   ```
   https://yourusername.github.io/movie-watchlist
   ```

### Option 3: Vercel (Free)

1. **Deploy with Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically

2. **Your URL will be:**
   ```
   https://movie-watchlist-yourusername.vercel.app
   ```

## ✨ Features Showcase

### 🎯 Core Features
- **Add Movies**: Search and add movies using TMDB API or manual entry
- **Rate Movies**: Interactive 5-star rating system
- **Watchlist Management**: Track watched and unwatched movies
- **Local Storage**: Data persists across browser sessions

### 🔍 Search & Filter
- **Real-time Search**: Search through your movie collection
- **Status Filter**: Filter by watched/unwatched movies
- **Sorting Options**: Sort by rating, release date, title, or date added

### 🎨 Beautiful UI
- **Modern Design**: Glassmorphism effects with gradient backgrounds
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Hover effects and transitions
- **Interactive Cards**: Movie posters with rating display

### 📱 User Experience
- **Toast Notifications**: Success and error feedback
- **Modal Dialogs**: Clean add movie and rating interfaces
- **Empty States**: Helpful guidance when no movies are added
- **Keyboard Navigation**: Full keyboard accessibility

## 🎬 Movie Collection

### Default Watchlist (12 Movies/Series)
- The Shawshank Redemption (1994)
- The Dark Knight (2008) ⭐⭐⭐⭐⭐
- Inception (2010) ⭐⭐⭐⭐
- 3 Idiots (2009)
- Breaking Bad (2008) ⭐⭐⭐⭐⭐
- Stranger Things (2016)
- Interstellar (2014) ⭐⭐⭐⭐⭐
- Dangal (2016) ⭐⭐⭐⭐
- Money Heist (2017)
- The Matrix (1999) ⭐⭐⭐⭐⭐
- PK (2014)
- The Witcher (2019) ⭐⭐⭐⭐

### Recommendations
- **Hollywood**: 6 top-rated movies
- **Bollywood**: 6 popular Indian films
- **Web Series**: 6 trending series

## 🛠️ How to Use

### Adding Movies
1. Click the **"Add Movie"** button
2. **Search Method**: Type a movie title to search TMDB database
3. **Manual Method**: Fill out the form with movie details
4. Click on a search result or submit the form

### Rating Movies
1. Click **"Rate Movie"** on any unwatched movie
2. Click on the stars to set your rating (1-5)
3. Click **"Save Rating"** to confirm

### Managing Your Watchlist
- **Search**: Use the search bar to find specific movies
- **Filter**: Use the dropdown to show only watched/unwatched movies
- **Sort**: Choose how to sort your movie list
- **Remove**: Click the trash icon to remove movies

## 🎨 Customization

### Styling
The application uses modern CSS with:
- CSS Grid for responsive layouts
- CSS Custom Properties for theming
- Flexbox for component alignment
- Glassmorphism effects

### API Configuration
The app uses a free TMDB API key. To use your own:
1. Get a free API key from [TMDB](https://www.themoviedb.org/settings/api)
2. Replace the `TMDB_API_KEY` constant in `script.js`

## 📁 Project Structure

```
movie-watchlist/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Application logic and API integration
└── README.md           # This file
```

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Grid, Flexbox, and animations
- **Vanilla JavaScript**: ES6+ features and modern APIs
- **TMDB API**: Movie database integration
- **Local Storage**: Data persistence
- **Font Awesome**: Icons
- **Google Fonts**: Typography

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance Features
- Debounced search to reduce API calls
- Lazy loading of movie posters
- Efficient DOM manipulation
- Optimized animations

## 🎯 API Integration

The application integrates with The Movie Database (TMDB) API to:
- Search for movies by title
- Fetch movie posters and metadata
- Get release dates and other details

### API Endpoints Used
- `GET /search/movie` - Search movies
- Image URLs for movie posters

## 🔒 Data Privacy

- All data is stored locally in your browser
- No personal data is sent to external servers
- Movie search queries are sent to TMDB API only
- No user accounts or authentication required

## 🐛 Troubleshooting

### Common Issues

**Movies not loading**
- Check your internet connection
- Ensure the TMDB API is accessible
- Try refreshing the page

**Search not working**
- Verify you have an active internet connection
- Check browser console for API errors
- Try a different movie title

**Data not persisting**
- Ensure localStorage is enabled in your browser
- Check if you're in private/incognito mode
- Verify browser permissions

## 🤝 Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Improving the UI/UX
- Adding new functionality

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie API
- [Font Awesome](https://fontawesome.com/) for the beautiful icons
- [Google Fonts](https://fonts.google.com/) for the Inter font family

---

**Ready to share on LinkedIn! 🚀**

**🔗 Your Live URL:** Replace `https://your-movie-watchlist.netlify.app` with your actual deployed URL after following the deployment steps above. 