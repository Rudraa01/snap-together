// ===== Global State Management =====
const state = {
    photo1: null,
    photo2: null,
    selectedPose: null,
    photo1Base64: null,
    photo2Base64: null
};

// ===== DOM Elements =====
const elements = {
    photo1Input: document.getElementById('photo1'),
    photo2Input: document.getElementById('photo2'),
    preview1: document.getElementById('preview1'),
    preview2: document.getElementById('preview2'),
    preview1Container: document.getElementById('preview1-container'),
    preview2Container: document.getElementById('preview2-container'),
    remove1Btn: document.getElementById('remove1'),
    remove2Btn: document.getElementById('remove2'),
    poseSelection: document.getElementById('poseSelection'),
    generateSection: document.getElementById('generateSection'),
    generateBtn: document.getElementById('generateBtn'),
    loadingContainer: document.getElementById('loadingContainer'),
    resultSection: document.getElementById('resultSection'),
    resultImage: document.getElementById('resultImage'),
    downloadBtn: document.getElementById('downloadBtn'),
    createAnotherBtn: document.getElementById('createAnotherBtn')
};

// ===== Helper Functions =====

/**
 * Convert file to base64 string
 */
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

/**
 * Validate image file
 */
function validateImage(file) {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!validTypes.includes(file.type)) {
        alert('Please upload a valid image file (JPG, PNG, or WebP)');
        return false;
    }

    if (file.size > maxSize) {
        alert('Image size should be less than 10MB');
        return false;
    }

    return true;
}

/**
 * Update UI based on current state
 */
function updateUI() {
    // Show pose selection if both photos are uploaded
    if (state.photo1 && state.photo2) {
        elements.poseSelection.style.display = 'block';
        elements.poseSelection.classList.add('slide-up');
    } else {
        elements.poseSelection.style.display = 'none';
        elements.generateSection.style.display = 'none';
    }

    // Show generate button if pose is selected
    if (state.photo1 && state.photo2 && state.selectedPose) {
        elements.generateSection.style.display = 'flex';
        elements.generateSection.classList.add('slide-up');
    } else {
        elements.generateSection.style.display = 'none';
    }
}

/**
 * Handle photo upload
 */
async function handlePhotoUpload(event, photoNumber) {
    const file = event.target.files[0];
    if (!file || !validateImage(file)) return;

    try {
        const base64 = await fileToBase64(file);
        
        if (photoNumber === 1) {
            state.photo1 = file;
            state.photo1Base64 = base64;
            elements.preview1.src = base64;
            elements.preview1.style.display = 'block';
            elements.preview1Container.style.display = 'none';
            elements.remove1Btn.style.display = 'flex';
        } else {
            state.photo2 = file;
            state.photo2Base64 = base64;
            elements.preview2.src = base64;
            elements.preview2.style.display = 'block';
            elements.preview2Container.style.display = 'none';
            elements.remove2Btn.style.display = 'flex';
        }

        updateUI();
    } catch (error) {
        console.error('Error uploading photo:', error);
        alert('Failed to upload photo. Please try again.');
    }
}

/**
 * Remove uploaded photo
 */
function removePhoto(photoNumber) {
    if (photoNumber === 1) {
        state.photo1 = null;
        state.photo1Base64 = null;
        elements.photo1Input.value = '';
        elements.preview1.src = '';
        elements.preview1.style.display = 'none';
        elements.preview1Container.style.display = 'flex';
        elements.remove1Btn.style.display = 'none';
    } else {
        state.photo2 = null;
        state.photo2Base64 = null;
        elements.photo2Input.value = '';
        elements.preview2.src = '';
        elements.preview2.style.display = 'none';
        elements.preview2Container.style.display = 'flex';
        elements.remove2Btn.style.display = 'none';
    }

    state.selectedPose = null;
    document.querySelectorAll('.pose-card').forEach(card => {
        card.classList.remove('selected');
    });

    updateUI();
}

/**
 * Handle pose selection
 */
function handlePoseSelection(event) {
    const poseCard = event.currentTarget;
    const pose = poseCard.dataset.pose;

    // Remove previous selection
    document.querySelectorAll('.pose-card').forEach(card => {
        card.classList.remove('selected');
    });

    // Add selection to clicked card
    poseCard.classList.add('selected');
    state.selectedPose = pose;

    updateUI();
}

/**
 * Generate prompt for Gemini based on selected pose
 */
function generatePrompt(pose) {
    const poseDescriptions = {
        'hugging': 'two people hugging each other warmly in a loving embrace, standing close together',
        'standing': 'two people standing side by side, shoulder to shoulder, in a friendly pose',
        'sitting': 'two people sitting next to each other in a relaxed, comfortable position',
        'holding-hands': 'two people holding hands affectionately, standing close together',
        'shoulder-to-shoulder': 'two people standing with shoulders touching, in a friendly casual pose',
        'parent-child': 'a parent and child in a loving family moment, with parent protective and caring',
        'group-photo': 'two people posing together for a family portrait, looking at camera with warm smiles',
        'casual': 'two people in a natural, casual stance standing together'
    };

    const description = poseDescriptions[pose] || poseDescriptions['casual'];

    return `Create a highly realistic, photorealistic image showing ${description}. 
The image should look natural and professionally photographed with:
- Realistic lighting and shadows that match between both people
- Proper depth of field and bokeh in background
- Natural skin tones and textures
- Cohesive composition with both people in the same environment
- Professional photography quality
- Warm, inviting atmosphere
- High detail and clarity
- The two people should appear to genuinely be in the same photograph together
Make it look like a real photograph that was taken in one shot, not a composite.`;
}

/**
 * Generate merged photo
 */
async function generateMergedPhoto() {
    if (!state.photo1 || !state.photo2 || !state.selectedPose) {
        alert('Please upload both photos and select a pose');
        return;
    }

    // Hide generate button, show loading
    elements.generateSection.style.display = 'none';
    elements.loadingContainer.style.display = 'block';
    elements.loadingContainer.classList.add('fade-in');
    elements.resultSection.style.display = 'none';

    try {
        const prompt = generatePrompt(state.selectedPose);

        // Call Vercel serverless function
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: prompt,
                photo1: state.photo1Base64,
                photo2: state.photo2Base64,
                pose: state.selectedPose
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.success && data.imageUrl) {
            // Display result
            elements.resultImage.src = data.imageUrl;
            elements.loadingContainer.style.display = 'none';
            elements.resultSection.style.display = 'block';
            elements.resultSection.classList.add('slide-up');

            // Scroll to result
            elements.resultSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            throw new Error(data.error || 'Failed to generate image');
        }
    } catch (error) {
        console.error('Error generating photo:', error);
        elements.loadingContainer.style.display = 'none';
        elements.generateSection.style.display = 'flex';
        
        alert('Failed to generate merged photo. Please check your API configuration and try again.\n\nError: ' + error.message);
    }
}

/**
 * Download result image
 */
async function downloadImage() {
    try {
        const imageUrl = elements.resultImage.src;
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `snaptogether-merged-${Date.now()}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error downloading image:', error);
        alert('Failed to download image. Please try right-clicking and saving the image manually.');
    }
}

/**
 * Reset and create another photo
 */
function createAnother() {
    // Reset state
    state.photo1 = null;
    state.photo2 = null;
    state.selectedPose = null;
    state.photo1Base64 = null;
    state.photo2Base64 = null;

    // Reset inputs
    elements.photo1Input.value = '';
    elements.photo2Input.value = '';

    // Reset previews
    elements.preview1.src = '';
    elements.preview1.style.display = 'none';
    elements.preview1Container.style.display = 'flex';
    elements.remove1Btn.style.display = 'none';

    elements.preview2.src = '';
    elements.preview2.style.display = 'none';
    elements.preview2Container.style.display = 'flex';
    elements.remove2Btn.style.display = 'none';

    // Reset pose selection
    document.querySelectorAll('.pose-card').forEach(card => {
        card.classList.remove('selected');
    });

    // Hide sections
    elements.poseSelection.style.display = 'none';
    elements.generateSection.style.display = 'none';
    elements.resultSection.style.display = 'none';

    // Scroll to upload section
    document.getElementById('upload').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Add drag and drop functionality
 */
function setupDragAndDrop(inputElement, photoNumber) {
    const label = inputElement.nextElementSibling;

    label.addEventListener('dragover', (e) => {
        e.preventDefault();
        label.style.borderColor = 'var(--purple-500)';
        label.style.background = '#fafaff';
    });

    label.addEventListener('dragleave', () => {
        label.style.borderColor = '#d1d5db';
        label.style.background = 'var(--bg-secondary)';
    });

    label.addEventListener('drop', (e) => {
        e.preventDefault();
        label.style.borderColor = '#d1d5db';
        label.style.background = 'var(--bg-secondary)';

        const file = e.dataTransfer.files[0];
        if (file && validateImage(file)) {
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            inputElement.files = dataTransfer.files;
            handlePhotoUpload({ target: inputElement }, photoNumber);
        }
    });
}

// ===== Event Listeners =====
function initializeEventListeners() {
    // Photo upload listeners
    elements.photo1Input.addEventListener('change', (e) => handlePhotoUpload(e, 1));
    elements.photo2Input.addEventListener('change', (e) => handlePhotoUpload(e, 2));

    // Remove photo listeners
    elements.remove1Btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        removePhoto(1);
    });
    elements.remove2Btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        removePhoto(2);
    });

    // Pose selection listeners
    document.querySelectorAll('.pose-card').forEach(card => {
        card.addEventListener('click', handlePoseSelection);
    });

    // Generate button listener
    elements.generateBtn.addEventListener('click', generateMergedPhoto);

    // Download button listener
    elements.downloadBtn.addEventListener('click', downloadImage);

    // Create another button listener
    elements.createAnotherBtn.addEventListener('click', createAnother);

    // Drag and drop setup
    setupDragAndDrop(elements.photo1Input, 1);
    setupDragAndDrop(elements.photo2Input, 2);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    console.log('SnapTogether initialized! 🎉');
});

// ===== Error Handling =====
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});
