let metadata;
async function fetchMetadata() {
    try {
        const response = await fetch("./metadata.JSON");
        metadata = await response.json();
    } catch (error) {
        console.log(error);
    }
}
await fetchMetadata();
// Displaying General Informations
document.querySelector(".project-name").textContent = metadata.projectName;
document.querySelector(".project-version").textContent = metadata.version;
document.querySelector(".version-name").textContent = metadata.versionName;
document.querySelector(".latest-release").href = `${metadata.github}/releases/tag/${metadata.version}`;
// Displaying Licenses
let licenses = metadata.licenses;
const licenseContainer = document.querySelector(".license-container");
const displayLicenses = (() => {
    licenses.forEach(license => {
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