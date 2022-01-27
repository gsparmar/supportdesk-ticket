const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const { errorHandler } = require('../backend/middleware/errorMiddleware');

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

// error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
