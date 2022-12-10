
import './App.css';
import ContactMe from './Components/ContactMe/ContactMe';
import Homebanner from './Components/HomeBanner/Homebanner';
import Project from './Components/Project/Project';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className="App container mx-auto">
      <Header />
      <Homebanner />
      <Project />
      <ContactMe />
    </div>
  );
}

export default App;
