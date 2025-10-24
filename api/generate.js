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
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).json({});
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
            return res.status(500).json({ 
                error: 'API key not configured. Please set GEMINI_API_KEY in Vercel environment variables.',
                success: false 
            });
        }

        // Initialize Gemini AI
        const genAI = new GoogleGenerativeAI(apiKey);
        
        // Use Gemini 2.0 Flash for image generation (or appropriate model)
        // Note: As of current date, Gemini primarily focuses on understanding images
        // For actual image generation, you might need to use Imagen API
        // This is a placeholder implementation - adjust based on actual API availability
        
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

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
        
        const result = await model.generateContent([
            enhancedPrompt,
            ...imageParts
        ]);

        const response = await result.response;
        const text = response.text();

        // IMPORTANT: This is a placeholder response
        // In production, you would:
        // 1. Use the Gemini response to refine your prompt
        // 2. Call an actual image generation API (like Imagen, DALL-E, etc.)
        // 3. Return the generated image URL

        // For now, we'll return a success with instructions
        return res.status(200).json({
            success: true,
            message: 'Analysis complete',
            analysis: text,
            imageUrl: photo1, // Placeholder - in production, return actual generated image
            note: 'This is a demo response. In production, integrate with Imagen API or similar image generation service.',
            instructions: {
                step1: 'Get Google Imagen API access',
                step2: 'Use Gemini analysis to create detailed prompt',
                step3: 'Generate image with Imagen API',
                step4: 'Return the generated image URL'
            }
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
