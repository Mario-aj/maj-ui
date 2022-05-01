# Welcome to maj-ui

maj-ui is a React-based UI toolkit for the web.<br />
This page describes how to get started building an application with maj-ui.

## Documentation.

You can find the doc [here](https://mario-aj.github.io/maj-ui/)

# Installation

Install it with package manager npm or yarn (Yarn is used in this example):

```bash
  yarn add maj-ui
```

Then, you need to add a css file to your entry point file: (`src/index.tsx` or `src/index.jsx`)

```jsx
import 'maj-ui/dist/index.css';
```

# Usage

Using Button component form package.

```jsx
import { Button } from 'maj-ui';

const IncrementButton = () => {
  return (
    <Button
      label="increment"
      startIcon={props => <Plus {...props} />}
      appearence="primary"
      onClick={onIncrement}
    />
  );
};
```

## Run the project on your machine

#### Clone the repository

```
 git clone git@github.com:Mario-aj/maj-ui.git
 cd maj-ui
```

#### Installing dependencies

```
 yarn
```

#### Run the project

```
 yarn dev
```

You can check that it worked by browsing `http://localhost:6006/`.

## Deployment

Merging to the `main` branch will automatically deploy to github pages.

## Contributing

I'd love to have your helping hand on <strong>maj-react-ui</strong>! See <a href="https://github.com/Mario-aj/react-ui/blob/dev/CONTRIBUTING.md">CONTRIBUTING.md</a> for more information on how to get started.

## <img class="emoji" height="20" width="20"  src="https://github.githubassets.com/images/icons/emoji/unicode/1f4dc.png" alt="licence-icon"/> License

maj-ui is [MIT licensed](https://github.com/Mario-aj/maj-ui/blob/dev/LICENSE)

## ✍🏻 Creator

<a href="https://www.linkedin.com/in/m%C3%A1rio-alfredo-jorge-0370b61b4/">Mário Alfredo Jorge</a>
