# Email Integration Setup Guide

## Overview
This project includes email functionality for the contact form that sends emails using Gmail SMTP.

## Features
- ✅ Contact form email integration
- ✅ Loading states on submit button
- ✅ Toast notifications for success/error
- ✅ Auto-reply confirmation emails
- ✅ HTML formatted emails

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

This will install:
- `express` - Backend server
- `nodemailer` - Email sending library
- `cors` - CORS middleware
- `concurrently` - Run server and frontend together

### 2. Start the Development Server

**Option 1: Run both server and frontend together (Recommended)**
```bash
npm run dev
```

**Option 2: Run separately**

Terminal 1 - Backend Server:
```bash
npm run server
```

Terminal 2 - Frontend:
```bash
npm start
```

### 3. API Endpoints

- **Contact Form**: `POST http://localhost:5000/api/contact`
- **Health Check**: `GET http://localhost:5000/api/health`

### 4. Email Configuration

The email credentials are hardcoded in `server.js`:
- **Email**: `ahmedrazagithub@gmail.com`
- **App Password**: `gltr oefj xtel rdjh`
- **Phone**: `03278227842`

⚠️ **Note**: The credentials are directly in the source code as requested. For production, consider using environment variables.

### 5. Testing

1. Navigate to the Contact page
2. Fill out the form
3. Submit the form
4. You should see:
   - Loading spinner on the button
   - Toast notification on success/error
   - Success message displayed
   - Email sent to `ahmedrazagithub@gmail.com`
   - Auto-reply sent to the user

## Vercel Serverless Functions (Production)

For Vercel deployment, serverless functions are automatically used:
- `/api/contact.js` - Contact form endpoint (auto-deployed on Vercel)
- `/api/health.js` - Health check endpoint

**How it works on Vercel:**
- Vercel automatically detects files in `/api` folder
- Each file becomes a serverless function endpoint
- No Express server needed - runs automatically!
- See `VERCEL_DEPLOYMENT.md` for detailed guide

## Next.js API Route (Alternative)

If you want to use Next.js API routes instead, use the file at:
- `pages/api/contact.js`

This file can be used if you migrate to Next.js.

## Production Deployment

For production, update the API URL in `src/utils/api.js` or set the environment variable:
```bash
REACT_APP_API_URL=https://your-api-domain.com
```

Then update the server to run on your production domain.

## Troubleshooting

### Email not sending?
1. Check if the Gmail app password is correct
2. Verify the server is running on port 5000
3. Check browser console for errors
4. Verify CORS is enabled

### Toast not showing?
1. Make sure `ToastProvider` is wrapped around your app in `src/index.js`
2. Check if the toast component is imported correctly

### Network errors?
1. Ensure the backend server is running
2. Check the API URL in `src/utils/api.js`
3. Verify CORS configuration in `server.js`

