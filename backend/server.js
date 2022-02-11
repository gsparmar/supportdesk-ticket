const dotenv = require('dotenv').config();
const path = require('path');
const express = require('express');
const colors = require('colors');
const PORT = process.env.PORT || 5000;
const { errorHandler } = require('../backend/middleware/errorMiddleware');
const connectDB = require('./config/db');

// connect to db
connectDB();

const app = express();
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// root url - message
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Support Desk API' });
});

// routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/tickets', require('./routes/ticketRoutes'));

// Serve Frontend
if (process.env.NODE_ENV === 'production') {
  // set build folder as static
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  // send html file from build folder
  app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Support Desk API' });
  });
}

// error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
