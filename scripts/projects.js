// Initialise variables
let projectsData;

const setProjectsData = () => {
  // Populate projects
  let tempProjects = "";

  projectsData.projects.forEach((project, index) => {
    let modelViewerOrImage = "";
    if (project.model !== "") {
      modelViewerOrImage = `
        <!-- Model Viewer element -->
        <model-viewer
        class="border-2 w-1/2 h-[300px] rounded bg-gray-50"
        alt="chair component"
        src=${project.model !== "" && project.model}
        shadow-intensity="1"
        touch-action="pan-y"
        camera-orbit="calc(-1.0rad + env(window-scroll-y) * 0.2rad) calc(0deg + env(window-scroll-y) * 45deg) calc(5m - env(window-scroll-y) * 1m)"
        ></model-viewer>
      `;
    } else if (project.mainImage !== "") {
      modelViewerOrImage = `<img src=${project.mainImage} class="border-2 w-1/2 h-[300px] rounded bg-gray-50 object-cover" />`;
    } else {
      modelViewerOrImage = `
        <h1 class="border-2 w-1/2 h-[300px] rounded bg-gray-50 flex justify-center items-center text-4xl font-bold text-gray-300">
          Project #${index + 1}
        </h1>
      `;
    }

    tempProjects += `
      <!-- Card -->
      <div class="flex bg-gray-100 justify-between mb-10">
        ${index % 2 !== 0 ? modelViewerOrImage : ""}

        <div class="p-6 w-1/2">
          <h1 class="text-3xl font-bold mb-5 text-gray-800">${project.name}</h1>
          <p class="mb-5 text-gray-800">
            ${
              project.description.length > 100
                ? `${project.description.substring(0, 100)}...`
                : project.description
            }
          </p>
          <a href=${
            "/project.html?id=" + project.id
          } class="hover:underline underline-offset-2 text-gray-800">
            View Project
            <i class="fa-solid fa-circle-arrow-right"></i>
          </a>
        </div>

        ${index % 2 === 0 ? modelViewerOrImage : ""}
      </div>
    `;
  });

  document.getElementById("projects").innerHTML = tempProjects;
};

const initializeProjects = async () => {
  // Get data
  await fetch("./data.json")
    .then((res) => res.json())
    .then((dat) => (projectsData = dat));

  setProjectsData();
};

initializeProjects();
