import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App bg-dark text-bookmark-white">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Work></Work>
      <Contact></Contact>
    </div>
  );
}

export default App;
