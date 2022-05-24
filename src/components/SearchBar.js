/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function SearchBar({ placeholder, data }) {
    const [url, setUrl] = useState('');
    const [name, setName] = useState('');
    const [repos, setRepos] = useState('');
    const [gists, setGists] = useState('');
    const [followers, setFollowers] = useState(''); 
    const [following, setFollowing] = useState('');
    const [created, setCreated] = useState('');
    const [userInput, setUserInput] = useState('');
    const [error, setError] = useState('');
    const [results, setResults] = useState('');

    useEffect(() => {
        fetch("https://api.github.com/users/")
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
        setCreated(new Date(created_at).toLocaleDateString());

    }

    const handleSearch = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) => {
        if (e.key === 'Enter') {
            fetch(`https://api.github.com/users/${userInput}`)
            .then(res => res.json())
            .then(data => {
            if (data.message) {
                setError(data.message)
            }
            else {
                setData(data);
                setError(null);
                setResults("User Saved!")
            }
            })
        }
        
    }

    const clearInput = () => {
        setUserInput([]);
        setData([]);
        setResults([]);
    }

    return (
        <div className="search">
            <div className="searchInputs">
                <input type={"text"} placeholder={placeholder} value={userInput} onKeyDown={handleSubmit} onChange={handleSearch}/>
                <div className="seachIcon">
                    {userInput.length === 0 ? (
                        <SearchIcon style={{fontSize:50, color:"white"}}/>
                    ) : (
                        <CloseIcon id="clearBtn" style={{fontSize:50, color:"white"}} onClick={clearInput} />
                    )}
                    
                </div>
            </div>
            <div><h2 className='status'>{results}</h2></div>
            { error ? (<h2 className='status'>{error}</h2>) : (
                <div>
                <table>
                    <tr>
                        <th>URL</th>
                        <th>Name</th>
                        <th>Repos</th>
                        <th>Gists</th>
                        <th>Followers</th>
                        <th>Following</th>
                        <th>Date Created</th>
                    </tr>
                    <tr>
                        <td><a href={url} target="_blank">{userInput}</a></td>
                        <td>{name}</td>
                        <td>{repos}</td>
                        <td>{gists}</td>
                        <td>{followers}</td>
                        <td>{following}</td>
                        <td>{created}</td>
                    </tr>
                </table>
                </div>)}
        </div>
    )
}

export default SearchBar