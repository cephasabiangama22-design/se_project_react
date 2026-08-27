# Project 10: WTWR (What to Wear?)

### Overview

- Intro
- Description
- Functionality
- Technologies and Techniques
- Figma

## Description

This project focused on creating a weather-based clothing application called WTWR (What to Wear?). The application helps users decide what clothing to wear based on the current weather conditions. The goal was to turn a Figma design into a functional and interactive web application while keeping the layout, colors, spacing, and overall appearance consistent with the original design.

The project was built using HTML, CSS, JavaScript, and React. It also uses weather data from an API to determine the current temperature and recommend clothing items that are appropriate for the weather.

Functionality and Technologies
Functionality

The application displays the current weather and temperature and recommends clothing items based on whether the weather is hot, warm, or cold. Clothing cards are filtered so that users can see items that are appropriate for the current weather conditions.

Users can click on clothing cards to open a modal and view a larger image of the selected item. The application also includes an Add Clothes button that opens a form where users can enter information about a new clothing item.

The application uses reusable components for different sections of the page, such as the header, weather card, clothing cards, modals, main content, and footer.

## Technologies and Techniques

The project uses HTML, CSS, JavaScript, and React to create the application.

HTML is used to provide the basic structure and content of the application. In React, HTML-like JSX is used inside components to create elements such as headings, buttons, forms, images, and containers.

CSS is used to style the application and closely follow the Figma design. It controls the layout, spacing, colors, typography, buttons, clothing cards, weather section, and modal windows. CSS is also used to help the application display properly across different screen sizes.

JavaScript is used to add the application's functionality and interactivity. It handles events such as clicking buttons and clothing cards, filters clothing items based on the current weather, works with data from the weather API, and controls which modal is displayed.

React is used to organize the application into reusable components. Props are used to pass information between components, while React hooks such as useState are used to manage changing data and useEffect is used when retrieving weather information. React also makes it possible to update the interface based on user interactions without reloading the entire page.

The project also uses the Fetch API to retrieve current weather information from an external weather service. JavaScript methods such as map() and filter() are used to work with clothing data and display the appropriate clothing cards.

## Intro

WTWR is an interactive web application designed to help users decide what to wear based on the current weather. Building the project provided practice with HTML, CSS, JavaScript, and React, while also introducing concepts such as reusable components, props, state, hooks, event handlers, conditional rendering, and API requests.

The application is separated into reusable components to keep the code organized and make it easier to maintain and expand.

## Figma

The application was created based on a provided Figma design. The Figma design was used as a reference for the application's layout, typography, colors, spacing, weather display, clothing cards, buttons, and modal windows. The goal was to make the finished application closely match the original design while also adding the required functionality with JavaScript and React.

- [Link to the project on Figma] (https://www.figma.com/design/F03bTb81Pw8IDPj5Y9rc5i/Sprint-10-Project--WTWR?node-id=404-1040&t=Eu3FR3x8Ong2aJXs-0)

**Images**
![alt text](image-1.png)
![alt text](image-2.png)

## final project deployment link

https://github.com/cephasabiangama22-design/se_project_react.git

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
