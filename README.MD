## Project Boilerplate Setup

This README provides a comprehensive guide to setting up, running, and maintaining your project.

### Prerequisites

1. **Node.js** (v14 or higher)
2. **pnpm** - A fast, disk space efficient package manager
   ```sh
   npm install -g pnpm
   ```

### Cloning the Repository

Clone the repository to your local machine using the following command:

```sh
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### Setting Up the Project

1. **Install dependencies:**
   ```sh
   pnpm install
   ```

2. **Create environment configuration:**
   Create a `.env` file in the root of your project and add the necessary environment variables:

   ```env
   PORT=4000
   MONGODB_URL=mongodb://localhost:27017/mydatabase
   ```

   Also, create a `.env.example` file for reference:

   ```env
   PORT=4000
   MONGODB_URL=mongodb://localhost:27017/mydatabase
   ```

### Project Structure

```
my-node-project/
│
├── dist/
├── docs/
├── node_modules/
├── src/
│   ├── config/
│   │   └── database.ts
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   │   ├── hello.ts
│   │   └── index.ts
│   ├── services/
│   ├── app.ts
│   └── index.ts
├── .eslintrc.json
├── .prettierrc
├── .husky/
│   └── pre-commit
├── package.json
├── tsconfig.json
└── typedoc.json
```

### Running the Server

There are two ways to run the server: with or without the database connection.

1. **Run the server with database connection:**

   Uncomment the following line in `src/index.ts`:

   ```typescript
   startServerWithDB();
   ```

   Then, start the server:

   ```sh
   pnpm dev
   ```

2. **Run the server without database connection:**

   Uncomment the following line in `src/index.ts`:

   ```typescript
   startServer();
   ```

   Then, start the server:

   ```sh
   pnpm dev
   ```

### Generating and Viewing Documentation

1. **Generate the documentation:**

   ```sh
   pnpm generate-docs
   ```

2. **Serve the documentation:**

   ```sh
   pnpm serve-docs
   ```

   Open the URL provided by `http-server` (e.g., `http://localhost:4000`) in your browser to view the documentation.

### Adding TypeDoc Comments

TypeDoc comments are essential for generating comprehensive documentation. Add comments above your functions and classes as follows:

```typescript
/**
 * Connect to the MongoDB database.
 * 
 * @async
 * @function connectDB
 * @returns {Promise<void>} A promise that resolves when the connection is established.
 * @throws {Error} Throws an error if the connection fails.
 */
const connectDB = async (): Promise<void> => {
  // function implementation
};
```

### Testing the API

1. **Test the Hello World API:**

   After running the server, open your browser or use a tool like `curl` or Postman to test the API endpoint:

   ```sh
   curl http://localhost:4000/api/hello
   ```

   You should see a JSON response:

   ```json
   {
     "message": "Hello, World!"
   }
   ```

2. **Test Swagger UI:**

   Open your browser and navigate to:

   ```sh
   http://localhost:4000/api-docs
   ```

   This will display the Swagger UI where you can test all the available API endpoints.

### Environment Modifications

To modify environment variables, update your `.env` file with the desired values. Ensure that you have all necessary variables specified in `.env.example` for reference.

### Conclusion

This README should help you set up, run, and maintain your project efficiently. Follow the steps carefully, and refer back to this document as needed for any setup or configuration tasks. Happy coding!