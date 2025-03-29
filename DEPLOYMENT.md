# First Doge Agent ($FDA) Website Deployment Guide

This document provides step-by-step instructions for deploying the First Doge Agent ($FDA) website.

## Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- Git
- GitHub account
- Vercel account (free tier works fine)

## Hosting on GitHub

1. **Create a new GitHub repository**

   Go to GitHub and create a new repository named `fda-website` or another name of your choice.

2. **Initialize your local repository**

   ```bash
   cd /path/to/fda-website
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. **Link your local repository to GitHub**

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/fda-website.git
   git branch -M main
   git push -u origin main
   ```

## Deploying to Vercel

Vercel provides a seamless deployment experience for React applications and offers a generous free tier.

1. **Sign up for Vercel**

   If you don't already have an account, go to [vercel.com](https://vercel.com) and sign up. You can sign up with your GitHub account for easier integration.

2. **Install Vercel CLI (optional)**

   ```bash
   npm install -g vercel
   ```

3. **Deploy through the Vercel dashboard**

   - Go to the [Vercel dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository (`fda-website`)
   - Vercel will automatically detect that this is a React application
   - Configure your project:
     - Project Name: `fda-website` (or your preferred name)
     - Framework Preset: Create React App
     - Build Command: `npm run build`
     - Output Directory: `build`
   - Click "Deploy"

4. **Deploy through the Vercel CLI (alternative)**

   ```bash
   cd /path/to/fda-website
   vercel login
   vercel
   ```

   Follow the prompts to configure your deployment.

5. **Configure custom domain (optional)**

   - In the Vercel dashboard, go to your project settings
   - Navigate to the "Domains" section
   - Add your custom domain and follow the instructions to set up DNS records

## Continuous Deployment

Vercel automatically sets up continuous deployment from your GitHub repository. When you push changes to your main branch, Vercel will automatically rebuild and redeploy your website.

```bash
git add .
git commit -m "Update website content"
git push origin main
```

## Troubleshooting

If you encounter any issues during deployment, check the following:

1. **Build failures**:
   - Check the build logs in Vercel
   - Make sure all dependencies are correctly installed
   - Verify your React components are properly imported

2. **API connection issues**:
   - Ensure the DOGE API is accessible from the deployment environment
   - Check for CORS issues if accessing the API from the browser

3. **Environment variables**:
   - If your app uses environment variables (like API keys), make sure they're configured in Vercel

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Create React App Deployment](https://create-react-app.dev/docs/deployment/)
- [GitHub Documentation](https://docs.github.com/en)