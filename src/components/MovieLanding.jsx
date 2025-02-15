import React, { useState, useEffect } from 'react';
import { Search, X, ExternalLink } from 'lucide-react';
import '../assets/MovieLanding.css';

const Pagination = ({ currentPage, totalResults, onPageChange }) => {
  const resultsPerPage = 10;
  const totalPages = Math.ceil(totalResults / resultsPerPage);
  const maxVisiblePages = 5;

  const getVisiblePages = () => {
    let start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let end = Math.min(start + maxVisiblePages - 1, totalPages);

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded-lg bg-gray-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>
      
      {getVisiblePages().map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded-lg ${
            currentPage === page 
              ? 'bg-red-600 text-white' 
              : 'bg-gray-700 text-white hover:bg-gray-600'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-lg bg-gray-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};


const MovieLanding = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [lastSearchQuery, setLastSearchQuery] = useState('');

  const API_KEY = '37604857';
  
  const searchMovies = async (query, page = 1) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`http://www.omdbapi.com/?s=${query}&page=${page}&apikey=${API_KEY}`);
      const data = await response.json();
      
      if (data.Response === "True") {
        setMovies(data.Search);
        setTotalResults(parseInt(data.totalResults));
        setLastSearchQuery(query);
      } else {
        setError(data.Error);
        setMovies([]);
        setTotalResults(0);
      }
    } catch (err) {
      setError('Terjadi kesalahan saat mengambil data');
      setMovies([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    searchMovies(lastSearchQuery, newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getMovieDetails = async (imdbID) => {
    try {
      setLoadingDetails(true);
      const response = await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`);
      const data = await response.json();
      
      if (data.Response === "True") {
        setSelectedMovie(data);
      }
    } catch (err) {
      console.error('Error fetching movie details:', err);
    } finally {
      setLoadingDetails(false);
    }
  };

  useEffect(() => {
    searchMovies('marvel');
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      searchMovies(searchQuery);
    }
  };

  const handleMovieClick = (imdbID) => {
    getMovieDetails(imdbID);
  };

  const MovieDetailModal = ({ movie, onClose }) => {
    if (!movie) return null;
    
    const watchLinks = {
      'movie': 'https://www.imdb.com/title/',
      'series': 'https://www.imdb.com/title/',
      'episode': 'https://www.imdb.com/title/',
    };

    return (
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <button className="modal-close" onClick={onClose}>
              <X size={24} />
            </button>
          </div>
          <div className="modal-body">
            <div className="movie-detail">
              <div className="movie-detail-poster">
                <img
                  src={movie.Poster !== 'N/A' ? movie.Poster : '/api/placeholder/300/450'}
                  alt={movie.Title}
                />
              </div>
              <div className="movie-detail-info">
                <h1>{movie.Title}</h1>
                <div className="movie-detail-meta">
                  <span>{movie.Year}</span>
                  <span>{movie.Rated}</span>
                  <span>{movie.Runtime}</span>
                </div>
                <div className="movie-detail-plot">
                  {movie.Plot}
                </div>
                <div className="movie-detail-stats">
                  <div className="stat-item">
                    <div className="stat-label">Genre</div>
                    <div className="stat-value">{movie.Genre}</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-label">Director</div>
                    <div className="stat-value">{movie.Director}</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-label">Actors</div>
                    <div className="stat-value">{movie.Actors}</div>
                  </div>
                  {movie.imdbRating !== "N/A" && (
                    <div className="stat-item">
                      <div className="stat-label">IMDb Rating</div>
                      <div className="stat-value">⭐ {movie.imdbRating}/10</div>
                    </div>
                  )}
                </div>
                <a
                  href={`${watchLinks[movie.Type.toLowerCase()]}${movie.imdbID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="watch-button"
                >
                  <span>Tonton di IMDb</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
            Temukan Film Terbaik
          </h1>
          <div className="search-container">
            <form onSubmit={handleSearch} className="search-form">
              <input
                type="text"
                placeholder="Cari film . . ."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button className="search-button">
                <Search size={20} />
                <span>Cari</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Movies Section */}
      <section className="container" style={{ marginTop: '2rem' }}>
        <h2 className="section-title">Film</h2>
        
        {loading && <div className="loading-spinner" />}

        {error && (
          <div style={{ textAlign: 'center', color: '#9CA3AF', padding: '2rem 0' }}>
            <p>{error}</p>
          </div>
        )}

        <div className="movie-grid">
          {movies.map((movie) => (
            <div 
              key={movie.imdbID} 
              className="movie-card"
              onClick={() => handleMovieClick(movie.imdbID)}
              style={{ cursor: 'pointer' }}
            >
              <div className="movie-poster">
                <img
                  src={movie.Poster !== 'N/A' ? movie.Poster : '/api/placeholder/300/450'}
                  alt={movie.Title}
                />
              </div>
              <div className="movie-info">
                <h3 className="movie-title">{movie.Title}</h3>
                <div className="movie-meta">
                  <span>{movie.Year}</span>
                  <span>{movie.Type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination 
          currentPage={currentPage} 
          totalResults={totalResults} 
          onPageChange={handlePageChange}
        />
      </section>

      {/* Categories Section */}
      <section className="container" style={{ marginTop: '3rem' }}>
        <h2 className="section-title">Kategori</h2>
        <div className="categories-grid">
          {['Action', 'Drama', 'Comedy', 'Horror', 'Romance', 'Sci-Fi', 'Animation', 'Documentary'].map((category) => (
            <button
              key={category}
              onClick={() => searchMovies(category)}
              className="category-button"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="section-title" style={{ margin: 0 }}>CariFilm</div>
            <div className="footer-links">
              <a href="/about" className="footer-link">Tentang Kami</a>
              <a href="/contact" className="footer-link">Kontak</a>
              <a href="/help" className="footer-link">Bantuan</a>
            </div>
            <div style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>
              © 2025 CariFilm. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Movie Detail Modal */}
      {selectedMovie && (
        <MovieDetailModal 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}
    </div>
  );
};

export default MovieLanding;