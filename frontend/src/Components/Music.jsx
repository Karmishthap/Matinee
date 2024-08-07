import React, { useState } from 'react';

const MusicSearch = () => {
  const [musicName, setMusicName] = useState('');
  const [recommendations, setRecommendations] = useState({
    music: [],
    movies: [],
    books: []
  });

  const [showMusic, setShowMusic] = useState(false);
  const [showMovies, setShowMovies] = useState(false);
  const [showBooks, setShowBooks] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await fetch('http://localhost:5000/recommend/music', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: musicName }), // Passes the musicName as query
      });
      const data = await response.json();

      if (data.music || data.movies || data.books) {
        setRecommendations({
          music: data.music.map(music => music.track_name),
          movies: data.movies.map(movie => movie.title),
          books: data.books.map(book => book['Book-Title'])
        });
      } else {
        alert('No recommendations found');
      }
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      alert('Error fetching recommendations');
    }
  };

  const toggleMovies = () => {
    setShowMovies(prev => !prev); // Toggle the movies section
  };

  const toggleBooks = () => {
    setShowBooks(prev => !prev); // Toggle the books section
  };

  const toggleMusic = () => {
    setShowMusic(prev => !prev); // Toggle the music section
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white font-sans bg-contain bg-center" style={{ backgroundImage: "url('src/assets/Mubackground.svg')" }}>
      <div className="max-w-4xl w-full flex relative bg-black bg-opacity-30 p-6 rounded-lg">
        <div className="w-1/2 bg-cover bg-center rounded-l-lg relative slide-in">
          <img src="src/assets/Music-form.svg" alt="Music Form" className="w-90 h-full object-cover rounded-l-lg" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-l-lg">
            <h1 className="text-white text-3xl font-bold text-left">
              Find Yourself Intertwined In Your Mood
              <br />
              Plug-In Your Aura
            </h1>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center bg-transparent shadow-lg rounded-r-lg border border-blue-400">
          <div className="max-w-md w-full p-6">
            <h2 className="text-2xl font-bold mb-4 text-center border-b border-blue-500 pb-2 text-orange-600">Music Recommendations</h2>
            <div className="mb-4">
              <label htmlFor="musicName" className="block text-sm font-medium text-blue-400"> Enter The Music Name: </label>
              <input
                type="text"
                id="musicName"
                name="musicName"
                placeholder="E.g. All Too Well"
                className="w-full mt-1 p-2 border border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-lightBlue-500 bg-transparent text-lightBlue-300"
                value={musicName}
                onChange={(e) => setMusicName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <button
                id="submitMusic"
                onClick={handleSearch}
                className="bg-orange-600 text-white px-3 py-1 rounded-md hover:bg-transparent transition-all duration-300 transform hover:scale-105"
              >
                Submit
              </button>
            </div>
            <div className="mb-4" id="similarMusic">
              <button
                onClick={toggleMusic}
                className="bg-orange-600 text-white px-3 py-1 rounded-md hover:bg-lightBlue-500 transition-all duration-300 transform hover:scale-105"
              >
                Similar Music
              </button>
              {showMusic && (
                <ul className="list-disc pl-6 text-lightBlue-300 border border-blue-700 rounded-md p-2 bg-transparent">
                  {recommendations.music.map((music, index) => (
                    <li key={index}>{music}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mb-4">
              <button
                onClick={toggleBooks}
                className="bg-orange-600 text-white px-3 py-1 rounded-md hover:bg-lightBlue-500 transition-all duration-300 transform hover:scale-105"
              >
                Book Recommendations
              </button>
              {showBooks && (
                <div className="mb-4" id="booksList">
                  <ul className="list-disc pl-6 text-lightBlue-300 border border-blue-600 rounded-md p-2 bg-transparent">
                    {recommendations.books.map((book, index) => (
                      <li key={index}>{book}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="mb-4">
              <button
                onClick={toggleMovies}
                className="bg-orange-600 text-white px-3 py-1 rounded-md hover:bg-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                Movie Recommendations
              </button>
              {showMovies && (
                <div className="mb-4" id="musicList">
                  <ul className="list-disc pl-6 text-lightBlue-300 border border-blue-600 rounded-md p-2 bg-transparent">
                    {recommendations.movies.map((movie, index) => (
                      <li key={index}>{movie}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicSearch;
