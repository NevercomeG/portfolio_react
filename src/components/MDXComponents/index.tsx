import H1 from './H1';
import H2 from './H2';
import P from './P';
import BlockQuote from './blockquote';
import HeroImage from './HeroImage';
import FooterQuote from './FooterQuote';
import Alert from './Alert';
import Button from '@/components/MDXComponents/Button';
import CalloutBox from '@/components/MDXComponents/CalloutBox';
import CodeSnippet from '@/components/MDXComponents/CodeSnippet';
import FeatureCard from '@/components/MDXComponents/FeatureCard';
import IconText from '@/components/MDXComponents/IconText';
import ProgressBar from '@/components/MDXComponents/ProgressBar';
import TabGroup from '@/components/MDXComponents/TabGroup';
import Quote from '@/components/MDXComponents/Quote';

// Define los componentes que el MDX puede renderizar
const MDXComponents = {
  h1: H1,
  h2: H2,
  p: P,
  blockquote: BlockQuote,
  HeroImage,
  FooterQuote,
  Alert,
  CalloutBox,
  CodeSnippet,
  FeatureCard,
  IconText,
  ProgressBar,
  TabGroup,
  Button,
  Quote,
};

export default MDXComponents;
