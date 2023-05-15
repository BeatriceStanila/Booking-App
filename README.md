## CC | Makeup & Lashes - Booking App

CC | Makeup & Lashes is a booking application for a professional Makeup and Lash Artist, designed to help clients schedule appointments online with ease. The application provides a user-friendly interface where clients can browse through Cosmina's portfolio, select the desired service, and book an appointment. The application also features a contact form where clients can make inquiries or request additional information about Cosmina's services.

When a client books an appointment using the application, Cosmina will receive an email with all the details of the appointment. This helps to ensure that appointments are managed smoothly and in a timely manner. In addition, the date and time of the appointment are saved in a secure database to prevent double-booking and ensure that each client has a dedicated time slot for their appointment.

<p>Have a look<a href="https://cc-makeupandlashes.onrender.com/"> here</a>!</p>

<img src="./client/public/app.png" alt="app">

---

[**Technology**](#technology)

[**Libraries Used**](#libraries-used)

[**Features**](#features)

[**Deployment**](#deployment)

---

## Technology

The application was built using:

1. MongoDB
2. Express.js
3. MongoDB
4. Node.js.

<hr>

## Libraries Used

- **[Axios](https://www.npmjs.com/package/axios):** Promise based HTTP client for the browser and node.js. It was used for CRUD operations.
- **[Mongoose](https://www.npmjs.com/package/mongoose):** Used create and manage the database, as well as handle HTTP requests between the frontend and backend.
- **[Nodemailer](https://www.npmjs.com/package/nodemailer):** Send email from Node.js once a client makes an appointment.
- **[CORS](https://www.npmjs.com/package/cors):** To enable cross-domain communication between the frontend and backend servers.
- **[Typewriter-Effect](https://www.npmjs.com/package/typewriter-effect):**
- **[React-Icons](https://www.npmjs.com/package/moment):** Used react-icons for creating the hamburger menu in the mobile version of the app.
- **[@EmailJS/Browser](https://www.npmjs.com/package/@emailjs/browser):** Used to create a contact form on the frontend and handle form submissions by sending an email to the designated email address.
- **[React Date Picker](https://www.npmjs.com/package/react-datepicker):** Used to select the date and time in appointment form.
- **[React Modal](https://www.npmjs.com/package/react-modal)**: To create accessible modal dialog components.
- **[React Hook Form](https://www.npmjs.com/package/react-hook-form)**
- **[TailwindCSS](https://www.npmjs.com/package/tailwindcss)**

<hr>

## Features

- Book an online appointment: the core feature of the application, allowing users to book an appointment online.

- Check slot availability: helps users to check the availability of slots before booking an appointment. It provides a smooth user experience and prevents double bookings.

- Modal dialog for slot unavailability: informs users when a slot is not available, allowing them to select an alternative slot and avoid any confusion or frustration.

- Select a service: helps users to choose the type of service they require and enables the application to provide relevant information and pricing.

- Modal dialog for booking confirmation: informs users that the appointment has been successfully booked.

- Send email to admin when an appointment is made: This feature provides a notification to the admin when a user books an appointment, ensuring that they can keep track of the schedule and respond promptly if required.

- Contact form for inquiries: This feature allows users to make additional inquiries about the services or schedule, providing a channel for communication and building trust with the user.

- Send email to admin with user's inquiries: This feature ensures that the admin is notified of any inquiries made by the user, allowing them to provide timely and accurate responses.

<hr>

## Deployment

Backend is deployed on Cyclic - because on Render the web service stops after 15 minutes of inactivity and it does not start again when the app is being used.

Frontend is deployed on Render.
