import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BusinessIdeasPage from './pages/BusinessIdeasPage';
import RoadmapsPage from './pages/RoadmapsPage';
import EbooksPage from './pages/EbooksPage';
import StorybooksPage from './pages/StorybooksPage';
import CourseIdeasPage from './pages/CourseIdeasPage';
import AboutContactPage from './pages/AboutContactPage';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* ✅ Make Hero the default home page */}
        <Route path="/" element={<Hero />} />
        
        {/* ✅ Move Home to its own route */}
        <Route path="/home" element={<Home />} />
        
        <Route path="/business-ideas" element={<BusinessIdeasPage />} />
        <Route path="/roadmaps" element={<RoadmapsPage />} />
        <Route path="/ebooks" element={<EbooksPage />} />
        <Route path="/storybooks" element={<StorybooksPage />} />
        <Route path="/course-ideas" element={<CourseIdeasPage />} />
        <Route path="/about-contact" element={<AboutContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;