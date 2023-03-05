// Initialise variables
let homeData;

const setHomeData = () => {
  if (homeData.info) {
    // Set firstname
    document.getElementById("firstname").innerText = homeData.info?.firstname;

    // Set Title
    document.getElementById("title").innerText = homeData.info?.title;

    // Set Description
    document.getElementById("description").innerText =
      homeData.info?.description;

    // Set Profile Picture if path specified
    if (homeData.info?.profileImagePath === "") {
      document.getElementById("profile-container").classList.add("hidden");
    } else {
      document.getElementById("profile").src = homeData.info?.profileImagePath;
    }
  }

  // Email action button
  if (homeData.connect?.email) {
    // Set Connect button email address
    document.getElementById(
      "connect"
    ).href = `mailto:${homeData.connect?.email}`;
  } else {
    document.getElementById("connect").classList.add("hidden");
  }

  // Set theme
  if (homeData.general) {
    document
      .getElementById("connect")
      .classList.add(
        `bg-${homeData.general?.theme}-600`,
        `hover:border-${homeData.general?.theme}-200`,
        `hover:bg-${homeData.general?.theme}-700`
      );

    document
      .getElementById("blur")
      .classList.add(`bg-${homeData.general?.theme}-500`);
  }

  // Set Featured
  if (!homeData.featured?.enabled) {
    document.getElementById("featured").classList.add("hidden");
  }
  if (homeData.featured?.enabled && homeData.projects.length !== 0) {
    let featuredHTML = "";
    const projects = homeData.projects;
    homeData.featured?.selected.forEach((project) => {
      // Construct HTML
      const selectedProj = projects.filter((proj) => proj.id === project.id);
      featuredHTML += `
      <div
        class="bg-gray-100 p-5 border rounded border-l-4 border-l-gray-500 mb-4 lg:mb-0"
      >
        <h3 class="text-3xl mb-5 text-gray-900 font-medium">${
          selectedProj[0].name
        }</h3>
        <p class="mb-5 text-gray-800">
          ${
            selectedProj[0].description.length > 100
              ? `${selectedProj[0].description.substring(0, 100)}...`
              : selectedProj[0].description
          }
        </p>
        <a href="project.html?id=${
          selectedProj[0].id
        }" class="hover:underline underline-offset-2 text-gray-800">
          View Project
          <i class="fa-solid fa-circle-arrow-right"></i>
        </a>
      </div>
      `;
    });

    document.getElementById("featured-projects").innerHTML = featuredHTML;
  }
};

const initializeHome = async () => {
  // Get data
  await fetch("./data.json")
    .then((res) => res.json())
    .then((dat) => (homeData = dat));

  setHomeData();
};

initializeHome();
