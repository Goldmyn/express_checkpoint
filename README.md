# Express Simple Server Checkpoint

This is a simple web server built with Node.js and Express. It serves static files and handles three main routes: `/home`, `/service`, and `/contact`. The application also employs Morgan for logging HTTP requests and checks the online status based on the Nigeria timezone.

## Features

- Serves static files from the `public` directory.
- Logs HTTP requests using Morgan.
- Checks online status based on Nigerian hours (09:00 to 17:00).
- Dynamic responses based on online status.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side applications.
- **Express**: Web application framework for Node.js.
- **Nodemon**: Utility that automatically restarts the server when file changes are detected (for development purposes).
- **Morgan**: Middleware for logging HTTP requests.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Goldmyn/express_checkpoint
   cd your-repo-name
   ```

2. **Install dependencies**:

   ```bash
   npm install express nodemon morgan
   ```

## Usage

1. **Start the server**:

   You can run the server with Nodemon for automatic restarts on file changes:

   ```bash
   npx nodemon index.js
   ```

   Or, if you want to run it without Nodemon:

   ```bash
   node index.js
   ```

2. **Access the server**:

   Open your web browser and navigate to `http://localhost:3000/home`, `http://localhost:3000/service`, or `http://localhost:3000/contact`.

## Online Status Checking

The server checks if it is within the operational hours (09:00 AM to 05:00 PM) and that it is not a weekend. If the request is made outside the operational hours, the user will receive a message indicating that the server is offline.

## Directory Structure

```
/your-repo-name
|-- /public
|   |-- home.html
|   |-- service.html
|   |-- contact.html
|-- index.js
|-- package.json
|-- README.md
```

## Contributing

If you wish to contribute to this project, please open an issue or submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).

```

### Note:
- Replace `https://github.com/yourusername/your-repo-name.git` with the actual URL of your GitHub repository.
- You may want to add specific instructions on how to contact you for contributions, or detail any additional features or future enhancements you plan to include.

Feel free to modify any section of the README based on the needs of your project!
```
