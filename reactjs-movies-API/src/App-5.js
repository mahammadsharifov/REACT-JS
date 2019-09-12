// Example 5: Fetching and listing data from Movies API. On Click each movie title, describe selected movie in details

import React from 'react';
import './App.css';

const App = () => {
    const title = "Star Wars";
    return (
      <div className="App">
        <Header title={title} />
        <Movies />
      </div>
    );
  }
  
  const Header = ({ title }) => (
    <div>
      <h1>{title}</h1>
    </div>
  );
  
  class Movies extends React.Component {
    state = {
      movies: [],
      showCrawl: {},
      color: ""
    };
  
    componentDidMount() {
      this.handleMovies();
    }
  
    handleMovies = () =>
      fetch("https://swapi.co/api/films")
        .then(results => results.json())
        .then(data => this.setState({ movies: data.results }));
  
    handleCrawl = e => {
      const { id } = e.target;
      this.setState(current => ({
        showCrawl: { ...current.showCrawl, [id]: !current.showCrawl[id] },
        color: "teal"
      }));
    };
  
    render() {
      return (
        <div>
          <h1>Episodes</h1>
          <div>
            {this.state.movies.map(movie => (
              <div className="movies"
                key={movie.episode_id}
                id={movie.episode_id}
                onClick={this.handleCrawl}
              >
                {movie.title}
                {this.state.showCrawl[movie.episode_id] && (
                  <div className="movie_open" style={{color: this.state.color}}>
                    {movie.opening_crawl}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
  
export default App;