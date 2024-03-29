# Movie-Mania

Movie-Mania is a dynamic web application built with React and bootstrapped with Vite. It provides a platform for movie and TV show enthusiasts to explore and discover new content. The application fetches data from an external API and presents it in a user-friendly format, offering detailed information about each movie or TV show. With features like dynamic listing, detailed information, pagination, search functionality, dark mode support, and responsive design, Movie-Mania aims to enhance the user's browsing experience.

## Features

- **Dynamic Movie and TV Show Listing**: Fetches and displays a list of movies and TV shows based on different categories.
- **Detailed Movie and TV Show Information**: Provides detailed information about each movie or TV show.
- **Pagination**: Allows users to navigate through different pages of movie and TV show listings.
- **Search Functionality**: Users can search for movies or TV shows. The results are displayed in a dropdown which is scrollable and responsive to different screen sizes.
- **Dark Mode Support**: The application has a dark mode toggle functionality for a comfortable viewing experience in different lighting conditions.
- **Responsive Design**: Works well on a variety of devices and window or screen sizes.

## Environment Variables

The project uses the following environment variables, which are stored in a `.env` file:

- `VITE_API_KEY`: The API key for The Movie Database (TMDb) API.
- `VITE_SERVICE_ID`: The service ID for the EmailJS service.
- `VITE_TEMPLATE_ID`: The template ID for the EmailJS service.
- `VITE_PUBLIC_KEY`: The public key for the EmailJS service.

## Installation

This project was bootstrapped with [Vite](https://vitejs.dev/).
To set up and run this project locally,
you'll need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
Follow these steps:

1. Clone the repository: `git clone https://github.com/nureka-rodrigo/movie-mania.git`
2. Navigate into the project directory: `cd movie-mania`
3. Install the dependencies: `npm install`
4. Start the application: `npm run dev`

The application will start running on `http://localhost:3000`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the terms of the [MIT license](https://github.com/nureka-rodrigo/Movie-Mania/blob/main/LICENSE).
