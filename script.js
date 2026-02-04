document.addEventListener("DOMContentLoaded", () => {
    const sceneEl = document.querySelector('a-scene');
    const loadingDiv = document.querySelector('#loading');
    const scanningOverlay = document.querySelector('#overlay');

    // 1. Wait for AR Engine to be ready
    sceneEl.addEventListener("arReady", (event) => {
        console.log("Jewels-AI AR Engine Ready");
        loadingDiv.style.display = "none";
    });

    // 2. Error Handling (e.g., User denies camera access)
    sceneEl.addEventListener("arError", (event) => {
        console.error("AR Error:", event);
        alert("Camera access is required for the AR Magazine experience.");
    });

    // 3. Define your targets and their specific behaviors
    // We can loop through them to keep the code clean
    const targets = [
        { id: 0, name: "Gold Necklace", productId: "gold_necklace_01" },
        { id: 1, name: "Diamond Earrings", productId: "diamond_earrings_05" }
    ];

    targets.forEach((target) => {
        const entity = document.querySelector(`[mindar-image-target="targetIndex: ${target.id}"]`);

        // Triggered when the camera "sees" the magazine page
        entity.addEventListener("targetFound", event => {
            console.log(`Target Found: ${target.name}`);
            // You could trigger a sound effect here if you like!
        });

        // Triggered when the user moves the phone away
        entity.addEventListener("targetLost", event => {
            console.log(`Target Lost: ${target.name}`);
        });
    });
});

/**
 * Launch Virtual Try-On
 * This function handles the transition from Magazine to VTO
 * @param {string} productId - The unique ID for the jewellery item
 */
function launchVTO(productId) {
    // 1. Visual Feedback: Briefly hide the UI to show the click was registered
    const clickEffect = document.createElement('div');
    clickEffect.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(212,175,55,0.3); z-index:2000; pointer-events:none;";
    document.body.appendChild(clickEffect);

    console.log(`Transitioning to VTO for: ${productId}`);

    // 2. Redirect to your VTO page with the product parameter
    // We use a small delay so the user sees the "click" effect
    setTimeout(() => {
        window.location.href = `https://jewels-ai.online/tryon.html?product=${productId}`;
    }, 300);
}