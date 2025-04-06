/**
 * Central registry of scene identifiers
 * Use these constants whenever referring to scenes to ensure consistency
 */
export const SCENES = {
    MORNING_SHIFT: 0,
    FALL_CHART: 1,
    DOCUMENT_EVENT: 2,
    VC_CLINICAL: 3,
    VP_FAMILY: 4,
};

// Helper function to validate a scene index is valid
export function isValidScene(sceneIndex) {
    return Object.values(SCENES).includes(sceneIndex);
}

// Get the scene name for debugging purposes
export function getSceneName(sceneIndex) {
    const entry = Object.entries(SCENES).find(
        ([_, value]) => value === sceneIndex
    );
    return entry ? entry[0] : "UNKNOWN_SCENE";
}

// Get total number of scenes
export function getTotalScenes() {
    return Object.keys(SCENES).length;
}

// The number of scenes we want to display in the app
export const MAX_SCENES = 5;
