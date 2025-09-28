import Hero from '../components/Hero';
import BusinessIdeas from '../components/BusinessIdeas';
import Roadmaps from '../components/Roadmaps';
import Ebooks from '../components/Ebooks';
import Storybooks from '../components/Storybooks';
import CourseIdeas from '../components/CourseIdeas';
import Toolkits from '../components/Toolkits';
import Guides from '../components/Guides';
import MiniCourses from '../components/MiniCourses';
import Community from '../components/Community';

const Home = () => {
  return (
    <div>
      <Hero />
      <BusinessIdeas />
      <Roadmaps />
      <Ebooks />
      <Storybooks />
      <CourseIdeas />
      <Toolkits />
      <Guides />
      <MiniCourses />
      <Community />
    </div>
  );
};

export default Home;