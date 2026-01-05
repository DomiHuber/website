# Netlify Troubleshooting Guide

## Forms Integration

### ✅ Completed
- Added hidden static HTML forms in layout for Netlify form detection
- Updated all form handlers to submit to both:
  - Your API endpoint (`/api/inquiry`) - for custom processing
  - Netlify Forms endpoint (`/`) - for Netlify dashboard tracking
- All 7 forms now submit to Netlify:
  - `webinar-registration`
  - `course-signup-bitcoin-executives`
  - `course-signup-financial-sovereignty`
  - `lead-intake`
  - `newsletter-popup`
  - `contact`
  - `newsletter-research`
  - `newsletter-section`

### How It Works
Forms submit to both endpoints:
1. Netlify Forms (fire-and-forget) - for tracking in Netlify dashboard
2. Your API route - for custom business logic and processing

After deployment, forms should appear in Netlify dashboard under **Site Settings > Forms**.

## Domain Access Issues

If the site cannot be accessed from your custom domain (`bitcoininstitute.ch`), check:

### 1. Domain Configuration in Netlify
- Go to **Site Settings > Domain Management**
- Verify `bitcoininstitute.ch` is added as a custom domain
- Check DNS configuration:
  - A record pointing to Netlify's IP
  - CNAME record pointing to your Netlify site
  - Or use Netlify DNS

### 2. DNS Propagation
- DNS changes can take 24-48 hours to propagate
- Check DNS propagation: https://dnschecker.org
- Verify DNS records match Netlify's requirements

### 3. SSL Certificate
- Netlify automatically provisions SSL certificates
- Check **Site Settings > Domain Management > HTTPS**
- Ensure certificate is active (may take a few minutes after domain is added)

### 4. Netlify Site Status
- Check if the site is published and not in draft mode
- Verify build completed successfully
- Check deployment logs for errors

## Performance / Loading Issues

### Optimizations Applied
- ✅ Enabled `swcMinify` for faster builds
- ✅ Enabled `compress` for response compression
- ✅ Image optimization enabled (AVIF and WebP formats)
- ✅ Font optimization with `display: swap`

### Additional Checks

1. **Check Build Logs**
   - Look for warnings about large bundles
   - Check for slow API routes or database queries

2. **Netlify Edge Functions**
   - Consider using Edge Functions for faster response times
   - Check if any routes can be moved to Edge

3. **CDN Caching**
   - Verify Netlify CDN is caching static assets
   - Check cache headers in response

4. **Image Optimization**
   - Ensure images are optimized
   - Use Next.js Image component for automatic optimization

5. **Bundle Size**
   - Run `npm run build` locally and check bundle sizes
   - Consider code splitting for large components

### Performance Monitoring
- Use Netlify Analytics to identify slow pages
- Check browser DevTools Network tab for slow requests
- Monitor Core Web Vitals in Netlify dashboard

## Next Steps

1. **Deploy and Verify Forms**
   - After deployment, check Netlify dashboard for forms
   - Test form submissions
   - Verify submissions appear in Netlify Forms dashboard

2. **Domain Configuration**
   - If domain still not accessible, check Netlify support
   - Verify DNS records are correct
   - Wait for DNS propagation if recently changed

3. **Performance Monitoring**
   - Monitor site performance after deployment
   - Use Netlify Analytics to identify bottlenecks
   - Consider implementing Edge Functions for critical routes

