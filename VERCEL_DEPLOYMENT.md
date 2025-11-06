# Vercel Deployment Guide - Email API

## How Serverless Functions Work on Vercel

When you deploy to Vercel, the serverless functions in the `/api` folder **automatically run** without any additional setup. Here's how:

### 1. Automatic Detection
- Vercel automatically detects files in the `/api` directory
- Each `.js` file becomes a serverless function endpoint
- No Express server needed - Vercel handles the infrastructure

### 2. How It Works
```
/api/contact.js → https://yourdomain.com/api/contact
/api/health.js  → https://yourdomain.com/api/health
```

### 3. Serverless Functions
- **No server to manage** - Vercel handles everything
- **Auto-scaling** - Handles traffic spikes automatically
- **Pay-per-use** - Only pay for what you use
- **Cold starts** - First request may take 1-2 seconds, then instant

## Deployment Steps

### 1. Push to GitHub/GitLab/Bitbucket
```bash
git add .
git commit -m "Add email API integration"
git push origin main
```

### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will automatically detect your project
4. Click "Deploy"

### 3. That's It!
- Vercel automatically:
  - Builds your React app
  - Deploys serverless functions from `/api` folder
  - Routes `/api/*` requests to serverless functions
  - Routes other requests to your React app

## File Structure for Vercel

```
your-project/
├── api/                    ← Serverless functions (auto-deployed)
│   ├── contact.js         ← POST /api/contact
│   └── health.js          ← GET /api/health
├── src/                    ← React app
├── public/                 ← Static assets
├── vercel.json            ← Vercel configuration
└── package.json
```

## How API Routes Work

### Development (Local)
```javascript
// Uses Express server on localhost:5000
fetch('http://localhost:5000/api/contact', {...})
```

### Production (Vercel)
```javascript
// Uses relative URL - automatically routes to serverless function
fetch('/api/contact', {...})
```

The code in `src/utils/api.js` automatically detects the environment and uses the correct URL.

## Testing on Vercel

### 1. After Deployment
1. Go to your Vercel deployment URL
2. Navigate to Contact page
3. Fill out the form
4. Submit - it will use the serverless function automatically

### 2. Check Function Logs
1. Go to Vercel Dashboard
2. Select your project
3. Go to "Functions" tab
4. See real-time logs and execution times

## Important Notes

### ✅ What Works Automatically
- Serverless functions in `/api` folder
- CORS handling
- Request routing
- Environment detection

### ⚠️ What You Need to Know
- **Cold starts**: First request may be slower (1-2 seconds)
- **Timeout**: Functions have a 10-second timeout (Hobby plan)
- **Email credentials**: Currently hardcoded in `/api/contact.js`

### 🔒 Security Recommendation
For production, consider using Vercel Environment Variables:
1. Go to Vercel Dashboard → Settings → Environment Variables
2. Add:
   - `GMAIL_USER=ahmedrazagithub@gmail.com`
   - `GMAIL_PASS=gltr oefj xtel rdjh`
3. Update `/api/contact.js` to use `process.env.GMAIL_USER`

## Monitoring

### View Function Logs
- Vercel Dashboard → Your Project → Functions
- See request logs, errors, and execution times

### Check Function Status
- Visit: `https://yourdomain.com/api/health`
- Should return: `{"status":"OK","message":"Serverless function is running"}`

## Troubleshooting

### Function Not Working?
1. Check Vercel logs in Dashboard
2. Verify file is in `/api` folder (not `/pages/api`)
3. Check `vercel.json` configuration
4. Ensure `nodemailer` is in `package.json` dependencies

### Email Not Sending?
1. Verify Gmail app password is correct
2. Check Vercel function logs for errors
3. Ensure CORS headers are set correctly
4. Test with `/api/health` endpoint first

### CORS Errors?
- CORS is already handled in `/api/contact.js`
- If issues persist, check browser console
- Verify request is going to correct endpoint

## Local Development vs Production

| Feature | Local Development | Vercel Production |
|---------|------------------|-------------------|
| API Server | Express (server.js) | Serverless Functions |
| Port | localhost:5000 | Auto (no port) |
| URL | http://localhost:5000/api/contact | /api/contact |
| Startup | Manual (`npm run server`) | Automatic |
| Scaling | Single instance | Auto-scaling |

## Next Steps

1. **Deploy to Vercel** - Push your code and deploy
2. **Test the API** - Submit a contact form on production
3. **Monitor Logs** - Check Vercel dashboard for function logs
4. **Optional**: Move credentials to environment variables

That's it! Your email API will work automatically on Vercel without any additional server setup. 🚀


