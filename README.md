# react-developer

> 👨‍💻 your profile on your project site

[![NPM](https://img.shields.io/npm/v/react-jequiti.svg)](https://www.npmjs.com/package/react-jequiti) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
> npm install --save react-developer
```

```bash
> yarn add react-developer
```

## Usage

```tsx
import ReactDeveloper from 'react-developer'

export default function MyApp() {
    return (
      // ... rest of project
      <ReactDeveloper
        avatarUrl={YOUR_AVATAR_URL}
        profileUrl={YOUR_PROFILE_URL}
      />
    )
}
```

## Props

### Required Props: avatarUrl: string & profileUrl: string
Set your profile and avatar url to show in the component

```tsx
  <ReactDeveloper
    avatarUrl='https://github.com/trindadematheus.png'
    profileUrl='https://github.com/trindadematheus'
  />
```

## License

MIT © [trindadematheus](https://github.com/trindadematheus)
