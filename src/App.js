import logo from './logo.svg';
import './App.css';
import FacebookLogin from 'react-facebook-login';

function App() {

  const responseFacebook = (response) => {
    console.log(response); // Handle the response from Facebook login
    // You can send the response to your backend for further processing
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


      <div>
      <h2>Login with Facebook</h2>
      <FacebookLogin
        appId="1089471788931508"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
      />
    </div>
    </div>
  );
}

export default App;
