/**
 * Radio Visualizer - Interactive analog radio tuner effect
 * 
 * Features:
 * - Mouse-reactive frequency bars that respond to cursor proximity
 * - Ghost/echo layer for phosphor persistence effect
 * - Dynamic frequency display that changes as you "tune" across the visualizer
 * - Pairs with CSS animations for static overlay, scan lines, tuning line, and interference bursts
 */

(function() {
    'use strict';

    // DOM Elements
    const visualizer = document.getElementById('visualizer');
    if (!visualizer) return; // Exit if visualizer not found on page

    const barsLayer = visualizer.querySelector('.bars-layer');
    const ghostLayer = visualizer.querySelector('.ghost-layer');
    const bars = barsLayer ? barsLayer.querySelectorAll('.viz-bar') : [];
    const ghostBars = ghostLayer ? ghostLayer.querySelectorAll('.viz-bar') : [];
    const freqDisplay = document.querySelector('.freq-number');

    // Configuration
    const config = {
        frequencies: ['88.1', '91.5', '95.3', '98.7', '101.1', '103.7', '106.3', '108.9'],
        defaultFrequency: '103.7',
        baseHeight: 20,
        maxHeight: 80,
        baseOpacity: 0.25,
        maxOpacity: 1.0,
        ghostHeightRatio: 0.8
    };

    /**
     * Handle mouse movement over the visualizer
     * Updates bar heights, opacity, and frequency display based on cursor position
     */
    function handleMouseMove(e) {
        const rect = visualizer.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const containerWidth = rect.width;
        const containerHeight = rect.height;

        // Update frequency display based on horizontal mouse position
        if (mouseX >= 0 && mouseX <= containerWidth && mouseY >= 0 && mouseY <= containerHeight) {
            const freqIndex = Math.floor((mouseX / containerWidth) * config.frequencies.length);
            if (freqDisplay) {
                freqDisplay.textContent = config.frequencies[Math.min(freqIndex, config.frequencies.length - 1)];
            }
        }

        // Update each bar based on distance from cursor
        bars.forEach((bar, index) => {
            const barRect = bar.getBoundingClientRect();
            const barCenterX = barRect.left + barRect.width / 2 - rect.left;

            // Calculate distance from mouse to bar center
            const distanceX = Math.abs(mouseX - barCenterX);
            const distanceY = Math.abs(mouseY - containerHeight / 2);
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

            // Calculate influence (closer = stronger effect)
            const maxDistance = containerWidth / 2;
            const influence = Math.max(0, 1 - distance / maxDistance);

            // Apply height and opacity based on influence
            const height = config.baseHeight + (influence * (config.maxHeight - config.baseHeight));
            bar.style.height = `${height}px`;
            bar.style.opacity = config.baseOpacity + (influence * (config.maxOpacity - config.baseOpacity));

            // Update corresponding ghost bar
            if (ghostBars[index]) {
                ghostBars[index].style.height = `${height * config.ghostHeightRatio}px`;
            }
        });
    }

    /**
     * Reset all bars to their default state when mouse leaves
     */
    function handleMouseLeave() {
        bars.forEach((bar, index) => {
            bar.style.height = '';
            bar.style.opacity = '';
            if (ghostBars[index]) {
                ghostBars[index].style.height = '';
            }
        });

        // Reset frequency display
        if (freqDisplay) {
            freqDisplay.textContent = config.defaultFrequency;
        }
    }

    // Event Listeners
    document.addEventListener('mousemove', handleMouseMove);
    visualizer.addEventListener('mouseleave', handleMouseLeave);

})();
