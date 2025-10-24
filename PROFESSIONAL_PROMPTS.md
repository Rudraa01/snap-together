# 🎯 Professional Prompts & Best Practices

## Website Name: SnapTogether (Recommended)

### Alternative Names Ranked by Professional Appeal:

1. **SnapTogether** ⭐⭐⭐⭐⭐
   - Memorable, action-oriented, conveys unity
   - Great for branding and marketing
   - Easy to pronounce and spell

2. **PhotoMerge** ⭐⭐⭐⭐
   - Clear, descriptive, SEO-friendly
   - Professional but might be generic

3. **MergeMe** ⭐⭐⭐⭐
   - Personal, catchy, modern
   - Great for consumer appeal

4. **FamilyFrame** ⭐⭐⭐⭐
   - Emotional connection, warm feeling
   - Perfect for family-focused marketing

5. **UnitePhoto** ⭐⭐⭐⭐
   - Professional, global appeal
   - Clear value proposition

---

## 🎨 Complete AI Prompt Templates

### Master Prompt Generator

```javascript
// Use this function in your code for dynamic prompt generation
function generateMasterPrompt(pose, photo1Description, photo2Description) {
    const basePrompt = `
Create a photorealistic, professional-quality image of two people together.

SUBJECTS:
- Person 1: ${photo1Description}
- Person 2: ${photo2Description}

POSE: ${getPoseDescription(pose)}

TECHNICAL REQUIREMENTS:
- Professional DSLR photography quality
- Natural, realistic lighting (soft, diffused)
- Consistent shadows and highlights on both people
- Proper depth of field (f/2.8-f/4)
- Slight background blur (bokeh effect)
- Natural color grading with warm tones
- High resolution, sharp focus on subjects
- Professional composition following rule of thirds

LIGHTING:
- Main light: Soft, directional from 45° camera left
- Fill light: Natural ambient, reducing harsh shadows
- Same color temperature for both subjects (5500K daylight)
- Consistent light intensity and direction
- Natural catchlights in eyes

BACKGROUND:
- Slightly blurred, neutral setting
- Matches the mood of the pose
- Simple, non-distracting
- Complements subjects without overwhelming
- Natural environment (indoor/outdoor as appropriate)

MOOD & ATMOSPHERE:
- Warm, inviting, genuine
- Natural, candid feeling
- Appropriate emotion for ${pose}
- Professional but not stiff
- Authentic human connection

CRITICAL: 
Make this look like a REAL photograph taken in one shot by a professional 
photographer. No composite artifacts, perfect lighting match, unified scene.
The two people should appear to genuinely be in the same place at the same time.

Style: Professional lifestyle photography, natural and authentic.
    `.trim();
    
    return basePrompt;
}
```

---

## 📋 Detailed Pose Descriptions

### 1. Hugging 🤗

**Prompt**:
```
Two people in a warm, affectionate hug. Arms wrapped around each other naturally,
bodies close, genuine smiles or peaceful expressions. One person slightly taller 
may have arm over the other's shoulder. Close intimate spacing showing strong 
emotional connection. Natural embrace without stiffness.

Body Language: Relaxed shoulders, gentle pressure, heads may touch or be close.
Emotion: Love, warmth, comfort, joy
Distance: Very close (touching)
Camera Angle: Slightly from side to show embrace, or front-facing
```

**Best For**: Couples, family members, close friends

---

### 2. Standing Together 🧍‍♂️🧍‍♀️

**Prompt**:
```
Two people standing side by side in a friendly, relaxed pose. Shoulders aligned,
bodies at comfortable distance (6-12 inches apart). Both facing camera or slightly
angled toward each other. Arms hanging naturally or one arm around shoulder.
Confident, friendly posture.

Body Language: Upright but relaxed, natural smiles, eye contact with camera
Emotion: Friendly, confident, companionable
Distance: Close but not touching (or light shoulder touch)
Camera Angle: Front-facing or slightly from side
```

**Best For**: Colleagues, friends, siblings, formal photos

---

### 3. Sitting 🪑

**Prompt**:
```
Two people seated next to each other in comfortable, relaxed positions. On a couch,
bench, or chairs. Bodies angled slightly toward each other showing engagement.
Hands resting naturally on lap or armrest. Casual, comfortable atmosphere.
Natural sitting postures without stiffness.

Body Language: Leaning slightly together, relaxed shoulders, comfortable spacing
Emotion: Relaxed, casual, comfortable, conversational
Distance: Sitting close, light contact possible
Camera Angle: Slightly above eye level, capturing both people clearly
```

**Best For**: Casual family photos, couples, interviews, relaxed settings

---

### 4. Holding Hands 👫

**Prompt**:
```
Two people standing close together, holding hands with visible hand clasp between
them. Gentle, natural grip showing affection. Bodies facing camera or slightly
toward each other. Free arms hanging naturally. Romantic or supportive pose.
Hands positioned naturally at comfortable height.

Body Language: Close proximity, gentle touch, warm expressions
Emotion: Romantic, supportive, affectionate, tender
Distance: Very close (2-6 inches apart)
Camera Angle: Front or three-quarter view showing hand hold clearly
```

**Best For**: Romantic couples, parent-child, supportive moments

---

### 5. Shoulder to Shoulder 🤝

**Prompt**:
```
Two people standing with shoulders touching, showing camaraderie and friendship.
Both facing same direction (camera) with shoulders aligned. Slight lean toward
each other showing closeness. Relaxed, friendly stance. Natural, casual posture.

Body Language: Relaxed, friendly lean, comfortable touch
Emotion: Friendship, support, solidarity, fun
Distance: Shoulders touching, rest of bodies 3-6 inches apart
Camera Angle: Straight front view showing shoulder connection
```

**Best For**: Best friends, siblings, teammates, buddies

---

### 6. Parent & Child 👨‍👧

**Prompt**:
```
Parent and child in loving family moment. Parent may be kneeling to child's level
or child may be in parent's arms or standing close. Protective, nurturing body
language from parent. Child looks comfortable and happy. Natural height difference
appropriate to ages. Warm, tender interaction.

Body Language: Parent protective, child trusting, natural embrace or close proximity
Emotion: Love, protection, nurture, family warmth
Distance: Very close or touching (depending on pose variation)
Camera Angle: Level with subjects' eyes, capturing connection
```

**Best For**: Parents with children, grandparent-grandchild, guardian-child

---

### 7. Group Photo 👨‍👩‍👧‍👦

**Prompt**:
```
Two people positioned for a classic family portrait. Both facing camera directly
with warm, genuine smiles. Proper spacing for formal yet warm appearance.
Professional posture but natural expressions. May be standing or seated.
Traditional portrait composition.

Body Language: Open, facing camera, welcoming postures
Emotion: Warm, happy, welcoming, family pride
Distance: Close enough to show unity (4-8 inches)
Camera Angle: Straight on, professional portrait angle
```

**Best For**: Family portraits, professional photos, formal occasions

---

### 8. Casual 😊

**Prompt**:
```
Two people in natural, unstaged casual pose standing or sitting together.
Relaxed body language, natural smiles or expressions. No specific formal pose,
allowing natural interaction. Comfortable spacing based on relationship.
Authentic, candid feeling while still composed.

Body Language: Natural, relaxed, genuine interaction
Emotion: Happy, comfortable, authentic, easy-going
Distance: Varies naturally (6-18 inches)
Camera Angle: Slightly casual angle, not overly formal
```

**Best For**: Everyday moments, candid captures, natural photos

---

## 🎨 Advanced Prompt Engineering Tips

### Lighting Scenarios

#### Golden Hour (Outdoor)
```
Lighting: Warm golden hour sunlight (late afternoon), soft diffused light from 
low sun angle, warm color temperature (3000-4000K), long soft shadows, natural 
fill from sky, magical warm glow on subjects
```

#### Indoor Studio
```
Lighting: Professional studio lighting setup, key light at 45° from camera left,
fill light from right reducing shadows, soft diffused sources, neutral color
temperature (5500K), controlled shadows, even illumination
```

#### Natural Window Light
```
Lighting: Soft natural window light from camera left, diffused through sheer 
curtains, gentle shadows, color temperature 5000-6500K, natural ambient fill,
soft and flattering
```

### Background Suggestions

#### Neutral Indoor
```
Background: Soft neutral wall (light gray or beige), slightly out of focus,
minimal distractions, professional portrait backdrop feel, clean and simple
```

#### Outdoor Nature
```
Background: Natural outdoor setting with blurred foliage, trees in soft focus,
natural colors (greens, browns), depth created through blur, organic and warm
```

#### Urban Contemporary
```
Background: Modern urban setting, architectural elements softly blurred,
neutral tones, contemporary and stylish, shallow depth of field
```

---

## 🔧 Technical Photography Terms for AI

### Camera Settings Simulation

```
Technical specs to include in prompts:
- Lens: 50mm or 85mm portrait lens
- Aperture: f/2.8 to f/4 (shallow depth of field)
- ISO: 200-400 (clean, low noise)
- Shutter: 1/125 - 1/250 (frozen motion)
- White Balance: 5500K daylight or warm (4500K)
- Focus: Sharp on subjects, background soft blur
- Composition: Rule of thirds, headroom, breathing space
```

### Quality Descriptors

```
Always include these quality markers:
- "Professional DSLR quality"
- "High resolution 8K detail"
- "Sharp focus on subjects"
- "Natural bokeh background blur"
- "Professional color grading"
- "Cinema-quality lighting"
- "Magazine cover quality"
- "Award-winning photography style"
```

---

## 🎯 Negative Prompts (What to Avoid)

```
NEVER include in generated images:
- Distorted faces or features
- Mismatched lighting direction
- Obvious composite seams
- Unrealistic shadows
- Artificial-looking poses
- Unnatural skin tones
- Blurry faces
- Pixelation or artifacts
- Inconsistent perspective
- Different photo styles
- Cartoon or illustrated looks
- Exaggerated expressions
- Photoshop artifacts visible
```

---

## 📊 Prompt Testing Matrix

### Test Different Variations

| Element | Variation A | Variation B | Variation C |
|---------|------------|------------|------------|
| **Lighting** | Golden hour | Soft studio | Window light |
| **Background** | Nature blur | Neutral gray | Urban modern |
| **Distance** | Very close | Medium | Relaxed |
| **Emotion** | Joyful | Serious | Playful |
| **Style** | Candid | Professional | Artistic |

---

## 💡 Pro Tips for Best Results

### 1. Input Photo Quality
- Use well-lit photos
- Clear, unblurred faces
- Similar quality levels
- Proper resolution (minimum 1000px)

### 2. Subject Matching
- Similar lighting conditions work best
- Matching color temperature
- Similar photo styles
- Compatible clothing formality

### 3. Pose Selection
- Consider relationship between people
- Match emotional tone
- Appropriate for context
- Natural for subjects' ages

### 4. Refinement
- Start with detailed prompts
- Iterate based on results
- Save successful prompt patterns
- Build a prompt library

---

## 📝 Prompt Template Variables

```javascript
// Use these variables in your templates

const promptVariables = {
    lighting: [
        'soft natural light',
        'golden hour sunlight',
        'studio lighting',
        'window light'
    ],
    background: [
        'soft blurred nature',
        'neutral studio backdrop',
        'urban contemporary',
        'indoor home setting'
    ],
    mood: [
        'warm and inviting',
        'professional and polished',
        'casual and relaxed',
        'romantic and tender'
    ],
    quality: [
        'professional photography',
        'magazine quality',
        'award-winning',
        'cinema-grade'
    ]
};

// Combine for dynamic prompts
function buildPrompt(pose, lighting, background, mood, quality) {
    return `${quality} photograph of ${pose}, ${lighting}, 
    ${background}, ${mood} atmosphere, photorealistic, 
    high detail, professional composition`;
}
```

---

## 🌟 Example: Perfect Prompt

Here's a complete, optimized prompt for reference:

```
Create a professional, photorealistic portrait photograph of two people in a 
warm, affectionate hug.

SUBJECTS:
- Person 1: Woman in her 30s, warm smile, brown hair, casual blue sweater
- Person 2: Young girl aged 8, joyful expression, wearing pink dress

POSE DETAILS:
The woman (mother) has her arms wrapped lovingly around the girl (daughter) 
from behind. The girl is in front, both looking at camera with genuine, warm 
smiles. Their heads are close together showing strong emotional bond. Natural, 
comfortable embrace without stiffness.

TECHNICAL PHOTOGRAPHY:
- Camera: 85mm portrait lens
- Settings: f/2.8, ISO 200, 1/200s
- Focus: Sharp on both faces, soft background blur
- Depth: Shallow depth of field with beautiful bokeh

LIGHTING:
- Golden hour natural light from camera left
- Soft, warm color temperature (4500K)
- Gentle shadows on camera right
- Natural fill light from sky
- Warm, magical glow on subjects

BACKGROUND:
- Soft blurred park setting
- Green foliage out of focus
- Natural outdoor environment
- Warm afternoon light filtering through trees

COMPOSITION:
- Rule of thirds placement
- Subjects filling 2/3 of frame
- Proper headroom and breathing space
- Balanced, professional framing

COLOR & MOOD:
- Warm, inviting color palette
- Natural skin tones
- Slight saturation boost
- Professional color grading
- Lifted shadows, gentle highlights

EMOTION:
Genuine love between mother and daughter, warm family moment, natural 
expressions of joy and affection, authentic connection visible

STYLE:
Professional lifestyle family photography, natural and warm, reminiscent 
of magazine-quality portraits, authentic and heartfelt

CRITICAL REQUIREMENT:
This must look like a REAL photograph taken in a single shot by a professional 
photographer. Perfect lighting consistency, unified scene, no composite artifacts, 
both subjects genuinely in same place and time. Photorealistic in every detail.

Quality: Magazine cover, award-winning family portrait, 8K resolution, 
professional grade
```

---

## ✅ Checklist for Perfect Prompts

- [ ] Detailed subject descriptions
- [ ] Specific pose with body language details
- [ ] Lighting direction and quality described
- [ ] Background type and blur level specified
- [ ] Technical camera settings included
- [ ] Color temperature and mood defined
- [ ] Emotional tone clearly stated
- [ ] Quality descriptors added
- [ ] "Real photograph" requirement emphasized
- [ ] Negative elements to avoid listed

---

**Remember**: The key to great AI-generated photos is detailed, specific prompts 
that describe exactly what you want. Don't be afraid to be verbose!

Happy merging! 🎉
