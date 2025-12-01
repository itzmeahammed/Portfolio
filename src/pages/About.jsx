import AboutHero from '../components/about/AboutHero';
import AboutStats from '../components/about/AboutStats';
import AboutSkills from '../components/about/AboutSkills';
import AboutExperience from '../components/about/AboutExperience';
import AboutCTA from '../components/about/AboutCTA';

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden">
      <AboutHero />
      <AboutStats />
      <AboutSkills />
      <AboutExperience />
      <AboutCTA />
    </div>
  );
};

export default About;
