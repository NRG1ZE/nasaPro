//INFO GRAVEYARD
const jsonReturn = {
  collection: {
    href: "https://images-api.nasa.gov/search?q=apollo%2011...",
    items: [
      {
        data: [
          {
            center: "JSC",
            date_created: "1969-07-21T00:00:00Z",
            description: `"AS11-40-5874 (20 July 1969) ---
Astronaut Edwin E. Aldrin Jr., lunar module pilot
of the first lunar landing mission, poses for a
photograph beside the deployed United States flag
during Apollo 11 extravehicular activity (EVA) on
the lunar surface. The Lunar Module (LM) is on the
left, and the footprints of the astronauts are
clearly visible in the soil of the moon. Astronaut
Neil A. Armstrong, commander, took this picture
with a 70mm Hasselblad lunar surface camera. While
astronauts Armstrong and Aldrin descended in the LM
the \"Eagle\" to explore the Sea of Tranquility
region of the moon, astronaut Michael Collins,
command module pilot, remained with the Command and
Service Modules (CSM) \"Columbia\" in lunar
orbit."`,
            keywords: [
              "APOLLO 11 FLIGHT",
              "MOON",
              "LUNAR SURFACE",
              "LUNAR BASES",
              "LUNAR MODULE",
              "ASTRONAUTS",
              "EXTRAVEHICULAR ACIVITY",
            ],
            media_type: "image",
            nasa_id: "as11-40-5874",
            title: `"Apollo 11 Mission image - Astronaut Edwin Aldrin
poses beside th"`,
          },
        ],
        href: "https://images-assets.nasa.gov/image/as11-40-5874/collection.json",
        links: [
          {
            href: "https://images-assets.nasa.gov/image/as11-40-5874/as11-40-5874~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
    ],
    links: [
      {
        href: "https://images-api.nasa.gov/search?q=apollo+11...&page=2",
        prompt: "Next",
        rel: "next",
      },
    ],
    metadata: {
      total_hits: 336,
    },
    version: "1.0",
  },
};

// Create a match function
// function mViewport(x) {
//   if (x.matches) {
//     document
//       .getElementById("myViewport")
//       .setAttribute("content", "width=device-width, height=device-height");
//   }
// }

// // // Create a MediaQueryList object
// const viewportShift = this.matchMedia("(max-width: 700px)");

// // Call the match function at run time:
// mViewport(viewportShift);
// const webBody = document.getElementById("bodyCenter");
// let height = window.innerHeight;
// let width = window.innerWidth;
// webBody.height = height * 0.7;
//let background = document.querySelector("img");
// background.style.minHeight = window.innerHeight;
// background.style.minWidth = window.innerWidth;
// let imageToFill = document.querySelector("img");
// imageToFill.style.minHeight = window.innerHeight;
// imageToFill.style.minWidth = window.innerWidth;

// imageToFill.style.aspectRatio = "auto";
//  fill- This is default. The image is resized to fill the given dimension. If necessary, the image will be stretched or squished to fit
// contain - The image keeps its aspect ratio, but is resized to fit within the given dimension
// cover - The image keeps its aspect ratio and fills the given dimension. The image will be clipped to fit
// none - The image is not resized
// scale-down

//"url('apod.nasa.gov/apod/image/2204/Apollo-16-station-10crop1110.jpg')";

const fetchDataTest = async (searchTerm) => {
  const response = await axios.get(BASEURL + SEARCHEND, {
    params: {
      q: searchTerm,
    },
  });
  console.log(response.data);
  const firstCard = response.data.data[0];
  console.log(firstCard);
  const tester = document.querySelector("#testdiv");
  const card = document.createElement("div");
  const imageSource = firstCard.image_uris.small;
  //card.innerHTML = ` <img src="${imageSource}"/>`;
  tester.appendChild(card);
  const images = Object.keys(firstCard.image_uris);
  images.forEach((prop) => {
    const img = document.createElement("img");
    const p = document.createElement("p");
    p.innerText = prop;
    img.src = firstCard.image_uris[prop];
    card.appendChild(img);
    card.appendChild(p);
  });
};

const runComparison = () => {
  const leftSideStats = document.querySelectorAll(
    "#left-summary .notification"
  );
  const rightSideStats = document.querySelectorAll(
    "#right-summary .notification"
  );

  leftSideStats.forEach((leftStat, index) => {
    const rightStat = rightSideStats[index];

    const leftSideValue = leftStat.dataset.value;
    const rightSideValue = rightStat.dataset.value;

    if (rightSideValue > leftSideValue) {
      leftStat.classList.remove("is-primary");
      leftStat.classList.add("is-warning");
    } else {
      rightStat.classList.remove("is-primary");
      rightStat.classList.add("is-warning");
    }
  });
};

const movieTemplate = (movieDetail) => {
  const dollars = parseInt(
    movieDetail.BoxOffice.replace(/\$/g, "").replace(/,/g, "")
  );
  const metascore = parseInt(movieDetail.Metascore);
  const imdbRating = parseFloat(movieDetail.imdbRating);
  const imdbVotes = parseInt(movieDetail.imdbVotes.replace(/,/g, ""));
  const awards = movieDetail.Awards.split(" ").reduce((prev, word) => {
    const value = parseInt(word);

    if (isNaN(value)) {
      return prev;
    } else {
      return prev + value;
    }
  }, 0);

  return ``;
  /**
   * Reconfige
    <article class="media">
      <figure class="media-left">
        <p class="image">
          <img src="${movieDetail.Poster}" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h1>${movieDetail.Title}</h1>
          <h4>${movieDetail.Genre}</h4>
          <p>${movieDetail.Plot}</p>
        </div>
      </div>
    </article> */
};
/*
  Confige root.innerHTML = to current form

        <div class="field has-addons has-addons-centered">
          <p class="control has-icons-left has-text-right is-expanded">
            <input
              id="autoCompleteTextInput"
              class="input is-medium"
              type="text"
              placeholder="...type here to start search"
            />
            <span class="icon is-medium is-left">
              <i class="fa-solid fa-satellite-dish"></i>
            </span>
          </p>
          <div class="control">
            <a class="button is-info is-medium"> Discover </a>
          </div>
        </div> 
        
        
        <label><b>Search</b></label>
    <input class="input" />
    <div class="dropdown">
      <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
      </div>
    </div>
  */
