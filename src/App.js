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

  const setData = ({ url, name, public_repos, public_gists, followers, following, created_at }) => {
    setUrl(url);
    setName(name);
    setRepos(public_repos);
    setGists(public_gists);
    setFollowers(followers);
    setFollowing(following);
    setCreated(created_at);

  }

  return (
    <div>
     <div className='navbar'>GitHub Search</div>
     <div className="App">
      <SearchBar placeholder={"Type username"}/>
    </div>
    </div>
  );
}

export default App;
