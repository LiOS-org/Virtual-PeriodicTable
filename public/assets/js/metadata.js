let metadata;
async function fetchMetadata() {
    let response;
    const possiblePaths = [
        "./metadata.JSON",      // For root index.html
        "../../metadata.JSON"   // For elements/xyz/index.html
    ];
    
    let lastError;
    
    for (const path of possiblePaths) {
        try {
            response = await fetch(path);
            if (response.ok) {
                metadata = await response.json();
                console.log(`Successfully loaded metadata from: ${path}`);
                return;
            }
        } catch (error) {
            lastError = error;
            console.log(`Failed to load metadata from ${path}:`, error.message);
        }
    }
    
    // If we get here, none of the paths worked
    throw new Error(`Could not load metadata.JSON from any of the expected locations: ${possiblePaths.join(', ')}. Last error: ${lastError?.message}`);
}
try {
    await fetchMetadata();
    // Displaying General Informations
    const projectNameElement = document.querySelector(".project-name");
    const projectVersionElement = document.querySelector(".project-version");
    const versionNameElement = document.querySelector(".version-name");
    const latestReleaseElement = document.querySelector(".latest-release");
    
    if (projectNameElement) projectNameElement.textContent = metadata.projectName;
    if (projectVersionElement) projectVersionElement.textContent = metadata.version;
    if (versionNameElement) versionNameElement.textContent = metadata.versionName;
    if (latestReleaseElement) latestReleaseElement.href = `${metadata.github}/releases/tag/${metadata.version}`;
    
    // Displaying Licenses
    if (metadata.licenses && Array.isArray(metadata.licenses)) {
        const licenseContainer = document.querySelector(".license-container");
        if (licenseContainer) {
            const displayLicenses = (() => {
                metadata.licenses.forEach(license => {
                    const newLicense = document.createElement("a");
                    newLicense.href = license.copy;
                    newLicense.className = "lios-window-value-row";
                    newLicense.innerHTML = //html
                        `<span class = "key">${license.for}</span>
                         <span class = "value"> ${license.license}</span>
                        `;
                    licenseContainer.appendChild(newLicense);
                });
            })();
        }
    }
    
    console.log("Metadata successfully loaded and applied to the page.");
} catch (error) {
    console.error("Failed to load or apply metadata:", error);
    // Optionally show a user-friendly message or use fallback values
    const projectNameElement = document.querySelector(".project-name");
    if (projectNameElement) projectNameElement.textContent = "Virtual Periodic Table";
}
