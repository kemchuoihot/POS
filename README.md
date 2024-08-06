# Phone Store POS System

This is a web-based Point of Sale (POS) system for managing phone sales. The system allows admin users to manage staff, products, customers, and process sales transactions. The website provides a comprehensive solution for phone store operations, built using modern web technologies.

### Deloy link: https://deploy-pos.vercel.app/login

## Features

- **Admin Login**: Admin users can log in with the following credentials:
    - **Username**: `admin`
    - **Password**: `admin`
- **Staff Management**: Manage the list of staff members and their information, including email verification and account activation.
- **Product Management**: Perform CRUD (Create, Read, Update, Delete) operations on products, which are phones.
- **Customer Management**: Manage customer details, including phone numbers and addresses.
- **Profile Management**: Admin users can change their account password.
- **POS Operations**: Select phones and process payments. Requires entering the customer's phone number before completing the transaction.
- **Email Verification**: Send emails to confirm staff accounts upon creation, first-time login, and password changes.
- **Account Activation**: Accounts are inactive until email confirmation. They can also be locked by an admin to prevent login.
- **Role-Based Access**: Limit functionality based on user roles. Regular staff have restricted access compared to admin users.

## Technologies Used

- **Frontend**: React.js for building the user interface.
- **Backend**: Node.js for server-side scripting and handling backend logic.
- **Database**: MongoDB for storing data.
- **Authentication**: JWT (JSON Web Token) for secure user authentication.
- **Middleware**: Custom middleware for handling various backend tasks.
- **Email Service**: Send email notifications for account verification and password changes.

## Database

The data is stored in MongoDB and includes:

- **Staff Information**
- **Product Details**
- **Customer Information**
- **Sales Transactions**

### Usage

1. Open your web browser and navigate to the link above.
2. Log in with the admin credentials:
    - **Username**: `admin`
    - **Password**: `admin`
3. Use the admin panel to manage staff, products, and customers.
4. Access the POS section to select phones and process payments by entering the customer's phone number.

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are welcome.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contact

If you have any questions or feedback, feel free to reach out to me at thinhpx33@gmail.com.
