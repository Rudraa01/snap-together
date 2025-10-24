# 🚀 Quick Setup Guide

## Step-by-Step Deployment to Vercel

### 1. Install Dependencies

Open PowerShell in this directory and run:

```powershell
npm install
```

### 2. Get Your Google Gemini API Key

1. Visit https://makersuite.google.com/app/apikey
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key

### 3. Test Locally (Optional)

Create a `.env` file in this directory:

```env
GEMINI_API_KEY=paste_your_api_key_here
```

Then run:

```powershell
npm run dev
```

Visit http://localhost:3000 to test!

### 4. Deploy to Vercel

#### Option A: Using Vercel Dashboard (Easiest)

1. Go to https://vercel.com
2. Sign up/login (can use GitHub)
3. Click "Add New Project"
4. Import this folder (or connect your GitHub repo)
5. In "Environment Variables":
   - Name: `GEMINI_API_KEY`
   - Value: Your API key
6. Click "Deploy"
7. Wait 1-2 minutes
8. Your site is live! 🎉

#### Option B: Using Vercel CLI

```powershell
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow the prompts
# Add environment variable when asked:
# GEMINI_API_KEY = your_api_key_here

# Deploy to production
vercel --prod
```

### 5. Post-Deployment

After deployment:
1. Vercel will give you a URL (e.g., `your-project.vercel.app`)
2. Visit the URL
3. Test the upload and merge functionality
4. Share with friends and family!

## 🎯 Important Notes

### About Image Generation

**Current Implementation**: The app uses Google Gemini for image **analysis**, not generation. 

For actual AI image generation, you have these options:

#### Option 1: Client-Side Merging (Quick Start)
- Works immediately with no extra setup
- Simple overlay/positioning of photos
- Limited realism

#### Option 2: Replicate API (Recommended for Production)
1. Sign up at https://replicate.com
2. Get your API token
3. Add to Vercel: `REPLICATE_API_TOKEN=your_token`
4. Uncomment Replicate code in `api/generate-alternative.js`
5. Rename `generate-alternative.js` to `generate.js`
6. Install: `npm install replicate`
7. Redeploy

#### Option 3: OpenAI DALL-E 3
1. Sign up at https://platform.openai.com
2. Get API key
3. Add to Vercel: `OPENAI_API_KEY=your_key`
4. Install: `npm install openai`
5. Update the API code to use DALL-E

### Cost Considerations

- **Gemini API**: Free tier includes 60 requests/minute
- **Replicate**: Pay per generation (~$0.01-0.05 per image)
- **DALL-E 3**: ~$0.04 per image
- **Vercel Hosting**: Free for personal projects

## 🔧 Customization Ideas

### Change the Website Name

Search and replace "SnapTogether" with your chosen name in:
- `index.html` (multiple places)
- `README.md`
- `package.json`

### Add Your Own Logo

Replace the SVG logo in `index.html` with your image:

```html
<img src="your-logo.png" alt="Logo" width="32" height="32">
```

### Modify Color Scheme

Edit `styles.css` variables:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #YOUR_COLOR1, #YOUR_COLOR2);
}
```

## 🐛 Common Issues

### Issue: "API key not configured"
**Solution**: Add `GEMINI_API_KEY` in Vercel dashboard → Settings → Environment Variables

### Issue: Images not generating
**Solution**: 
1. Check API key is valid
2. Ensure you've redeployed after adding env vars
3. Check Vercel function logs for errors

### Issue: CORS errors
**Solution**: The API already has CORS headers configured. Clear browser cache.

### Issue: Large file upload fails
**Solution**: Reduce image size before upload or increase Vercel function limits (paid plan)

## 📞 Need Help?

- Check the main README.md for detailed documentation
- View Vercel deployment logs for errors
- Test API endpoint directly: `https://your-site.vercel.app/api/generate`

## ✅ Checklist

Before going live:

- [ ] Test image upload on desktop
- [ ] Test image upload on mobile
- [ ] Test all pose selections
- [ ] Verify download functionality
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Check mobile responsiveness
- [ ] Update meta tags for SEO
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain (optional)

## 🎉 You're Ready!

Your photo merging website is ready to bring people together! Share it with the world! 🌍
