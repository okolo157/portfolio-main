import { useState, useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3,
  faGit,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
  faLinkedin,
  faGithub,
  faSquareXTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

import './index.scss';

const AnimatedLetters = lazy(() => import('../AnimatedLetters'));

const LETTER_ANIMATION_DELAY = 4000;
const CONTENT_DELAY = 3000;

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/victor-okolo-b76203226/',
    icon: faLinkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://twitter.com/vic_szn',
    icon: faSquareXTwitter,
    label: 'Twitter',
  },
  {
    href: 'https://github.com/okolo157',
    icon: faGithub,
    label: 'GitHub',
  },
  {
    href: 'https://wa.me/2349110591628',
    icon: faWhatsapp,
    label: 'WhatsApp',
  },
];

const Button = ({ isExternal, href, label, to }) => {
  return isExternal ? (
    <a target="_blank" rel="noreferrer" href={href} className="btn">
      {label}
    </a>
  ) : (
    <Link to={to} className="btn">
      {label}
    </Link>
  );
};

const SocialIcons = ({ links }) => (
  <div className="social-icons fade-in">
    {links.map((link, index) => (
      <a
        key={index}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
      >
        <FontAwesomeIcon icon={link.icon} className="social-icon" />
      </a>
    ))}
  </div>
);

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [showContent, setShowContent] = useState(false);

  const nameArray = ' Victor Okolo'.split('');

  useEffect(() => {
    const letterAnimationTimeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, LETTER_ANIMATION_DELAY);

    const contentTimeout = setTimeout(() => {
      setShowContent(true);
    }, CONTENT_DELAY);

    return () => {
      clearTimeout(letterAnimationTimeout);
      clearTimeout(contentTimeout);
    };
  }, []);

  return (
    <>
      <div className="home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <Suspense fallback={<div>Loading...</div>}>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={12}
              />
            </Suspense>
          </h1>

          {showContent && (
            <>
              <h2 className="fade-in">
                Full-Stack Developer | Video Editor | Entrepreneur
              </h2>
              <SocialIcons links={socialLinks} />
              <div className="btn-container fade-in">
                <div className="cv-btn">
                  <Button
                    isExternal={true}
                    href="https://flowcv.com/resume/ilbnbmi60q"
                    label="<Resume />"
                  />
                </div>
                <div className="cv-btn">
                  <Button isExternal={false} to="/portfolio" label="<Portfolio />" />
                </div>
              </div>
            </>
          )}
        </div>

        {showContent && (
          <div className="stage-cube-cont fade-in">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faNodeJs} color="#68A063" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGit} color="#EC4D28" />
              </div>
            </div>
          </div>
        )}
      </div>

      {!showContent && <Loader type="pacman" />}
    </>
  );
};

export default Home;