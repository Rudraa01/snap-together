/**
 * Vercel Serverless Function for Google Gemini Image Generation
 * This API endpoint handles photo merging using Google's Gemini AI via OpenRouter
 */

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
        // Accepts either OPENROUTER_API_KEY or GEMINI_API_KEY (if user reused the variable name)
        const apiKey = process.env.OPENROUTER_API_KEY || process.env.GEMINI_API_KEY;
        
        if (!apiKey) {
            console.error('API Key not found in environment variables (OPENROUTER_API_KEY or GEMINI_API_KEY)');
            return res.status(500).json({ 
                error: 'API key not configured. Please set OPENROUTER_API_KEY in environment variables.',
                success: false 
            });
        }

        console.log('API Key found, authorizing with OpenRouter...');

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

        console.log('Sending request to OpenRouter API (google/gemini-flash-1.5)...');
        
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "HTTP-Referer": "https://snaptogether.vercel.app", // Site URL for rankings on OpenRouter
                "X-Title": "SnapTogether", // Site title for rankings on OpenRouter
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "google/gemini-flash-1.5",
                "messages": [
                    {
                        "role": "user",
                        "content": [
                            {
                                "type": "text",
                                "text": enhancedPrompt
                            },
                            {
                                "type": "image_url",
                                "image_url": {
                                    "url": photo1 // Keep the data:image prefix for OpenRouter
                                }
                            },
                            {
                                "type": "image_url",
                                "image_url": {
                                    "url": photo2
                                }
                            }
                        ]
                    }
                ]
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(`OpenRouter API Error: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`);
        }

        const data = await response.json();
        const text = data.choices[0].message.content;

        console.log('OpenRouter API response received successfully');

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
