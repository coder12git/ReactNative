A brief document explaining my project structure, libraries used, and instructions for running the app on both mobile and web platforms. 

# STRUCTURE OF PROJECT

I have built my entire React Native app using Expo which is a set of tools and services built around React Native. I have chosen Expo instead of React Native CLI because of it’s simplicity and due to the reason that the project is not more complex here, that’s why I decided to go ahead with Expo.

## PROJECT STRUCTURE :

App.js: The App.js file is the default screen of our project. It is the root file that loads after running the development server with npx expo start.

app.json: The app.json file contains configuration options for the project.

assets folder: The assets folder contains adaptive-icon.png used for Android and an icon.png used for iOS as an app icon. It also contains splash.png which is an image for the project's splash screen and a favicon.png if the app runs in a browser.

components folder: The components folder contains the reusable two basic components for Data Entry Form and Data Visualization features. I have made these components in a way so that it can work completely on both mobile and web platforms.
- DataEntryForm.js - This is the component for Data Entry form within the app.
- DataDashboard.js - This is the component for showing the data in graphs and dashboards within the app.

context folder: I have made two Context API here for managing state across the app. Context provides a way to pass data through the component tree without having to pass props down manually at every level.
- HandlingDataContext.js - This contains context code for handling data between the  form and visualisation components.
- ThemeContext.js - This contains the context code for handling the theme(light, dark mode) across the app for both mobile and web platforms.

## Other Standard files

.gitignore:  Contains all files and folders that I don't want to be tracked by Git.

babel.config.js: Applies the babel-preset-expo preset that extends the default React Native preset and adds support for decorators, tree-shaking web packages, and loading font icons with optional native dependencies.

package.json: Contains the project's dependencies, scripts and metadata

## Libraries used

react-native-vector-icons/FontAwesome: Library for displaying light and dark mode icons for switching themes.

Recharts: Used this for showing the entered data in graphical form, for web platforms.

react-native-table-component: Used this for showing the entered data in dashboard form, for mobile platforms.

These were the main three libraries that I have used in my project. Other than this I have used other libraries and modules that were directly imported for React Native for building user interfaces, handling state, navigation, and styling components.

## Instructions for running the app

- Navigate to the app directory by running this command - 
  `cd app`
- Install all dependencies by running this command inside app directory -
  `npm install`
- Inside the app directory, start the project using this command - 
  `npx expo start --tunnel`

This command will start the app for you for both mobile and web platforms.

For Mobile platform - On android you can install the **Expo Go** app and scan the QR code from your terminal to open this app and On iOS, use the built-in QR code scanner of the default iOS Camera app.

For Web - You will get a URL in your terminal that says `Web is waiting on http://localhost:8081`
Just open that URL to view this app on web platforms.
