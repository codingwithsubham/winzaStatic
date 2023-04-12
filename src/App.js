import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrper">
        <h1>Winza Live Games</h1>
        <p>Please click on the download button to download the Game.</p>
        <a href={require('./winza-game.apk')} download>Download</a>
        <p>
          <strong>Hint:</strong> download the app no your device and click on
          install anyway to install on your device. <br />
          Don't worry this Game is completely Harmfree as It won't ask for any
          addition permission on your Device.
        </p>
      </div>
    </div>
  );
}

export default App;
