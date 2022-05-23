import React, {useState, useEffect} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';


function App() {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [repos, setRepos] = useState('');
  const [gists, setGists] = useState('');
  const [followers, setFollowers] = useState(''); 
  const [following, setFollowing] = useState('');
  const [created, setCreated] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch("https://api.github.com/users/example")
    .then(res => res.json())
    .then(data => {
      setData(data);
    });
  }, []);

  const setData = ({ html_url, name, public_repos, public_gists, followers, following, created_at }) => {
    setUrl(html_url);
    setName(name);
    setRepos(public_repos);
    setGists(public_gists);
    setFollowers(followers);
    setFollowing(following);
    setCreated(created_at);

  }

  const handleSearch = (e) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
    .then(res => res.json())
    .then(data => {
      if (data.message) {
        setError(data.message)
      }
      else {
        setData(data);
        setError(null);
      }
    })
  }

  return (
    <div>
     <div className='navbar'>GitHub Search</div>
     <div className="App">
     <div className="searchInputs">
        <input type={"text"} placeholder={"Type username"} onChange={handleSearch} onSubmit={handleSubmit}/>
        <div className="seachIcon"></div>
      </div>
      { error ? (<h1>{error}</h1>) : (      
      <div>
        <h1>Link: {url}</h1>
        <h1>Name: {name}</h1>
        <h1>Repos: {repos}</h1>
        <h1>Gists: {gists}</h1>
        <h1>Followers: {followers}</h1>
        <h1>Following: {following}</h1>
        <h1>Date Created: {created}</h1>
      </div>)}
    </div> 
    </div>
  );
}

export default App;
