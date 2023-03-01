// Initialise variables
let homeData;

const setHomeData = () => {
  console.log(homeData);
  if (!homeData.info) {
    console.log("No info")
    return;
  }

  // Set firstname
  document.getElementById("firstname").innerText = homeData.info?.firstname

  // Set Title
  document.getElementById("title").innerText = homeData.info?.title

  // Set Description
  document.getElementById("description").innerText = homeData.info?.description

  // Set Connect button email address
  document.getElementById("connect").href = `mailto:${homeData.connect?.email}`
};

const initializeHome = async () => {
  // Get data
  await fetch("./data.json")
    .then((res) => res.json())
    .then((dat) => (homeData = dat));

  setHomeData();
};

initializeHome();
