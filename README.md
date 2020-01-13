<p align="center">
  <img src="https://i.imgur.com/NOvIUVl.png">
  <img src="https://i.imgur.com/RftS3im.png">
</p>

## Overview

- [Vue](https://vuejs.org) + [Vuex](https://vuex.vuejs.org) + [JWT](https://jwt.io) Authentication
- Fake API server when `process.env.NODE_ENV !== production`
- [Bulma](https://bulma.io) for styling by using [Sass](https://sass-lang.com)
- [ESLint](https://eslint.org) with [TypeScript](https://www.typescriptlang.org)

## Installation

```zsh
$ yarn (or `npm install`)
```

## Usage

### Linting

```zsh
$ yarn lint (or `npm run lint`)
```

### Development Mode

```zsh
$ cp .env.example .env
$ yarn dev (or `npm run dev`)
```

### Production Build

```zsh
# first, write `.env` for production

# then, build sources
$ yarn build (or `npm run build`)
```

## Production Deployment

Because this is a single page application, we must set rewrite rules in the server side.

For example, an nginx config is like this:

```
location / {
  try_files $uri $uri/ /index.html;
}
```

For more information, please check out [HTML5 History Mode of Vue Router](https://router.vuejs.org/guide/essentials/history-mode.html).

## References

[Vue CLI](https://cli.vuejs.org)
