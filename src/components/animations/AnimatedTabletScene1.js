import React from "react";
import AnimatedMetric from "./AnimatedMetric";
import FadeInList from "./FadeInList";
import TabletLayout from "./TabletLayout";
import "./animations.css";

// Define the Vayyar blue color as a constant for reuse
const VAYYAR_BLUE = "rgba(5, 170, 233, 1)";

const AnimatedTabletScene1 = ({ scrollProgress = 0, scene }) => {
    // Current scene query and response
    const currentQuery = "Show me yesterday's summary";
    const textResponse = "Good morning Alice! Here's your shift summary.";

    // Bridge query to scene 2
    const nextQuery = "Show me Joe's fall analysis for May";

    // Summary items from the scene data
    const summaryItems = scene.content || [];

    // Render the summary item with appropriate styling
    const renderSummaryItem = (item, index) => (
        <div key={index} className="animated-tablet-summary-item">
            <span className="animated-tablet-summary-item-bullet">•</span>
            {item}
        </div>
    );

    // Calculate progress for the summary items fade-in
    const calculateSummaryProgress = () => {
        // Show summary items starting at 65% scroll
        if (scrollProgress < 65) return 0;
        // Complete showing all items by 85% scroll
        return Math.min(100, Math.max(0, ((scrollProgress - 65) / 20) * 100));
    };

    // Visual response content that will be displayed after the query
    const visualResponse = (
        <>
            {scrollProgress >= 60 && (
                <div className="animated-tablet-summary-title">
                    Shift Summary
                </div>
            )}

            {scrollProgress >= 65 && (
                <div className="animated-tablet-summary-container">
                    <FadeInList
                        items={summaryItems}
                        renderItem={renderSummaryItem}
                        progress={calculateSummaryProgress()}
                        delayBetween={150}
                    />
                </div>
            )}
        </>
    );

    return (
        <TabletLayout
            showMetrics={true}
            time="9:41 AM"
            currentQuery={currentQuery}
            nextQuery={nextQuery}
            textResponse={textResponse}
            scrollProgress={scrollProgress}
            queryStartThreshold={10}
            queryCompleteThreshold={25}
            responseStartThreshold={35}
            transitionStartThreshold={85}
            contentTransitionThreshold={95}
        >
            {visualResponse}
        </TabletLayout>
    );
};

export default AnimatedTabletScene1;
