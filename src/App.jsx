import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieLanding from './components/MovieLanding';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import HelpPage from './components/HelpPage';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Main Content */}
      <main>
        {children}
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MovieLanding />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}


export default App;
