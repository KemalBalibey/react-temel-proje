import Footer from './components/footer/Footer.js';
import logo from "./logo.svg"
function App() {
  return (
    <div className="App">

      <img src='/logo192.png' />
      <img src={logo} />
      <Footer />
      <p>React kodlama</p>
    </div>
  );
}

export default App;
