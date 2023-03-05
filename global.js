// Initialise variables
let data;

// Header Component
class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav
        class="flex justify-between items-center mb-10 mt-3 p-3 bg-gray-100 border rounded"
      >
        <!-- Left -->
        <div class="flex items-center">
          <h1 class="text-xl font-bold text-gray-800">
            ${data.info?.firstname && data.info.firstname}
            ${data.info?.lastname && " " + data.info.lastname}
          </h1>

          <div class="w-[2px] h-5 bg-gray-700 mx-5 hidden md:inline"></div>

          <!-- Pages -->
          <div class="md:flex hidden">
            <a
              href="/"
              class="group text-lg mr-4 font-medium text-gray-700 transition duration-300"
              >Home
              <span
                class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-gray-600"
              ></span>
            </a>
            <a
              href="/projects.html"
              class="group text-lg mr-4 font-medium text-gray-700 transition duration-300"
              >Projects
              <span
                class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-gray-600"
              ></span>
            </a>
            ${
              data.info?.resume !== ""
                ? `
                  <a
                    href=${data.info?.resume}
                    target="_blank"
                    class="group text-lg mr-4 font-medium text-gray-700 transition duration-300"
                  >Resume
                    <i class="fa-regular fa-file"></i>
                    <span
                      class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-gray-600"
                      ></span>
                  </a>
                `
                : ""
            }
          </div>
        </div>

        <!-- Right - Connect -->
        <div class="md:flex hidden">
          <!-- Email -->
          ${
            data.connect?.email !== ""
              ? `
                <a href="mailto:${data.connect?.email}" target="_blank" class="mr-5">
                  <i class="fa-regular fa-envelope"></i>
                </a>
              `
              : ""
          }

          <!-- LinkedIn -->
          ${
            data.connect?.linkedin !== ""
              ? `
                <a href="${data.connect?.linkedin}" target="_blank" class="mr-5">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              `
              : ""
          }

          <!-- YouTube -->
          ${
            data.connect?.youtube !== ""
              ? `
                <a href="${data.connect?.youtube}" target="_blank" class="mr-5">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              `
              : ""
          }

          <!-- Facebook -->
          ${
            data.connect?.facebook !== ""
              ? `
                <a href="${data.connect?.facebook}" target="_blank" class="mr-5">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              `
              : ""
          }

          <!-- GitHub -->
          ${
            data.connect?.github !== ""
              ? `
                <a href="${data.connect?.github}" target="_blank" class="mr-5">
                  <i class="fa-brands fa-github"></i>
                </a>
              `
              : ""
          }

          <!-- Instagram -->
          ${
            data.connect?.instagram !== ""
              ? `
                <a href="${data.connect?.instagram}" target="_blank" class="mr-5">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              `
              : ""
          }

          <!-- Codepen -->
          ${
            data.connect?.codepen !== ""
              ? `
                <a href="${data.connect?.codepen}" target="_blank" class="mr-5">
                  <i class="fa-brands fa-codepen"></i>
                </a>
              `
              : ""
          }
        </div>
        
        <!-- Burger menu for smaller screens -->
        <div class="cursor-pointer md:hidden" id="menu-burger">
          <i class="fa-solid fa-bars"></i>
        </div>
      </nav>
    `;
  }
}

// Configure menu for smaller screens
const configureMenuBurger = () => {
  let smallMenu = `
    <div class="w-screen h-screen bg-gray-100 fixed top-0 left-0 flex flex-col justify-center items-center hidden" id="small-menu">
      <!-- Pages -->
      <div class="flex flex-col">
        <a
          href="/"
          class="group text-2xl font-medium text-gray-700 transition duration-300 mb-5"
          >Home
          <span
            class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-gray-600"
          ></span>
        </a>
        <a
          href="/projects.html"
          class="group text-2xl font-medium text-gray-700 transition duration-300 mb-5"
          >Projects
          <span
            class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-gray-600"
          ></span>
        </a>
        ${
          data.info?.resume !== ""
            ? `
              <a
                href=${data.info?.resume}
                target="_blank"
                class="group text-2xl font-medium text-gray-700 transition duration-300 mb-5"
              >Resume
                <i class="fa-regular fa-file"></i>
                <span
                  class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-gray-600"
                  ></span>
              </a>
            `
            : ""
        }
      <div>

      <!-- Divider -->
      <div class="h-[1px] bg-gray-500 my-5"></div>

      <!-- Socials -->
      <div>
        <!-- Email -->
        ${
          data.connect?.email !== ""
            ? `
              <a href="mailto:${data.connect?.email}" target="_blank" class="mr-5">
                <i class="fa-regular fa-envelope"></i>
              </a>
            `
            : ""
        }

        <!-- LinkedIn -->
        ${
          data.connect?.linkedin !== ""
            ? `
              <a href="${data.connect?.linkedin}" target="_blank" class="mr-5">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            `
            : ""
        }

        <!-- YouTube -->
        ${
          data.connect?.youtube !== ""
            ? `
              <a href="${data.connect?.youtube}" target="_blank" class="mr-5">
                <i class="fa-brands fa-youtube"></i>
              </a>
            `
            : ""
        }

        <!-- Facebook -->
        ${
          data.connect?.facebook !== ""
            ? `
              <a href="${data.connect?.facebook}" target="_blank" class="mr-5">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            `
            : ""
        }

        <!-- GitHub -->
        ${
          data.connect?.github !== ""
            ? `
              <a href="${data.connect?.github}" target="_blank" class="mr-5">
                <i class="fa-brands fa-github"></i>
              </a>
            `
            : ""
        }

        <!-- Instagram -->
        ${
          data.connect?.instagram !== ""
            ? `
              <a href="${data.connect?.instagram}" target="_blank" class="mr-5">
                <i class="fa-brands fa-instagram"></i>
              </a>
            `
            : ""
        }

        <!-- Codepen -->
        ${
          data.connect?.codepen !== ""
            ? `
              <a href="${data.connect?.codepen}" target="_blank" class="mr-5">
                <i class="fa-brands fa-codepen"></i>
              </a>
            `
            : ""
        }
      </div>

      <!-- Close Button -->
      <div class="fixed top-10 right-10 text-3xl" id="menu-close">
        <i class="fa-solid fa-xmark"></i>
      </div>
    </div>
  `;

  document.body.innerHTML += smallMenu;

  document.getElementById("menu-burger").addEventListener("click", () => {
    document.getElementById("small-menu").classList.remove("hidden");
  });

  document.getElementById("menu-close").addEventListener("click", () => {
    document.getElementById("small-menu").classList.add("hidden");
  });
};

const initialize = async () => {
  // Get data
  await fetch("./data.json")
    .then((res) => res.json())
    .then((dat) => (data = dat));

  customElements.define("navbar-component", Navbar);

  configureMenuBurger();
};

initialize();
