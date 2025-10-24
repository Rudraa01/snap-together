# 🎨 SnapTogether - AI Photo Merger

**Bring people together in one perfect photo!**

SnapTogether is a modern web application that uses AI to merge people from different photos into a single, realistic image. Perfect for families, couples, and creating cherished memories.

![SnapTogether Banner](https://img.shields.io/badge/Made%20with-HTML%20%7C%20CSS%20%7C%20JavaScript-blue)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black)
![AI Powered](https://img.shields.io/badge/AI-Gemini%20Powered-purple)

## ✨ Features

- 🖼️ **Upload Two Photos**: Simple drag-and-drop or click to upload
- 🎭 **Multiple Poses**: Choose from 8+ different poses (hugging, standing, sitting, etc.)
- 🤖 **AI-Powered**: Leverages Google Gemini AI for intelligent photo analysis
- ⚡ **Fast & Responsive**: Modern UI with smooth animations
- 📱 **Mobile-Friendly**: Works perfectly on all devices
- 🔒 **Privacy-Focused**: Photos are processed securely and not stored
- 💾 **Easy Download**: One-click download of your merged photo

## 🎯 Use Cases

- **Couples**: Create romantic photos together, even when apart
- **Families**: Combine family members from different photos
- **Parent & Child**: Merge your childhood photo with your child's current photo
- **Special Gifts**: Create unique personalized gifts for loved ones

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- A Vercel account (free)
- Google Gemini API key (free tier available)

### Installation

1. **Clone or download this project**
   ```bash
   cd "people connect"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run locally**
   ```bash
   npm run dev
   ```
   
   Open http://localhost:3000 in your browser

## 🔑 Getting API Keys

### Google Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Click "Get API Key"
3. Create a new API key or use an existing one
4. Copy the API key
5. Add it to your Vercel environment variables

**Note**: The free tier includes generous limits perfect for personal use!

### Alternative: Image Generation APIs

Since Gemini focuses on image analysis, for actual image generation you may want to use:

1. **Replicate** (Recommended for production)
   - Sign up at https://replicate.com
   - Get your API token
   - Add to environment: `REPLICATE_API_TOKEN=your_token`
   - Uncomment Replicate code in `api/generate-alternative.js`

2. **OpenAI DALL-E 3**
   - Sign up at https://platform.openai.com
   - Get your API key
   - Add to environment: `OPENAI_API_KEY=your_key`

## 📦 Deployment to Vercel

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)

### Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

4. **Set Environment Variables**
   
   In Vercel Dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add: `GEMINI_API_KEY` with your API key
   - Click "Save"

5. **Redeploy**
   ```bash
   vercel --prod
   ```

## 🏗️ Project Structure

```
people connect/
├── index.html              # Main HTML file
├── styles.css             # All styling and animations
├── app.js                 # Frontend JavaScript logic
├── api/
│   ├── generate.js        # Gemini API integration
│   └── generate-alternative.js  # Alternative implementations
├── package.json           # Dependencies
├── vercel.json           # Vercel configuration
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## 🎨 Customization

### Change Website Name

1. Update the title in `index.html`
2. Update the logo text in navigation and footer
3. Update the `package.json` name field

### Modify Poses

Edit the `pose-grid` section in `index.html` to add/remove poses:

```html
<div class="pose-card" data-pose="your-pose-name">
    <div class="pose-emoji">🎭</div>
    <h4>Your Pose Name</h4>
    <p>Description</p>
</div>
```

### Customize Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
```

## 🔧 Technical Details

### Frontend Stack
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox/grid, animations
- **Vanilla JavaScript**: No frameworks for maximum performance

### Backend Stack
- **Vercel Serverless Functions**: For API endpoints
- **Node.js**: Runtime environment
- **Google Gemini API**: AI image analysis

### Key Features Implementation

#### Image Upload
- Drag & drop support
- File validation (type, size)
- Base64 encoding for API transmission
- Real-time preview

#### Pose Selection
- Interactive cards with selection state
- Visual feedback on hover/selection
- 8 predefined poses for different scenarios

#### AI Processing
- Intelligent prompt generation based on pose
- Image analysis with Gemini
- Error handling and user feedback

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Google Gemini API key | Yes |
| `REPLICATE_API_TOKEN` | Replicate API token (optional) | No |
| `OPENAI_API_KEY` | OpenAI API key (optional) | No |

## 🐛 Troubleshooting

### "API key not configured" error
- Ensure `GEMINI_API_KEY` is set in Vercel environment variables
- Redeploy after adding environment variables

### Images not uploading
- Check file size (max 10MB)
- Ensure file format is JPG, PNG, or WebP
- Check browser console for errors

### API timeout
- Gemini API might be slow on free tier
- Consider upgrading or using Replicate for faster generation

## 🚧 Roadmap

- [ ] Integration with Imagen API for actual image generation
- [ ] More pose options and customization
- [ ] Background selection
- [ ] Lighting adjustment controls
- [ ] Batch processing
- [ ] Social sharing features
- [ ] User galleries (optional authentication)

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes!

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 💡 Tips for Best Results

1. **Use High-Quality Photos**: Better input = better output
2. **Similar Lighting**: Photos with similar lighting conditions work best
3. **Clear Subjects**: Make sure people are clearly visible
4. **Appropriate Poses**: Choose poses that make sense for the relationship
5. **Consistent Backgrounds**: Similar backgrounds help create cohesive results

## 🙏 Acknowledgments

- Google Gemini AI for powerful image analysis
- Vercel for seamless deployment
- The open-source community for inspiration

## 📧 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Contact: your-email@example.com

---

**Made with ❤️ for bringing people together through photos**

*Star ⭐ this repo if you find it helpful!*
