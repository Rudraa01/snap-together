/**
 * Vercel Serverless Function for Google Gemini Image Generation
 * This API endpoint handles photo merging using Google's Gemini AI
 */

const { GoogleGenerativeAI } = require("@google/generative-ai");

// CORS headers for all responses
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

/**
 * Main handler function
 */
module.exports = async (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ 
            error: 'Method not allowed',
            success: false 
        });
    }

    try {
        const { prompt, photo1, photo2, pose } = req.body;

        // Validate input
        if (!prompt || !photo1 || !photo2 || !pose) {
            return res.status(400).json({ 
                error: 'Missing required parameters',
                success: false 
            });
        }

        // Get API key from environment variable
        const apiKey = process.env.GEMINI_API_KEY;
        
        if (!apiKey) {
            console.error('GEMINI_API_KEY not found in environment variables');
            return res.status(500).json({ 
                error: 'API key not configured. Please set GEMINI_API_KEY in environment variables.',
                success: false 
            });
        }

        console.log('API Key found, initializing Gemini AI...');

        // Initialize Gemini AI
        const genAI = new GoogleGenerativeAI(apiKey);
        
        // Use Gemini 1.5 Flash (stable model)
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // Convert base64 images to format Gemini expects
        const photo1Data = photo1.split(',')[1]; // Remove data:image/...;base64, prefix
        const photo2Data = photo2.split(',')[1];

        // Create enhanced prompt with both images
        const enhancedPrompt = `${prompt}

Please create a single, cohesive image that naturally merges these two people together in the specified pose: ${pose}.

Important requirements:
- Make the lighting consistent between both people
- Ensure shadows and highlights match
- Create a unified background that works for both subjects
- Match skin tones and color grading
- Position the people naturally according to the ${pose} pose
- Make it look like a real photograph, not a composite
- Ensure both people are clearly visible and well-composed`;

        // Prepare image parts for Gemini
        const imageParts = [
            {
                inlineData: {
                    data: photo1Data,
                    mimeType: "image/jpeg"
                }
            },
            {
                inlineData: {
                    data: photo2Data,
                    mimeType: "image/jpeg"
                }
            }
        ];

        // Generate content with images
        // NOTE: Current Gemini models analyze images but don't generate them
        // For actual image generation, you would need to:
        // 1. Use Google's Imagen API (when available)
        // 2. Use Gemini to analyze the images and create a detailed description
        // 3. Pass that description to an image generation service
        
        console.log('Sending request to Gemini API...');
        
        const result = await model.generateContent([
            enhancedPrompt,
            ...imageParts
        ]);

        const response = await result.response;
        const text = response.text();

        console.log('Gemini API response received successfully');

        // IMPORTANT: Gemini analyzes images but doesn't generate them
        // This returns the first photo as a placeholder
        // For production: integrate with Replicate, DALL-E, or Imagen for actual generation
        
        return res.status(200).json({
            success: true,
            message: 'Photo analysis complete! (Currently returning original photo as demo)',
            analysis: text,
            imageUrl: photo1, // Returns first photo - replace with actual generated image in production
            note: 'Demo mode: To generate actual merged photos, integrate with Replicate or DALL-E API. See README.md for instructions.'
        });

    } catch (error) {
        console.error('Error in generate API:', error);
        
        return res.status(500).json({ 
            error: error.message || 'Failed to generate image',
            success: false,
            details: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
};
