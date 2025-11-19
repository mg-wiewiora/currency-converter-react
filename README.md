# Currency Converter
Simple, yet fully functional currency calculator application built with React.

> This project is a simple, single-page application (SPA) created to practice the fundamentals of **React**, focusing on state management, component composition, and handling user input in a controlled form environment.

> This project was created as part of learning Front-end fundamentals.
>
> Language of the page: **Polish**
>


<img width="200" alt=" Currency Converter icon" src="https://github.com/user-attachments/assets/26a64763-aa9d-4051-8afc-b61625a569ae" />


---

## Demo

**Check the website:** [https://mg-wiewiora.github.io/currency-converter-react/](https://mg-wiewiora.github.io/currency-converter-react/)

---

## Functionality (PLN to Selected Currency)

This application allows users to convert an amount from Polish Złoty (PLN) to a selected foreign currency based on a predefined exchange rate table.

**Key Features:**

* **Conversion:** Calculates the converted amount based on the input value (PLN) and the selected currency rate.
* **Controlled Form:** Manages user input for the amount and selection of the currency using the **`useState` hook**.
* **Rate Data:** Uses static, predefined exchange rates for calculation.
* **State Lifting:** Application state (the resulting calculation) is managed in the parent component (`App`) and passed to the child component (`Form`) via props.

---

## Technologies & Focus

The project emphasizes essential React principles and modern JavaScript practices for form handling.

* **Framework:** **React**
* **Language:** JavaScript (ES6+)
* **State Management:** **`useState` hook** for all application state.
* **Styling:** Standard **CSS** utilizing the **BEM** conventions for organization and basic responsiveness (`@media` queries).
* **Data Structure:** Uses a **JavaScript array of objects** to store currency data and exchange rates.

---

## Key Learning Points

This project provided practical experience with:

1.  **Controlled Forms:** Mastering the connection between form elements (`<input>`, `<select>`) and the component's state using `value` and `onChange` handlers.
2.  **Component Composition:** Building the application using several simple, reusable components (`Header`, `Container`, `Form`, `Result`, `Footer`).
3.  **Basic Logic Handling:** Implementing the core conversion logic and safely passing the required calculation function as a prop (`calculateResult`).
4.  **Conditional Rendering:** Safely displaying the result only when the calculation has been performed (e.g., using `result?.resultAmount && !isNaN(...)` for robust rendering).

---

![gif - how to interact with the page](https://github.com/user-attachments/assets/3de0c9bb-88da-4bf8-97d2-243ab9d1a40f)


![gif - responsiveness of the page](https://github.com/user-attachments/assets/264e5c3a-9235-4a79-ab09-46c47d965748)

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
