import H1 from './H1';
import H2 from './H2';
import P from './P';
import BlockQuote from './blockquote';
import HeroImage from './HeroImage';

// Define los componentes que el MDX puede renderizar
const MDXComponents = {
  h1: H1,
  h2: H2,
  p: P,
  blockquote: BlockQuote,
  HeroImage,
};

export default MDXComponents;
