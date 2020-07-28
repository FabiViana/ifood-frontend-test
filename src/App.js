import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  const authEndpoint = 'https://accounts.spotify.com/authorize?';
  const clientId = 'e1c0e1be282549f5abdbcdc6bc2b4ee2';
  const redirectUri = 'http://localhost:3000';
  const scopes = ["user-read-currently-playing",
  "user-read-playback-state",];

  const hash = window.location.hash
    .substring(1)
    .split('&')
    .reduce(function (initial, item) {
      if (item) {
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});
  // window.location.hash = '';
  console.log(window.location)
  useEffect(() => {
    console.log(hash)
  },[])
  return (
    <div>
      <a
        className="btn btn--loginApp-link"
        href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
      >
        Login to Spotify
      </a>
    </div>
  );
}

export default App;
