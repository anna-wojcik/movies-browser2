# Movies Browser
Movies Browser is a responsive web application that allows users to browse and search for movies and people using data from The Movie Database (TMDB). Users can view detailed movie and person information, including posters, cast, crew, release dates, and more.
<br>Here is a working live demo: https://anna-wojcik.github.io/movies-browser2/#/movies.
<br>This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents
* [Site](#site)
    * [Home page](#home-page)
    * [Movie details page](#movie-details-page)
    * [People page](#people-page)
    * [Person details page](#person-details-page)
* [Technologies Used](#technologies-used)
* [Available Scripts](#available-scripts)
* [Acknowledgements](#acknowledgements)
* [Author](#author)

## Site
The application consists of two main subpages: 
* Movies - includes a list of popular movies and search functionality.
* People - includes a list of popular people and search functionality.

Each item links to a detailed page with more information about the movie or person.

### Home page
Displays a list of the most popular movies fetched from TMBD. Users can navigate through list of movies using pagination at the bottom of the list. Each movie tile includes a title, poster, release date, genres and rating. Users can also search for movies using the search bar. 

![alt text](movies-browser-gif1.gif)

### Movie details page
Includes an overview of the selected movie: backdrop image, title, place of production, release date, genres, rating, description. Users can also view the cast and crew of the movie.

### People page
Depicts a list of popular people fetched from TMBD. Users can navigate through list of people using pagination at the bottom. Clicing on a person leads to their details page.

![alt text](movies-browser-gif2.gif)

### Person details page
Shows detailed information about an individual: biography, birthday and place of birth, profile image. Includes two sections: a list of movies they acted in, and a list of movies where they were part of the crew.

## Technologies Used
- JavaScript ES6
- React
- Redux - Saga, Toolkit
- React Router
- Axios
- Styled Components
- Hooks (useState, useEffect, useHistory, useLocation, useParams, useMemo)
- Custom Hooks
- HTML 5
- CSS 3
- Normalize CSS
- BEM Convention
- Responsive design (Flex, Grid, Media Queries)

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

## Acknowledgements
This application was created as part of the "Frontend Developer from the basis" course from the online programming school YouCode, using data from TMDB API.

## Author
Created by Anna Wójcik.