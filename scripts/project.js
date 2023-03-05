// Initialise variables
let projectData;

const setProjectData = () => {
  // Get Params
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  let selectedProject;
  if (projectData) {
    projectData?.projects.forEach((project) => {
      if (project.id == params.id) {
        selectedProject = project;
      }
    });
  }

  if (selectedProject) {
    // Inject main media/model/text
    let selectedProjectMedia;
    if (selectedProject.model !== "") {
      selectedProjectMedia = `
        <!-- Model Viewer element -->
        <model-viewer
        class="border-2 w-full h-[400px] rounded bg-gray-50"
        alt="chair component"
        src=${selectedProject.model !== "" && selectedProject.model}
        shadow-intensity="1"
        touch-action="pan-y"
        camera-controls
        ></model-viewer>
      `;
    } else if (selectedProject.mainImage !== "") {
      selectedProjectMedia = `<img src=${selectedProject.mainImage} class="border-2 w-full h-[400px] rounded bg-gray-50 object-cover" />`;
    } else {
      selectedProjectMedia = `
        <h1 class="border-2 w-full h-[400px] rounded bg-gray-50 flex justify-center items-center text-4xl font-bold text-gray-300">
          Project ${selectedProject.name}
        </h1>
      `;
    }
    document.getElementById("p-selected-media").innerHTML =
      selectedProjectMedia;

    // Inject selected project title
    document.getElementById("p-selected-title").innerText =
      selectedProject.name;

    // Inject selected project description
    document.getElementById("p-selected-description").innerText =
      selectedProject.description;

    // Inject project images if present
    if (selectedProject?.images?.length > 0) {
      let images = "";

      selectedProject?.images.forEach((image) => {
        images += `
          <a target="_blank" href=${image.imagePath}
            ><img
              class="rounded-md p-1 h-[200px] w-full object-cover"
              src=${image.imagePath}
              title="Image"
              alt=""
          /></a>
        `;
      });

      document.getElementById("p-selected-images").innerHTML = images;
    } else {
      document.getElementById("p-selected-images").classList.remove("grid");
      document
        .getElementById("p-selected-images")
        .classList.add("flex", "justify-center", "items-center");
      document.getElementById(
        "p-selected-images"
      ).innerHTML = `<h1 class="text-center text-4xl font-bold text-gray-300">
        No Additional Images
      </h1>`;
    }
  }
};

const initializeProject = async () => {
  // Get data
  await fetch("./data.json")
    .then((res) => res.json())
    .then((dat) => (projectData = dat));

  setProjectData();
};

initializeProject();
