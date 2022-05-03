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
