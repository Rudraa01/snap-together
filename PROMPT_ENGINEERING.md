# 🎨 AI Prompt Engineering Guide

## Overview

This document explains the prompt engineering strategy used in SnapTogether to create realistic merged photos using AI image generation.

## Core Prompt Structure

### Base Template

```
Create a highly realistic, photorealistic image showing [POSE_DESCRIPTION].

The image should look natural and professionally photographed with:
- Realistic lighting and shadows that match between both people
- Proper depth of field and bokeh in background
- Natural skin tones and textures
- Cohesive composition with both people in the same environment
- Professional photography quality
- Warm, inviting atmosphere
- High detail and clarity
- The two people should appear to genuinely be in the same photograph together

Make it look like a real photograph that was taken in one shot, not a composite.
```

## Pose-Specific Descriptions

### 1. Hugging
```
two people hugging each other warmly in a loving embrace, standing close together
```

**Prompt Engineering Tips**:
- Emphasize "warmth" and "loving"
- Include "close together" for proper positioning
- Suggest "natural embrace" for realistic body language

### 2. Standing Together
```
two people standing side by side, shoulder to shoulder, in a friendly pose
```

**Best Practices**:
- Specify "shoulder to shoulder" for exact positioning
- Use "friendly" to set the emotional tone
- Add "relaxed posture" for natural appearance

### 3. Sitting
```
two people sitting next to each other in a relaxed, comfortable position
```

**Optimization**:
- Include furniture context: "on a couch", "on a bench"
- Specify "comfortable" for natural body language
- Consider adding "casual clothing" for consistency

### 4. Holding Hands
```
two people holding hands affectionately, standing close together
```

**Key Elements**:
- Emphasize hand position and grip
- Include emotional context: "affectionately", "lovingly"
- Specify distance between people

### 5. Shoulder to Shoulder
```
two people standing with shoulders touching, in a friendly casual pose
```

**Details**:
- Physical contact point: "shoulders touching"
- Casual atmosphere
- Equal height consideration

### 6. Parent & Child
```
a parent and child in a loving family moment, with parent protective and caring
```

**Special Considerations**:
- Age difference specification
- Height difference
- Protective body language
- Warm, nurturing atmosphere

### 7. Group Photo
```
two people posing together for a family portrait, looking at camera with warm smiles
```

**Portrait-Specific**:
- "looking at camera" for engagement
- "warm smiles" for emotional connection
- Professional portrait composition

### 8. Casual
```
two people in a natural, casual stance standing together
```

**Flexibility**:
- Most generic pose
- Allows AI creativity
- Natural, unstaged appearance

## Advanced Prompt Engineering Techniques

### 1. Lighting Consistency

Always include:
```
- Consistent directional lighting from [direction]
- Matching shadows beneath both subjects
- Same color temperature on both people
- Natural ambient lighting
- Soft fill light to reduce harsh shadows
```

### 2. Background Integration

```
- Neutral, slightly blurred background
- Depth of field with f/2.8 aperture simulation
- Bokeh effect on background elements
- Unified environmental setting
- Matching perspective for both subjects
```

### 3. Physical Realism

```
- Accurate proportions between people
- Natural body language and posture
- Realistic hand positions
- Proper eye contact or gaze direction
- Natural facial expressions
```

### 4. Technical Photography Details

```
- Shot with 50mm lens perspective
- ISO 400, f/2.8, 1/200s equivalent look
- Professional DSLR quality
- Slight vignette on edges
- Natural color grading
```

## Dynamic Prompt Generation

### Analyzing Input Photos

Before generating, analyze each photo for:

1. **Lighting Direction**: Left, right, top
2. **Background Type**: Indoor, outdoor, neutral
3. **Clothing Style**: Formal, casual, colors
4. **Age Approximate**: Child, teen, adult, senior
5. **Pose/Angle**: Front-facing, side view, three-quarter

### Building Context-Aware Prompts

```javascript
function generateEnhancedPrompt(photo1Analysis, photo2Analysis, pose) {
    const lighting = harmonizeLighting(photo1Analysis.lighting, photo2Analysis.lighting);
    const background = selectBackground(photo1Analysis.bg, photo2Analysis.bg);
    const style = matchStyle(photo1Analysis.style, photo2Analysis.style);
    
    return `
    Professional photograph of ${photo1Analysis.description} and ${photo2Analysis.description}
    ${getPoseDescription(pose)}.
    
    Lighting: ${lighting}
    Background: ${background}
    Style: ${style}
    
    Technical specs:
    - Photography: Natural light, golden hour warmth
    - Composition: Rule of thirds, balanced framing
    - Focus: Both subjects sharp, background slightly soft
    - Color: Warm tones, slight saturation boost
    
    Make it look authentic, as if captured in a single moment.
    `;
}
```

## Quality Improvements

### Negative Prompts (What to Avoid)

```
Negative prompt: 
- No obvious photoshop artifacts
- No mismatched lighting
- No unrealistic shadows
- No distorted proportions
- No blurry faces
- No artificial-looking composition
- No inconsistent color grading
- No visible seams or edges
```

### Style Modifiers

Add these for better results:

```
- professional photography
- high resolution
- sharp focus
- natural colors
- 8k uhd
- dslr quality
- studio lighting (if applicable)
- golden hour lighting (for warmth)
- portrait mode
- bokeh background
```

## Model-Specific Optimizations

### For Stable Diffusion / SDXL
- Use weighted tokens: `(hugging:1.3)`
- Specify negative prompts heavily
- Include technical photography terms
- Use "masterpiece, best quality" prefix

### For DALL-E 3
- Natural language works best
- Be descriptive but concise
- Avoid technical jargon
- Focus on emotional context

### For Midjourney
- Use `--ar 3:2` for portrait aspect ratio
- Add `--stylize 50` for balanced realism
- Include `--quality 2` for best results
- Use photography style references

### For Imagen (Google)
- Similar to Gemini analysis output
- Descriptive, detailed prompts
- Natural language
- Context-rich descriptions

## Testing and Iteration

### A/B Testing Prompts

Test variations:
1. Short vs. detailed
2. Technical vs. emotional
3. Specific vs. general
4. Different pose descriptions

### User Feedback Loop

Collect:
- Which poses work best
- Which backgrounds are preferred
- Common failure modes
- User satisfaction ratings

## Example: Complete Prompt

```
Professional photograph of a smiling woman in her 30s wearing a blue dress and a young 
girl aged 8 in a pink outfit, in a loving parent-child moment. The mother has her arm 
around the daughter protectively, both looking at the camera with warm, genuine smiles.

Setting: Outdoor park setting with soft, natural lighting during golden hour. Background 
shows slightly blurred green foliage and warm sunlight filtering through trees.

Technical details:
- Shot with 85mm portrait lens at f/2.8
- Shallow depth of field with creamy bokeh
- Warm color temperature (5500K)
- Natural fill light from reflector
- Professional color grading with lifted shadows
- Slight vignette for focus
- High resolution, sharp focus on faces

Both subjects illuminated by same diffused sunlight from camera left, creating soft 
shadows camera right. Consistent color temperature and exposure across both people. 
Natural, candid moment captured as if in a single photograph.

Style: Professional family portrait, natural and warm, reminiscent of lifestyle 
photography. Image should look authentic and unedited, as if taken by a professional 
photographer in one shot.
```

## Conclusion

Effective prompt engineering for photo merging requires:

1. **Consistency**: Matching lighting, style, context
2. **Specificity**: Clear, detailed descriptions
3. **Realism**: Technical photography terms
4. **Emotion**: Appropriate tone and feeling
5. **Iteration**: Testing and refinement

The goal is always: **Make it look like a real photograph, not a composite.**

---

**Pro Tip**: The more specific and detailed your prompt, the better the AI can understand 
and generate exactly what you want. Don't be afraid to be verbose!
