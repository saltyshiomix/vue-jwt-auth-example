## Overview

- Vue + Vuex + JWT Authentication
- Fake API server when `process.env.NODE_ENV !== production`

## Installation

```zsh
$ yarn (or `npm install`)
```

## Usage

### Development Mode

```zsh
$ cp .env.example .env
$ yarn dev
```

### Production Mode

```zsh
# first, write `.env` for production

# then, build sources
$ yarn build (or `npm run build`)

# finally, serve dist directory
$ yarn start (or `npm start`)
```

## References

[Vue CLI](https://cli.vuejs.org)
