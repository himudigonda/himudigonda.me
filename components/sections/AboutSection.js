import { styled } from '../../stitches.config'; // Adjusted path
import { ButtonPrimary } from '../ButtonPrimary'; // Adjusted path
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import Pronunciation from '../Pronunciation'; // Adjusted path
import Toast from '../Toast'; // Adjusted path
import copyBioIcon from '../../public/static/icons/copy-bio.json'; // Adjusted path
import downloadIcon from '../../public/static/icons/download.json'; // Adjusted path

// Props passed from pages/index.js: title, description, tagline, primaryColor, secondaryColor
export default function AboutSection(props) {
  const { description } = props; // title, tagline, primaryColor, secondaryColor are available but not explicitly used in this extracted content rendering logic, they were for Base.js
  const [toastTitle, setToastTitle] = useState('');
  const [toastDescription, setToastDescription] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const copyBioRef = useRef();
  const downloadRef1 = useRef();
  const downloadRef2 = useRef();

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0 && countdown !== null) {
      window.open(
        'https://docs.google.com/document/d/1CKc8khM8-MQzm2kvYjrlrGvkbN9oZyH9YCuXJPehxFE/edit?usp=sharing',
        '_blank',
        'noopener,noreferrer'
      );
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const downloadHeadshot = () => {
    setToastTitle('Downloading...');
    setToastDescription('The headshot is being downloaded.');
    setShowToast(true);
  };

  const showResume = () => {
    setToastTitle('Opening Resume...');
    setToastDescription('The resume will open in Google Docs in 3 seconds.');
    setShowToast(true);
  };

  const copyBio = e => {
    e.preventDefault();
    navigator.clipboard.writeText(description);
    setToastTitle('Copied Bio to Clipboard 📋');
    setToastDescription('You can now share or paste it anywhere.');
    setShowToast(true);
  };

  const renderIntro = () => (
    <Container>
      <Section>
        <Image
          alt="Himansh"
          src="/static/images/avatar.png" // Path should be absolute from /public
          width="336"
          height="336"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
          priority
        />
      </Section>
      <Section>
        <Paragraph css={{ textAlign: 'justify', marginTop: '16px', '@bp2': { marginTop: '-6px' } }}>
          <strong> Hi, I'm Himansh Mudigonda  </strong>
          <Pronunciation />
          I design  <strong>  high-performance, scalable AI systems  </strong>  that bridge research and production.
          Specializing in  <strong>  Machine Learning, Large Language Models, and Distributed Systems  </strong>  ,
          I focus on building  <strong>  robust ML pipelines, optimizing transformer architectures,
            and deploying cloud-native AI solutions  </strong>  that don’t just function—they perform at scale.
        </Paragraph>
        <Paragraph css={{ textAlign: 'justify', marginTop: '16px', '@bp2': { marginTop: '-6px' } }}>
          My work revolves around  <strong>  LLM fine-tuning, MLOps automation, and real-time inference  </strong>  ,
          ensuring AI systems are efficient, ethical, and production-ready. I thrive in environments where
           <strong>  precision, scalability, and impact  </strong>  matter—whether it’s optimizing
           <strong>  large-scale AI deployments  </strong>  or solving  <strong>  complex real-world challenges  </strong>  .
          Beyond code, I push the boundaries of  <strong>  generative AI  </strong>  , fine-tune  <strong>  Linux kernels  </strong>
          for performance, and experiment with  <strong>  speed-solving algorithms  </strong>  . When I’m not working on AI,
          you’ll find me hiking new trails, crafting melodies on my  <strong>  guitar  </strong>  , or seeking the
           <strong>  perfect brew of coffee  </strong>  .
        </Paragraph>
      </Section>
    </Container>
  );

  const renderBio = () => {
    const btnStyle = { display: 'inline-flex', justifyContent: 'center', alignItems: 'center' };
    const iconStyle = { width: 24, height: 24, marginRight: 8 };
    return (
      <div>
        <p>A formal definition.</p>
        <blockquote>
          <Paragraph css={{ textAlign: 'justify', marginTop: '16px', '@bp2': { marginTop: '-6px' } }}>
            {description}
          </Paragraph>
        </blockquote>
        <ButtonsContainer>
          <ButtonPrimary as="button" style={btnStyle} onClick={copyBio} onMouseEnter={() => copyBioRef.current?.play()} onMouseLeave={() => copyBioRef.current?.stop()}>
            <Lottie lottieRef={copyBioRef} style={iconStyle} animationData={copyBioIcon} loop={false} autoplay={true} />
            Copy Bio
          </ButtonPrimary>
          <span style={{ margin: '0 20px 0 10px' }}>•</span>
          <ButtonPrimary as="a" download role="button" href="/static/images/avatar.png" style={btnStyle} onClick={downloadHeadshot} onMouseEnter={() => downloadRef1.current?.play()} onMouseLeave={() => downloadRef1.current?.stop()}>
            <Lottie lottieRef={downloadRef1} style={iconStyle} animationData={downloadIcon} loop={false} autoplay={true} />
            Download Headshot
          </ButtonPrimary>
          <span style={{ margin: '0 20px 0 10px' }}>•</span>
          <ButtonPrimary as="a" href="https://docs.google.com/document/d/1CKc8khM8-MQzm2kvYjrlrGvkbN9oZyH9YCuXJPehxFE/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style={btnStyle} onClick={e => { e.preventDefault(); setCountdown(3); showResume();}} onMouseEnter={() => downloadRef2.current?.play()} onMouseLeave={() => downloadRef2.current?.stop()}>
            <Lottie lottieRef={downloadRef2} style={iconStyle} animationData={downloadIcon} loop={false} autoplay={false} />
            {countdown > 0 ? `Viewing in ${countdown}...` : 'View Resume'}
          </ButtonPrimary>
        </ButtonsContainer>
      </div>
    );
  };

  return (
    <>
      {/* Head component removed, title/meta handled by pages/index.js */}
      {renderIntro()}
      <h2>Bio</h2> {/* This h2 might be redundant if pages/index.js adds an h2 for the section already */}
      {renderBio()}
      <Toast title={toastTitle} description={toastDescription} isSuccess={true} showToast={showToast} setShowToast={setShowToast} />
    </>
  );
}

// Styled components previously in pages/about.js
const Container = styled('div', { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', '@bp2': { flexDirection: 'row' } });
const Paragraph = styled('p', { '@bp2': { margin: '15px 0' } });
const ButtonsContainer = styled('p', { display: 'flex', alignItems: 'center' });
const Section = styled('div', { marginTop: '0px', width: 'auto', '@bp2': { width: '48%' } });
