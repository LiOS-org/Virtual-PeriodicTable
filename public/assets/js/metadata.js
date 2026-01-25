import { liosWindow } from "../../LiOS-Open/liosOpen.js";
let metadata;
async function fetchMetadata() {
    let response;
    const possiblePaths = [
        "../metadata.JSON",      // For root index.html
        "../../metadata.JSON"   // For elements/xyz/index.html
    ];
    
    let lastError;
    
    for (const path of possiblePaths) {
        try {
            response = await fetch(path);
            if (response.ok) {
                metadata = await response.json();
                return;
          };
        } catch (error) {
            lastError = error;
      };
  };
};

const updateAboutWindow = async () => {
  try {
    await fetchMetadata();
    // Displaying General Informations
    const projectNameElement = document.querySelector(".project-name");
    const projectVersionElement = document.querySelector(".project-version");
    const versionNameElement = document.querySelector(".version-name");
    const latestReleaseElement = document.querySelector(".latest-release");
    const projectChannel = document.querySelector(".channel");

    
    if (projectNameElement) projectNameElement.textContent = metadata.projectName;
    if (projectVersionElement) projectVersionElement.textContent = metadata.version;
    if (versionNameElement) versionNameElement.textContent = metadata.versionName;
    if (latestReleaseElement) latestReleaseElement.href = `${metadata.github}/releases/tag/${metadata.version}`;
    if (projectChannel) projectChannel.textContent = metadata.channel;
    
    // Displaying Licenses
    if (metadata.licenses && Array.isArray(metadata.licenses)) {
      const licenseContainer = document.querySelector(".about-license-container");
      licenseContainer.innerHTML = "";
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
    
  } catch (error) {
    // Optionally show a user-friendly message or use fallback values
    const projectNameElement = document.querySelector(".project-name");
    if (projectNameElement) projectNameElement.textContent = "Virtual Periodic Table";
  };
};

// Updating meta description
await fetchMetadata();
const metaDescriptionTag = document.querySelector('meta[name="description"]');
metaDescriptionTag.content = metadata.projectDescription
// LiOS Windows
const aboutWindow = await liosWindow.new();
aboutWindow.setId("About");
aboutWindow.setTitle("About");
aboutWindow.applyEffect.frostedGlass();
const aboutWindowContents = //html
    `          <img
            src="../assets/Favicon/500x500.svg"
            alt="Virtual Periodic Table"
            class="favicon"
          />
          <div class="lios-window-header project-name"><!-- View metadata.js--></div>
          <p>
            Virtual-PeriodicTable is an open-source project designed to provide
            a customizable and interactive periodic table. Unlike many existing
            solutions, this project emphasizes simplicity and accessibility,
            allowing anyone with basic knowledge of HTML and CSS to modify it
            according to their preferences.
          </p>
          <div class="lios-window-card frosted_background">
            <div class="lios-window-container-title">General Information</div>
            <a
              class="lios-window-value-row latest-release"
              ><span class="key">Version</span
              ><span class="value project-version"><!-- View metadata.js--></span></a
            >
            <div class="lios-window-value-row">
              <span class="key">Version name</span
              ><span class="value version-name"><!-- View metadata.js--></span>
            </div>
            <div class="lios-window-value-row">
              <span class="key">Channel</span
              ><span class="value channel"><!-- View metadata.js--></span>
            </div>
            <div class="lios-window-value-row">
              <span class="key">LiOS-Open Version</span
              ><span class="value">Unreleased, rolling</span>
            </div>
          </div>
          <div class="lios-window-card license-container frosted_background">
            <div class="lios-window-container-title">License Information</div>
            <div class = "about-license-container"></div>
          </div>
          <div class="lios-window-card frosted_background">
            <div class="lios-window-container-title">
              <span>More from Us</span>
            </div>
            <div class="lios-button-group more-from-us">
              <a
                href="https://liosorg.com"
                class="lios-button frosted_background"
                ><span>Visit LiOS</span></a
              >
              <a
                href="https://colors.liosorg.com"
                class="lios-button frosted_background"
                ><span>LiOS:Colors</span></a
              >
              <a
                href="https://techinformal.liosorg.com"
                class="lios-button frosted_background"
                ><span>Tech Informal</span></a
              >
            </div>
          </div>
`;
aboutWindow.setContents(aboutWindowContents);
document.querySelector(".header-about-button").addEventListener("click", () => {
  aboutWindow.open();
  updateAboutWindow();
});
// 