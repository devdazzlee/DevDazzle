# SSL Certificate Fix Guide for devdazzlee.vercel.app

## Problem
Google is accessing `www.devdazzlee.vercel.app` but SSL certificate is only valid for `devdazzlee.vercel.app` (without www), causing `NET::ERR_CERT_COMMON_NAME_INVALID` error.

## ⚠️ IMPORTANT: DO NOT Try to Add Domain Manually!

**You CANNOT and SHOULD NOT manually add `www.devdazzlee.vercel.app` in Vercel Dashboard** because:
- Vercel owns the `*.vercel.app` namespace
- These domains are automatically managed by Vercel
- If you try to add it, you'll get an error: **"The domain you are trying to add is invalid"**
- **This error is normal and expected** - Vercel handles it automatically
- **Close the "Add Domain" modal** - you don't need to add it manually

## ⚠️ CRITICAL: SSL Must Be Provisioned First

**The redirect cannot work until SSL is provisioned for www subdomain.** Vercel needs to automatically provision SSL for `www.devdazzlee.vercel.app` before the redirect will work.

## Solution Steps

### Step 1: Trigger SSL Provisioning (DO THIS FIRST!)

**DO NOT try to add the domain in Vercel Dashboard.** Instead, trigger SSL provisioning by accessing the domain:

1. **Open a new incognito/private browser window**
2. **Type in address bar**: `http://www.devdazzlee.vercel.app` (HTTP, not HTTPS)
3. **Press Enter** - This will trigger Vercel to provision SSL for the www subdomain
4. **Wait 5-15 minutes** for SSL to be provisioned

**What happens:**
- Vercel detects traffic to `www.devdazzlee.vercel.app`
- Automatically provisions SSL certificate for it
- No manual configuration needed!

### Step 2: Deploy Updated Configuration

1. **Commit and push** the updated `vercel.json` file (already configured with redirect)
2. **Redeploy** your site on Vercel
3. **Wait 10-15 minutes** after deployment

### Step 3: Test the Redirect

After SSL is provisioned (wait 15-30 minutes):
1. Visit `https://www.devdazzlee.vercel.app`
2. It should redirect to `https://devdazzlee.vercel.app` ✅
3. No SSL errors should appear

### Step 4: Google Search Console

1. **Add both properties**:
   - `https://devdazzlee.vercel.app`
   - `https://www.devdazzlee.vercel.app`
2. **Set preferred domain**: Choose `devdazzlee.vercel.app` (without www) as preferred
3. **Submit sitemap**: `https://devdazzlee.vercel.app/sitemap.xml`

## Configuration Details

The `vercel.json` file has been updated with:
- **Redirect**: All `www.devdazzlee.vercel.app` traffic redirects to `devdazzlee.vercel.app` (301 permanent redirect)
- **Security Headers**: Added HSTS and security headers

## If SSL Still Not Provisioned After 24 Hours

1. **Contact Vercel Support**:
   - Go to: https://vercel.com/support
   - Explain that SSL certificate is not being provisioned for `www.devdazzlee.vercel.app`
   - Mention it's a `*.vercel.app` subdomain

2. **Alternative: Use Custom Domain** (Recommended for Production):
   - Purchase a custom domain (e.g., `devdazzle.com`)
   - Add it to Vercel project
   - Vercel will automatically provision SSL for both www and non-www
   - This is more reliable than relying on `*.vercel.app` subdomains

## Important Notes

- **Vercel automatically provides SSL** for all `*.vercel.app` domains (both www and non-www)
- **You CANNOT manually add** `www.devdazzlee.vercel.app` - Vercel manages it automatically
- **The error you see is normal** - just close the modal and don't try to add it
- **The redirect** ensures all www traffic goes to non-www (better for SEO)
- **Wait 5-15 minutes** after triggering SSL provisioning
- **Clear browser cache** if you still see errors

## Troubleshooting

1. **Check Vercel deployment logs** - ensure the redirect is working
2. **Wait longer** - SSL provisioning for www subdomain can take up to 24 hours
3. **Test the redirect** - Visit `https://www.devdazzlee.vercel.app` - it should redirect to non-www
4. **Clear DNS cache**: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)
