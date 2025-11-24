# Currency Converter
A simple, fully functional currency calculator built with React.

> This single-page application (SPA) was created to practice **React fundamentals**, focusing on state management, component composition, and controlled form handling.

> Language of the page: **Polish**

<img width="200" alt="Currency Converter icon" src="https://github.com/user-attachments/assets/26a64763-aa9d-4051-8afc-b61625a569ae" />

---

## Demo

**Check the website:** [https://mg-wiewiora.github.io/currency-converter-react/](https://mg-wiewiora.github.io/currency-converter-react/)

---

## Functionality (PLN to Selected Currency)

This application allows users to convert an amount from Polish Złoty (PLN) to a selected foreign currency based on predefined exchange rates.

**Key Features:**

* **Conversion:** Calculates the converted amount based on the input value (PLN) and selected currency rate.
* **Controlled Form:** Manages user input using the **`useState` hook** for amount and currency selection.
* **Rate Data:** Stores exchange rates in a static JavaScript array.
* **State Lifting:** The resulting calculation is managed in the parent component and passed to child components via props.
* **Live Clock:** Displays the current date and time, updated every second using **`useEffect`** with proper cleanup.
* **Persistent Data:** Optionally stores last used values in **`localStorage`**.
* **Styled Components:** Uses **styled-components** for modular, theme-based styling.
* **Custom Hooks:** Implements reusable logic (like the live clock) with custom React hooks.

---

## Technologies & Focus

This project emphasizes essential React patterns and modern JavaScript practices:

* **Framework:** React
* **Language:** JavaScript (ES6+)
* **State Management:** `useState` for component state
* **Side Effects:** `useEffect` for time updates and other effects
* **Styling:** **styled-components** with theming
* **Data Storage:** `localStorage` for persistent state
* **Custom Hooks:** Encapsulated reusable logic (e.g., live date/time)

---

## Key Learning Points

This project provided practical experience with:

1. **Controlled Forms:** Linking `<input>` and `<select>` elements to state via `value` and `onChange`.
2. **Component Composition:** Breaking the UI into reusable components (`Header`, `Container`, `Form`, `Result`, `Footer`).
3. **Core Logic Handling:** Implementing currency conversion and safely passing calculation functions as props.
4. **Conditional Rendering:** Displaying results only after calculation.
5. **Side Effects & Cleanup:** Using `useEffect` to handle intervals for the live clock, ensuring cleanup with `clearInterval`.
6. **Theming & Styled Components:** Centralized styles with `ThemeProvider` and modular styled-components.
7. **Persistent State:** Using `localStorage` to remember user selections or last input.
8. **Custom Hooks:** Creating reusable hooks to encapsulate logic like time tracking.

---

![gif - how to interact with the page](https://github.com/user-attachments/assets/4e6559fe-0869-41ff-927a-ef00d55e6417)

![gif - responsiveness of the page](https://github.com/user-attachments/assets/9c2d504b-26e6-4a48-a92e-68fce7081423)

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

---

## Author

**Małgorzata Wiewióra** - [my GitHub profile](https://github.com/mg-wiewiora)
