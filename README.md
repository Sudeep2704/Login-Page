# Authentication System

## Overview
This project is a user authentication system built using Next.js, TypeScript, Express.js, and MongoDB. It includes signup, login, and user profile functionality, along with an admin panel to view user details securely.

## Features
- **User Registration & Login**: Users can sign up and log in securely.
- **Password Visibility Toggle**: Users can view or hide their passwords while typing.
- **JWT Authentication**: Secure authentication using JSON Web Tokens (JWT) stored in cookies.
- **Responsive UI**: Fully responsive design using Tailwind CSS.
- **User Dashboard**: Displays user information (ID & name) upon successful login.
- **Admin Panel**: Accessible only with an admin ID and password, displaying user details.
- **Logout Functionality**: Users can log out, removing their JWT token.

## Technologies Used
- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Backend**: Express.js, MongoDB (Atlas)
- **Authentication**: JWT, Cookies
- **API Calls**: Axios

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo.git
   cd your-repo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Start the backend server:
   ```bash
   node server.js
   ```

## API Endpoints
- **POST `/auth/register`** - Register a new user
- **POST `/auth/login`** - Authenticate user and return JWT
- **GET `/auth/profile`** - Fetch logged-in user details
- **GET `/admin/users`** - Fetch all users (Admin only)

## Usage
1. **Register a new account** on the signup page.
2. **Login** with your credentials.
3. **View your user dashboard** with ID and name displayed.
4. **Admin access** (requires admin credentials) to view all users.
5. **Logout** removes JWT and redirects to login.

## UI Enhancements
- **Hover effects on buttons**: Smooth scaling and glow effects using Tailwind CSS.
- **Mobile Responsive**: Adjusted padding and font sizes for better UX.
- **Styled Admin Panel**: Secure and visually appealing user management interface.

## Contributing
Feel free to submit pull requests or report issues for improvements.

## License
This project is licensed under the MIT License.

---

### Screenshots
(Attach relevant screenshots of UI)

