# 🎓 Salesforce Agentforce Quiz App - Complete Setup Guide

## Overview

This document provides a complete guide for setting up, developing, and deploying the Salesforce Agentforce Quiz App to Vercel.

**Project**: Salesforce Agentforce Quiz App  
**Deployed On**: Vercel  
**Tech Stack**: Angular 18+, SCSS, RxJS  
**Target**: Mobile-first microlearning  

---

## 📱 What You're Getting

### Features
✅ 100+ Practice Questions  
✅ Card-Based Microlearning Interface  
✅ Real-time Progress Tracking  
✅ Instant Feedback & Explanations  
✅ Mobile-Optimized Design  
✅ Performance Analytics  
✅ Responsive on all devices  

### Performance Targets
- Load time: < 2 seconds
- Bundle size: ~140 KB (gzipped)
- Lighthouse score: 95+
- Mobile score: 90+

---

## 🛠️ Prerequisites

Before starting, ensure you have:

1. **Node.js 18+**
   ```bash
   node --version  # Should be v18.0.0 or higher
   ```

2. **npm 9+**
   ```bash
   npm --version   # Should be 9.0.0 or higher
   ```

3. **Git**
   ```bash
   git --version
   ```

4. **GitHub Account** (for deployment)
   - Sign up at https://github.com

5. **Vercel Account** (for hosting)
   - Sign up at https://vercel.com

---

## 📦 Local Setup (First Time)

### 1. Navigate to Project

```bash
cd /Users/nitinsingh/salesforce-quiz-app/salesforce-quiz
```

### 2. Install Dependencies

```bash
npm install
```

This installs all packages listed in `package.json`:
- Angular 21.x
- RxJS
- TypeScript
- Build tools

### 3. Verify Installation

```bash
npm start
```

Expected output:
```
✔ Successfully compiled with 0 errors

Application bundle generation complete. 
✜ Local: http://localhost:4200/
```

Visit `http://localhost:4200/` in your browser. You should see the quiz app!

### 4. Stop Server

Press `Ctrl+C` to stop the development server.

---

## 🚀 Development Workflow

### Start Development Server

```bash
npm start
```

The app will automatically reload when you save files.

### Edit Components

All components are in `src/app/components/`:
- `quiz-container/` - Main container
- `test-selection/` - Test selection page
- `quiz-card/` - Quiz question display
- `results/` - Results page

### Make Changes

1. Edit component files (`.ts`, `.html`, `.scss`)
2. Save the file
3. Browser auto-reloads
4. Test your changes

### Build for Production

```bash
npm run build
```

Output goes to: `dist/salesforce-quiz/browser/`

---

## 📂 Project Structure

```
salesforce-quiz/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── quiz-container/
│   │   │   ├── test-selection/
│   │   │   ├── quiz-card/
│   │   │   └── results/
│   │   ├── services/
│   │   │   └── quiz.service.ts       (State management)
│   │   ├── models/
│   │   │   └── quiz.model.ts         (Type definitions)
│   │   ├── data/
│   │   │   └── quiz-data.ts          (Quiz questions)
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── styles.scss                   (Global styles)
│   ├── index.html
│   └── main.ts
├── angular.json                      (Angular config)
├── tsconfig.json                     (TypeScript config)
├── package.json                      (Dependencies)
├── vercel.json                       (Vercel config)
├── .gitignore
├── .vercelignore
├── README.md
├── DEPLOYMENT.md                     (Deployment guide)
└── CHECKLIST.md                      (Quick checklist)
```

---

## 🔧 Configuration Files

### `angular.json`
Angular CLI configuration for build and serve options.

### `tsconfig.json`
TypeScript compiler options.

### `package.json`
Node.js dependencies and scripts.

### `vercel.json`
Vercel deployment configuration:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/salesforce-quiz/browser",
  "framework": "angular",
  "nodeVersion": "18.x"
}
```

---

## 🌐 GitHub Setup

### Initial Repository Setup

```bash
cd /Users/nitinsingh/salesforce-quiz-app/salesforce-quiz

# Initialize git (only once)
git init

# Configure git
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Add files
git add .

# Initial commit
git commit -m "Initial commit: Salesforce Agentforce Quiz App"
```

### Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `salesforce-quiz-app`
3. Description: "Salesforce Agentforce Quiz App"
4. Choose: Public or Private
5. **Don't** check "Initialize with README"
6. Click "Create repository"

### Push to GitHub

```bash
# Copy the commands from GitHub and run them:
git remote add origin https://github.com/YOUR_USERNAME/salesforce-quiz-app.git
git branch -M main
git push -u origin main
```

### Verify

Visit https://github.com/YOUR_USERNAME/salesforce-quiz-app  
You should see your code!

---

## 🚀 Vercel Deployment

### Automatic Deployment (Recommended)

1. Go to https://vercel.com
2. Click "New Project"
3. Choose "Import Git Repository"
4. Authorize GitHub
5. Select `salesforce-quiz-app`
6. Configure:
   - Framework: **Angular**
   - Build Command: **npm run build**
   - Output Directory: **dist/salesforce-quiz/browser**
   - Node Version: **18.x**
7. Click "Deploy"

Vercel will build and deploy automatically!

### Manual Deployment (Alternative)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Verify Deployment

1. Vercel Dashboard shows "✓ Ready"
2. Visit your deployment URL
3. Test all features
4. Check mobile view

---

## 📊 Monitoring & Maintenance

### Check Deployment Status

1. Vercel Dashboard
2. Select your project
3. View recent deployments
4. Check build logs if needed

### Monitor Performance

1. Vercel Analytics
2. Core Web Vitals
3. Real Errors monitoring
4. Function logs

### Future Updates

To update your app:

```bash
# Make changes locally
npm start
# Test your changes
npm run build
# Commit and push
git add .
git commit -m "Update: description"
git push origin main
```

Vercel automatically redeploys!

---

## 🆘 Troubleshooting

### Local Build Issues

**Problem**: Build fails locally

**Solution**:
```bash
npm cache clean --force
rm -rf node_modules
npm install
npm run build
```

### Vercel Build Fails

**Problem**: Build fails on Vercel

**Solution**:
1. Check build logs in Vercel Dashboard
2. Verify Node.js version is 18.x
3. Try local build first
4. Check for missing environment variables

### App Shows Blank Page

**Problem**: Deployed app is blank

**Solution**:
1. Check browser console for errors
2. Check Vercel build logs
3. Verify output directory is correct
4. Check index.html is valid

### Mobile Display Issues

**Problem**: Mobile view is broken

**Solution**:
1. Clear browser cache
2. Test on real device
3. Check viewport meta tag
4. Verify responsive styles

---

## 📈 Performance Optimization

### Analyze Bundle Size

```bash
npm run analyze
```

This shows what's taking up space in your bundle.

### Optimize Images (if you add any)

- Use WebP format
- Optimize for mobile
- Lazy load if needed

### Enable Caching

Add to `vercel.json`:
```json
{
  "caching": {
    "maxAge": 3600,
    "s-maxage": 86400
  }
}
```

---

## 🔐 Security Best Practices

✅ No sensitive data in code  
✅ HTTPS enabled by default  
✅ XSS protection via Angular  
✅ CSRF tokens ready  
✅ Regular updates recommended  

---

## 📱 Mobile Optimization Checklist

✅ Touch-friendly buttons  
✅ Optimized font sizes  
✅ Responsive layout  
✅ Smooth animations  
✅ Fast loading  
✅ Minimal data usage  
✅ Works offline ready  

---

## 🎯 Next Steps

1. **Complete Local Setup**
   ```bash
   npm install
   npm start
   ```

2. **Initialize Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. **Create GitHub Repo**
   - Go to github.com/new
   - Create repository
   - Copy remote URL

4. **Push to GitHub**
   ```bash
   git remote add origin <URL>
   git push -u origin main
   ```

5. **Deploy to Vercel**
   - Go to vercel.com
   - New Project
   - Select your GitHub repo
   - Deploy!

6. **Monitor & Update**
   - Check performance
   - Update content
   - Fix bugs
   - Add features

---

## 📞 Support Resources

### Documentation
- **Angular**: https://angular.io/docs
- **Vercel**: https://vercel.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

### Community
- **GitHub Discussions**: https://github.com/angular/angular/discussions
- **Stack Overflow**: Tag: `angular`
- **Discord Communities**: Various Angular communities

### Official Docs
- **Vercel CLI**: `vercel --help`
- **Angular CLI**: `ng help`

---

## ✅ Verification Checklist

Before considering deployment complete:

- [ ] App loads at base URL
- [ ] Test selection page works
- [ ] Quiz questions display
- [ ] Answer submission works
- [ ] Results page shows scores
- [ ] Mobile view is responsive
- [ ] No console errors
- [ ] Lighthouse score > 90
- [ ] Analytics working (if enabled)

---

## 🎉 Congratulations!

Your Salesforce Agentforce Quiz App is ready to go live!

**Your Deployed App**: https://your-app.vercel.app

Share it with:
- Friends & colleagues
- Study groups
- Social media
- Your portfolio

---

**Last Updated**: December 19, 2025  
**Version**: 1.0.0  
**Status**: Production Ready ✅

**Good luck with your Salesforce Agentforce certification! 🚀**
