# Mayoral Frontend Assignment

This repository contains my solution for the frontend technical test proposed by Mayoral.

This project is a fork of [this](https://github.com/JB-mayoral/mayoral-assignment) template repository I was provided with, and contains my solution for the tasks described in its README file.

## Installation

Before installing the dependencies, make sure that your node version matches the one in [the .nvmrc file](./.nvmrc). If you have nvm installed, you can run:

```bash
nvm use
```

Then, you can install the dependencies with:

```bash
yarn
```

## Run the project

You can run this project in dev mode, or build it and serve it.

### Run the project in dev mode

You can run the project in dev mode with:

```bash
yarn dev
```

### Build and serve the project.

You can build the project with:

```bash
yarn build
```

And then serve it with:

```bash
yarn start
```

## Tests

This project uses [jest](https://jestjs.io/) to run unit tests. You can run them with:

```bash
yarn test
```

## Linting

This project uses [ESLint](https://eslint.org/) as a linting tool to ensure consistent code quality and formatting. You can run it with:

```bash
yarn lint
```

## Considerations and Decisions

During the development of this technical assignment, I took the following considerations and decisions that I'd like to highlight:

- **Mobile-first design**. I used a mobile-first approach, loading the mobile styles first to adapt it later for non-mobile devices if needed. This ensures better performance for mobile users with limited hardware, while non-mobile users experience minimal impact.

- **Design approximation**. I selected sizes and colors manually based on the reference screenshots. If the design was in a tool like Figma, I could have been more precise.

- **Images**. The used images from [picsum photos](https://picsum.photos/), a free images provider for test projects, to avoid the risk of using copyrighted images. Because of that, the images in the project are different from the ones in the templates.
