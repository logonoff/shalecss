# `@shalecss/react`

[![NPM Version](https://img.shields.io/npm/v/%40shalecss%2Freact)](https://www.npmjs.com/package/@shalecss/react)
[![GitHub License](https://img.shields.io/github/license/logonoff/shalecss)](https://github.com/logonoff/shalecss/blob/main/LICENSE)

A pseudo-skeuomorph React component library built on [@shalecss/core](https://www.npmjs.com/package/@shalecss/core).

## Installation

```bash
npm install @shalecss/react @shalecss/core
```

## Usage

Import the core CSS and use the components:

```jsx
import "@shalecss/core/dist/shale.css";
import { Button, Card, Input } from "@shalecss/react";

export default () => {
  return (
    <Card>
      <Input type="text" placeholder="Enter text..." />
      <Button>Submit</Button>
    </Card>
  );
};
```

## Documentation

See the full documentation at [https://logonoff.co/shalecss](https://logonoff.co/shalecss)
