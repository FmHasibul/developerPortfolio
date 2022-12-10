
import './App.css';
import ContactMe from './Components/ContactMe/ContactMe';
import Homebanner from './Components/HomeBanner/Homebanner';
import Project from './Components/Project/Project';
import Skills from './Components/Skills/Skills';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className="App container mx-auto">
      <Header />
      <Homebanner />
      <Skills />
      <Project />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
