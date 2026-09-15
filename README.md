# WTWR (What to Wear?)

## About the project

The idea of the application is pretty simple - we make a call to an API, which then responds with the daily weather forecast. We collect the weather data, process it, and then based on the forecast, we recommend suitable clothing to the user.

## Links

- [Figma Design](https://www.figma.com/file/DTojSwldenF9UPKQZd6RRb/Sprint-10%3A-WTWR)

# Project 11: WTWR (What to Wear?)

### Overview

- Intro
- Description
- Functionality
- Technologies and Techniques
- Figma

## Description

This project continues the development of the weather-based clothing application called WTWR (What to Wear?). The application helps users decide what clothing to wear based on the current weather conditions.

Project 11 builds on the functionality created in Project 10 by adding more advanced React features and API interaction. The application now allows users to navigate between the main page and a profile page, switch the displayed temperature between Fahrenheit and Celsius, add new clothing items, view clothing items, and delete clothing items.

The project was built using HTML, CSS, JavaScript, React, React Router, Context, and APIs. Weather information is retrieved from a weather API, while clothing items are retrieved and managed through a separate API.

## Functionality

The application displays the current weather and temperature and recommends clothing items based on whether the weather is hot, warm, or cold.

Users can click on a clothing card to open a modal and view a larger image of the selected item. The modal also provides the option to delete the clothing item.

Before an item is deleted, a confirmation modal appears asking the user to confirm the action. If the user selects "Yes, delete item," a DELETE request is sent to the server and the item is removed from the application. The user can also cancel the action without deleting the item.

Users can add new clothing items using the Add Clothes form. When a new item is submitted, a POST request sends the clothing information to the server and the new item is added to the application's clothing list.

The application includes a temperature toggle that allows users to switch between Fahrenheit and Celsius. React Context is used to make the selected temperature unit available to the components that need it.

React Router is used to provide navigation between the main page and the Profile page. The Profile page contains a sidebar and a clothing section where the user's clothing items are displayed.

The application is separated into reusable components including the Header, Main, WeatherCard, ItemCard, ItemModal, AddItemModal, DeleteConfirmationModal, Profile, SideBar, ClothesSection, ToggleSwitch, and Footer.

## Technologies and Techniques

The project uses HTML, CSS, JavaScript, React, React Router, React Context, and APIs to create an interactive weather-based clothing application.

HTML-like JSX is used inside React components to structure elements such as headings, buttons, forms, images, clothing cards, and modal windows.

CSS is used to style the application and follow the provided Figma design. It controls the layout, spacing, typography, colors, buttons, clothing cards, profile page, temperature toggle, and modal windows.

JavaScript is used to handle the application's functionality and user interactions. Event handlers are used for opening and closing modals, selecting clothing cards, adding items, deleting items, and switching between temperature units.

React is used to organize the application into reusable components. Props are used to pass information and functions between components. The `useState` hook manages changing data such as weather information, clothing items, selected cards, active modals, and the current temperature unit.

The `useEffect` hook is used to retrieve weather information and clothing items when the application first loads.

React Context is used with `useContext` to share the current temperature unit and temperature toggle function with components without having to pass those values through every component manually.

React Router is used to create different routes in the application. Users can navigate between the main weather page and the Profile page without reloading the entire application.

The Fetch API is used to communicate with the server. GET requests retrieve clothing items, POST requests add new clothing items, and DELETE requests remove clothing items from the server.

JavaScript array methods such as `map()` and `filter()` are used to display clothing cards and update the clothing list after an item is deleted.

## Intro

WTWR is an interactive web application designed to help users decide what to wear based on the current weather.

Project 11 expands the application by introducing more advanced React concepts, including routing, Context, API requests, and additional state management.

Building this project provided practice working with reusable React components, props, state, hooks, Context, React Router, event handlers, conditional rendering, API requests, and asynchronous JavaScript.

The application is separated into reusable components to keep the code organized and make it easier to maintain and expand.

## Figma

The application was created based on a provided Figma design. The Figma design was used as a reference for the application's layout, typography, colors, spacing, weather display, clothing cards, profile page, temperature toggle, buttons, and modal windows.

The goal was to make the finished application closely match the original design while adding the required functionality using JavaScript and React.

- [Link to the project on Figma](https://www.figma.com/file/DTojSwldenF9UPKQZd6RRb/Sprint-10%3A-WTWR)

## Images

![Main page](image-1.png)

![Profile page](image-2.png)

![Delete confirmation modal](image-3.png)

## Final Project Deployment Link

[GitHub Repository](https://github.com/cephasabiangama22-design/se_project_react.git)

## React + Vite

This project uses React with Vite for development and building the application.

Vite provides a fast development environment with Hot Module Replacement (HMR), allowing changes to appear quickly while developing the application.

The project also uses ESLint to help maintain consistent JavaScript and React code.

## Project Pitch Video

**Loom Video**

Add Project 11 Loom video link here.
