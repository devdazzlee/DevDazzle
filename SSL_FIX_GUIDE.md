# SSL Certificate Fix Guide for devdazzlee.vercel.app

## Problem
Google is accessing `www.devdazzlee.vercel.app` but SSL certificate is only valid for `devdazzlee.vercel.app` (without www), causing `NET::ERR_CERT_COMMON_NAME_INVALID` error.

## Solution Steps

### 1. Vercel Dashboard Configuration

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Select your project**: `devdazzlee`
3. **Go to Settings → Domains**
4. **Add Domain**: Add `www.devdazzlee.vercel.app` as an additional domain
   - This will automatically generate SSL certificate for www subdomain
5. **Wait for SSL**: Vercel will automatically provision SSL certificate (usually takes 1-5 minutes)

### 2. Domain Redirect Configuration (Already Added)

The `vercel.json` file has been updated with:
- **Redirect**: All `www.devdazzlee.vercel.app` traffic redirects to `devdazzlee.vercel.app`
- **Security Headers**: Added HSTS and security headers

### 3. After SSL is Provisioned

1. **Redeploy your site** to apply the changes
2. **Test both URLs**:
   - `https://devdazzlee.vercel.app` ✅
   - `https://www.devdazzlee.vercel.app` ✅ (should redirect)

### 4. Google Search Console

1. **Add both properties**:
   - `https://devdazzlee.vercel.app`
   - `https://www.devdazzlee.vercel.app`
2. **Set preferred domain**: Choose `devdazzlee.vercel.app` (without www) as preferred
3. **Submit sitemap**: `https://devdazzlee.vercel.app/sitemap.xml`

### 5. Verify SSL Certificate

After deployment, verify SSL:
```bash
# Check SSL certificate
openssl s_client -connect devdazzlee.vercel.app:443 -servername devdazzlee.vercel.app

# Check www subdomain
openssl s_client -connect www.devdazzlee.vercel.app:443 -servername www.devdazzlee.vercel.app
```

### 6. Force HTTPS (Already Configured)

The `vercel.json` includes:
- **Strict-Transport-Security**: Forces HTTPS for 1 year
- **Security Headers**: XSS protection, frame options, etc.

## Important Notes

- **Vercel automatically provides SSL** for all domains added to your project
- **The redirect** ensures all www traffic goes to non-www (better for SEO)
- **Wait 5-10 minutes** after adding domain for SSL to provision
- **Clear browser cache** if you still see errors

## If Issue Persists

1. Check Vercel deployment logs
2. Verify domain is added in Vercel dashboard
3. Wait for SSL certificate to fully provision
4. Clear DNS cache: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)

