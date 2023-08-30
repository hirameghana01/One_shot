const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const User = require('../models/User'); // User model

// Implement OTP generation logic (you can use a library like 'otp-generator')
function generateOTP() {
  // Generate OTP logic here
  return '123456'; // Replace with actual OTP
}

// Implement token generation logic (you can use a library like 'jsonwebtoken')
function generateAuthToken() {
  // Generate token logic here
  return 'your_auth_token'; // Replace with actual token
}

// Send OTP via email
router.post('/send-otp', async (req, res) => {
  const { email } = req.body;
  const otp = generateOTP(); // Generate OTP

  try {
    // Save OTP in the user's document or a separate OTP collection
    await User.updateOne({ email }, { otp });

    // Send the OTP via email using nodemailer
    const transporter = nodemailer.createTransport({
      // Configure your email service here
    });

    const mailOptions = {
      from: 'your_email@example.com',
      to: email,
      subject: 'Your OTP for Login',
      text: `Your OTP: ${otp}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending OTP:', error);
        res.status(500).json({ message: 'Failed to send OTP' });
      } else {
        res.json({ message: 'OTP sent successfully' });
      }
    });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ message: 'Failed to send OTP' });
  }
});

// Validate OTP and login
router.post('/login', async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.otp !== otp) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate and send an authentication token upon successful login
    const authToken = generateAuthToken(); // Generate token
    res.json({ authToken });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'An error occurred during login' });
  }
});

module.exports = router;
