# 🚀 Vercel Deployment Guide

## Pre-Deployment Checklist

- [ ] Node.js 18+ installed
- [ ] npm dependencies installed
- [ ] App builds successfully: `npm run build`
- [ ] Local testing complete: `npm start`
- [ ] Git repository initialized
- [ ] Code pushed to GitHub

## Step-by-Step Deployment

### 1. Initialize Git Repository

```bash
cd /Users/nitinsingh/salesforce-quiz-app/salesforce-quiz

# Initialize git
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: Salesforce Agentforce Quiz App"
```

### 2. Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click "+" → "New repository"
3. Name it: `salesforce-quiz-app`
4. Choose **Public** or **Private**
5. **Don't** initialize with README (we already have one)
6. Click "Create repository"

### 3. Push to GitHub

```bash
# Add remote
git remote add origin https://github.com/YOUR_USERNAME/salesforce-quiz-app.git

# Push code
git branch -M main
git push -u origin main
```

### 4. Connect to Vercel

**Option A: Automatic (Recommended)**

1. Visit [vercel.com](https://vercel.com)
2. Click "Sign Up" → Choose "GitHub"
3. Authorize GitHub access
4. Click "New Project"
5. Select your `salesforce-quiz-app` repository
6. Configure:
   - **Framework**: Angular
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/salesforce-quiz/browser`
   - **Node Version**: 18.x (default)
7. Click "Deploy"

**Option B: Manual with CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## 🎯 Vercel Configuration

The `vercel.json` file handles:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/salesforce-quiz/browser",
  "framework": "angular",
  "nodeVersion": "18.x"
}
```

## 📊 Post-Deployment

### Verify Deployment

1. Check Vercel Dashboard for build status
2. Visit your deployed URL (e.g., `https://salesforce-quiz-app.vercel.app`)
3. Test all features:
   - Test selection
   - Quiz flow
   - Answer submission
   - Results display
   - Mobile responsiveness

### Performance Check

- Run Lighthouse audit in DevTools
- Check Core Web Vitals
- Test on real mobile devices
- Verify analytics tracking (if applicable)

## 🔧 Environment Variables (if needed)

1. Go to Vercel Dashboard → Project Settings → Environment Variables
2. Add variables (e.g., API keys, feature flags)
3. Redeploy project

## 📈 Monitor Performance

- **Vercel Analytics**: Built-in monitoring
- **Error Tracking**: Real Errors in Dashboard
- **Performance**: Web Analytics
- **Logs**: Function logs in Dashboard

## 🔄 CI/CD Pipeline

Once connected to GitHub:
- **Auto-deploy** on every push to `main`
- **Preview deployments** for pull requests
- **Automatic rollbacks** on failed builds

## 🆘 Troubleshooting

### Build Failed

```bash
# Clear cache and rebuild
npm cache clean --force
rm -rf node_modules
npm install
npm run build
```

### Output Directory Not Found

- Ensure build command is: `npm run build`
- Output Directory must be: `dist/salesforce-quiz/browser`
- Check `angular.json` build configuration

### Blank Page on Deploy

- Check browser console for errors
- Verify all routes are correct
- Check that `index.html` exists in output directory
- Ensure no build-time environment variables missing

### Slow Performance

- Run Lighthouse audit
- Check bundle size: `npm run build -- --stats-json`
- Optimize images if applicable
- Enable caching in `vercel.json`

## 💡 Optimization Tips

1. **Enable Caching**
   ```json
   {
     "caching": {
       "maxAge": 3600
     }
   }
   ```

2. **Gzip Compression** (automatic on Vercel)

3. **Image Optimization** (if you add images later)

4. **Code Splitting** (Angular does this automatically)

## 🔐 Security

- **HTTPS**: Automatic SSL certificate
- **Headers**: Custom headers in `vercel.json`:
   ```json
   {
     "headers": [
       {
         "source": "/(.*)",
         "headers": [
           {
             "key": "X-Content-Type-Options",
             "value": "nosniff"
           }
         ]
       }
     ]
   }
   ```

## 📝 Monitoring & Logs

1. **Vercel Dashboard**
   - Project overview
   - Recent deployments
   - Build logs
   - Function logs
   - Real errors

2. **GitHub Integration**
   - Automatic status checks
   - Deployment badges
   - PR preview links

## 🔔 Alerts & Notifications

Configure in Vercel Dashboard:
- Email notifications on build failure
- Slack integration
- Deployment notifications

## 🎓 Next Steps

After successful deployment:

1. **Share URL**: `https://your-domain.vercel.app`
2. **Add Custom Domain** (optional):
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records
3. **Monitor Analytics**
4. **Plan Updates**:
   - More practice tests
   - New features
   - Bug fixes
   - Performance improvements

## 📞 Support

- Vercel Docs: https://vercel.com/docs
- Angular Docs: https://angular.io/docs
- Community: https://github.com/vercel/vercel/discussions

---

**You're all set! Your Salesforce Agentforce Quiz App is ready to go live! 🎉**
