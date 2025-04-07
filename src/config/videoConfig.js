import { SCENES, MAX_SCENES } from "../data/sceneRegistry";

// Storage key for local storage
const STORAGE_KEY = "vayyar_custom_video";

// Default video configuration
const defaultConfig = {
    // How many viewport heights to scroll through
    scrollMultiplier: MAX_SCENES,

    // Controls the smoothness of video scrubbing (higher = smoother but more delayed)
    scrubSmoothness: 1,

    // Video source path
    videoSrc: "", // Default video path

    // Timing configuration for each scene
    // These times should match your video timestamps
    sceneTiming: [
        { scene: SCENES.MORNING_SHIFT, videoTime: 0 }, // Scene 0 starts at 0s
        {
            scene: SCENES.FALL_CHART,
            scrollingPercentage: {
                0: { videoTime: 5 },
                75: { videoTime: 10 },
            },
        }, // Scene 1 starts at 3s
        { scene: SCENES.DOCUMENT_EVENT, videoTime: 10 },
        { scene: SCENES.VC_CLINICAL, videoTime: 30 },
    ],
};

// Check if there's a saved custom video URL in localStorage
const loadSavedVideo = () => {
    try {
        const savedVideo = localStorage.getItem(STORAGE_KEY);
        if (savedVideo) {
            // Check if URL starts with 'https://' to identify Firebase Storage URLs
            if (
                savedVideo.startsWith("https://firebasestorage.googleapis.com")
            ) {
                return savedVideo;
            }
            // For backward compatibility with old localStorage data
            else {
                // If it's an object URL or other format, reset to default
                localStorage.removeItem(STORAGE_KEY);
            }
        }
    } catch (error) {
        console.error("Error loading saved video:", error);
    }
    return defaultConfig.videoSrc;
};

// Create a mutable copy of the configuration
export const videoConfig = {
    ...defaultConfig,
    videoSrc: loadSavedVideo(),
};

// Function to update the video source
export const updateVideoSource = (newSource) => {
    videoConfig.videoSrc = newSource;

    try {
        // Save to localStorage for persistence
        localStorage.setItem(STORAGE_KEY, newSource);
    } catch (error) {
        console.error("Error saving video URL:", error);
    }

    // Return the updated config for chaining
    return videoConfig;
};

// Function to reset to default video
export const resetToDefaultVideo = () => {
    videoConfig.videoSrc = defaultConfig.videoSrc;

    try {
        // Remove from localStorage
        localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.error("Error removing saved video:", error);
    }

    // Return the updated config for chaining
    return videoConfig;
};

// Function to check if a custom video is active
export const isCustomVideoActive = () => {
    return videoConfig.videoSrc !== defaultConfig.videoSrc;
};

// Function to clear the video source and localStorage
export const clearVideoSource = () => {
    try {
        localStorage.removeItem(STORAGE_KEY);
        videoConfig.videoSrc = "";
        console.log("Video source cleared successfully");
    } catch (error) {
        console.error("Error clearing video URL:", error);
    }

    return videoConfig;
};
