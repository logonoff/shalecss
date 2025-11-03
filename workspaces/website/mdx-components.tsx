import { Code, H1, H2, H3, H5, H6 } from '@shalecss/react';
import type { MDXComponents } from 'mdx/types';
import { H4, P } from '../react/src/components/Typography';

const shaleComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  code: Code,
  pre: (props) => <Code Component="pre" {...props} />,
} satisfies MDXComponents;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...shaleComponents,
  };
}
