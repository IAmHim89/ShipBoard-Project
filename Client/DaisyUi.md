### Docs

- # Tailwind

  https://tailwindcss.com/docs/installation
  https://tailwind.build/classes

- # DaisyUI

  https://daisyui.com/docs/install/

- # DaisyUI+React
  https://react.daisyui.com/?path=/docs/welcome--docs

# Setup Daisy UI+Tailwind with React

## Step 1: Install Tailwind CSS

Run the following commands to install Tailwind CSS and its dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Step 2: Configure Tailwind CSS

After running the above commands, a `tailwind.config.js` file will be generated. Modify it as follows:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Step 3: Add Tailwind Directives

In your `index.css` file, add the following Tailwind CSS directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Step 4: Start the Development Server

Run the following command to start the development server:

```bash
npm run dev
```

## Step 5: Test Your Setup

To test that everything is working, apply the following JSX in your React component:

```jsx
<h1 className="text-3xl font-bold underline">Hello world!</h1>
```

## Step 6: Install DaisyUI

```bash
npm i -D daisyui@latest
```

## Step 7: Add daisyUI to tailwind.config.js:

```javascript
module.exports = {
  //...
  plugins: [require("daisyui")],
};
```

## Step 8: Installing react-daisyUI

```bash
npm i react-daisyui
```

## Step 9: To prevent TailwindCSS from purging your styles, add the following line to your tailwind.config.js:

```js
module.exports = {
  content: [
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  plugins: [require("daisyui")],
};
```
