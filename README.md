[![NPM Version](https://img.shields.io/npm/v/react-daisyui.svg?branch=master)](https://www.npmjs.com/package/react-daisyui) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-daisyui)](https://bundlephobia.com/result?p=react-daisyui) [![License](https://img.shields.io/npm/l/react-daisyui.svg)](https://github.com/daisyui/react-daisyui/blob/master/LICENSE)

# react-daisyui 🌼

DaisyUI components built with React, Typescript and TailwindCSS.

<a href="https://daisyui.github.io/react-daisyui/">Check out our Storybook!</a>

---

## 💿 Install

Make sure you've installed <a href="https://tailwindcss.com/docs/installation">TailwindCSS</a> and <a href="https://daisyui.com/docs/install/">daisyUI</a>.

Install the package with npm or yarn:

```bash
npm install react-daisyui
```

To prevent TailwindCSS from purging your styles, add the following line to your tailwind.config.js:

```js
module.exports = {
  content: [],
  safelist: [
    {
      pattern: /./
    },
  ],
  ...
  plugins: [require("daisyui")],
}
```

## ⚡ Quick Start

Import react-daisyui components within your component files:

```js
import { Button } from 'react-daisyui'

export default (props) => {
  return <Button color="primary">Click me!</Button>
}
```

## 🎨 Themes

To apply a theme (or multiple themes) to a page or components, import the Theme component and wrap your content:

```js
import { Theme, Button } from 'react-daisyui'

export default (props) => {
  return (
    <>
      <Theme dataTheme="dark">
        <Button color="primary">Click me, dark!</Button>
      </Theme>

      <Theme dataTheme="light">
        <Button color="primary">Click me, light!</Button>
      </Theme>
    </>
  )
}
```

Use tools like the official <a href="https://daisyui.com/theme-generator/">daisyUI Theme Generator</a> or <a href="https://themes.ionevolve.com/">daisyUI Theme Builder</a> to easily create your own themes.

---

## 🚧 Components To-Do

<details>
<summary>Actions:</summary>
  
- [x] Button
- [X] Dropdown
- [X] Modal
- [X] Swap
</details>

<details>
<summary>Data Display:</summary>
  
- [x] Alert
- [X] Avatar
- [X] Badge
- [X] Card
- [X] Carousel
- [X] Collapse
- [X] Countdown
- [X] Kbd
- [X] Progress
- [X] Radial Progress
- [X] Stats
- [X] Table
- [X] Tooltip
</details>

<details>
<summary>Data Input:</summary>

- [x] Checkbox
- [x] Input
- [x] Radio
- [x] Range
- [x] Rating
- [x] Select
- [x] Textarea
- [x] Toggle
</details>

<details>
<summary>Layout:</summary>

- [x] Artboard
- [x] Button-Group
- [x] Divider
- [x] Drawer
- [x] Footer
- [x] Hero
- [x] Indicator
- [x] Input Group
- [x] Mask
- [x] Stack
</details>

<details>
<summary>Navigation:</summary>

- [x] Breadcrumbs
- [x] Link
- [x] Menu
- [x] Navbar
- [x] Pagination
- [x] Steps
- [x] Tab
</details>

<details>
<summary>Mockup:</summary>

- [x] Code
- [x] Phone
- [x] Window
</details>

## Contributions

We're looking for contributors on this component library! We could use some help building out stories and writing unit tests for components.

### Creating new components

Run `npm run generate component ${your_new_component_name}`. The generator will ask a few questions and setup the component for you.

When you'e done, export the component from `index.tsx` and open a PR.

---

### License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/daisyui/react-daisyui/blob/main/LICENSE) file for details.
