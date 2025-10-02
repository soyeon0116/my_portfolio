import AboutMe from '@/domains/common/components/aboutMe/AboutMe';
import Career from '@/domains/common/components/career.tsx/Career';
import Introduce from '@/domains/common/components/Intro/Introduce';

export default function Home() {
  return (
    <>
      <Introduce />
      <AboutMe />
      <Career />
    </>
  );
}
