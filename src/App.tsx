import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Insights from './pages/Insights';
import NewsDetail from './pages/NewsDetail';
import EscavadeirasHidraulicas from './pages/EscavadeirasHidraulicas';
import Contato from './pages/Contato';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename="/brasland-site">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:id" element={<NewsDetail />} />
            <Route path="/escavadeiras" element={<EscavadeirasHidraulicas />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
