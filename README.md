
# Product Management Dashboard (MERN)

A full-stack Product Management Dashboard built using the MERN stack.
This application allows users to create, view, update, and delete products through a clean admin-style interface.

The project was built as part of an internship assignment and extended independently to demonstrate full-stack development skills.


## Features

### Core Functionality

Create new products

View all products in a responsive grid layout

Edit existing products

Delete products

Empty state UI when no products exist

Loading states during API calls

### Frontend

Responsive dashboard-style UI

Sidebar navigation

Product cards with action buttons (Edit / Delete)

Separate pages for product listing and product creation/editing

Clean and minimal UI using Tailwind CSS

### Backend

RESTful APIs built with Express.js

MongoDB for data storage

Mongoose schemas and models

Full CRUD operations for products


## Folder Structure

```
root/
├── frontend/        
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/       
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── controllers/
│   │   └── index.js
│   └── package.json
│
├── .gitignore
└── README.md
```
## Installation

Clone the Repository

```bash
git clone https://github.com/harsha-k123/productr-dashboard.git
cd productr-dashboard
```

Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Backend Setup

```bash
cd backend
npm install
npm run dev
 ```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`MONGO_URI`




## Future Improvements

Authentication (JWT-based)

Role-based access (Admin/User)

Image upload support

Publish/Unpublish product feature

Pagination & search

Better error handling and form validation
## Authors

- [@harsha-k123](https://github.com/harsha-k123/)
