"use client";

import * as shalecss from "@shalecss/react";
import { Code, Note } from "@shalecss/react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";

interface LiveExampleProps {
  code: string;
}

/**
 * Client component that renders a live code example using react-live. Expects
 * plain JSX code that can be rendered directly.
 */
export const LiveExample: React.FC<LiveExampleProps> = ({ code }) => {
  return (
    <LiveProvider code={code} scope={shalecss} noInline={false}>
      <Note Component={LiveError} variant="alert" />
      <LivePreview />
      <Code
        Component={LiveEditor}
        style={{ background: "rgb(1, 22, 39)", overflowX: "scroll" }}
      />
    </LiveProvider>
  );
};
