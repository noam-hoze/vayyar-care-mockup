import { SCENES } from "./sceneRegistry";

export const scenes = [
    {
        scene: SCENES.MORNING_SHIFT,
        description:
            "Nurse Alice just got to her morning shift. Upon entering her desk she picks her phone and starts talking with VayyarCare.",
        sceneEmotion: "Prepared, clear-headed",
        subtitle: "Start your shift already knowing who needs you most!",
        calloutDisplayPercentage: "80",
        content: [
            "Room 302: Resident shows signs of unsteady walking",
            "Room 214: Bathroom visits increased 40% overnight",
            "Room 117: Sleep quality decreased to 68%",
        ],
    },
    {
        scene: SCENES.FALL_CHART,
        description: "Alice checks the fall chart of John",
        sceneEmotion: "Focused, organized, ready",
        subtitle: "",
    },
    {
        scene: SCENES.DOCUMENT_EVENT,
        description: "Alice asks VayyarCare to document the event.",
        sceneEmotion: "Subtle awareness, intelligent observation",
        subtitle: "Log a full shift's worth of movement with two taps.",
        calloutDisplayPercentage: "80",
    },
    {
        scene: SCENES.VC_CLINICAL,
        description: "Alice meets with the VC Clinical",
        sceneEmotion: "Discreet surveillance, confidence",
        subtitle: "Know when something's wrong — before it becomes a problem.",
        calloutDisplayPercentage: "80",
    },
    {
        scene: SCENES.VP_FAMILY,
        description: "VP Clinical meets with family",
        sceneEmotion: "Discreet surveillance, confidence",
        subtitle: "Know when something's wrong — before it becomes a problem.",
        calloutDisplayPercentage: "80",
    },
];
