// Configuration for video scroll behavior
export const videoConfig = {
  // How many viewport heights to scroll through (e.g., 5 = 500vh)
  scrollMultiplier: 5,
  
  // Controls the smoothness of video scrubbing (higher = smoother but more delayed)
  scrubSmoothness: 1,
  
  // Video source path
  videoSrc: "/videos/output_vid_9600.mp4", // Update this with your video path
  
  // Timing configuration for each scene
  // These times should match your video timestamps
  sceneTiming: [
    { scene: 0, videoTime: 0 },     // Scene 0 starts at 0s
    { scene: 1, videoTime: 3 },     // Scene 1 starts at 3s
    { scene: 2, videoTime: 9 },
    { scene: 3, videoTime: 12 }
  ]
}; 