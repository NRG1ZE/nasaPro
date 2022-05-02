/*
landing Background
  This file sets the background of the HTML docment.body to the Astronomy Picture of the Day
@ params date is passed as YYYY-MM-DD
Example request:
https://api.nasa.gov/planetary/apod?api_key=SMcnNJzngrlKyVH47b06X49rp9kacFz3A8xqmdtp
Debug-https://api.nasa.gov/planetary/apod?date=2022-04-21&apikey=SMcnNJzngrlKyVH47b06X49rp9kacFz3A8xqmdtp
*/

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

const website = document.body;

const form = `<div type="form" class="searchInput">
                <form id="keywordSearchBar">
                  <input id="keywordInput" type="text" class="" />
                   <button id="keywordButton"></button>
                </form>
              </div>`;
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
var today = new Date();
const [YYYY, MM, DD] = [
  today.getFullYear(),
  ("0" + (today.getMonth() + 1)).slice(-2),
  today.getDate(),
];
let Return = `${YYYY}` + "-" + `${MM}` + "-" + `${DD}`;
console.log(Return);

const fetchData = async () => {
  const response = await axios.get("https://api.nasa.gov/planetary/apod", {
    params: {
      date: `${Return}`,
      api_key: "SMcnNJzngrlKyVH47b06X49rp9kacFz3A8xqmdtp",
    },
  });

  //if (response.data.Error) return [];
  //imageToFill.src
  website.style.backgroundImage = `url(${response.data.url})`;
  console.log(response.data);
};
fetchData();

// capture = https://apod.nasa.gov/apod/image/2204/Apollo-16-station-10crop1110.jpg
//url("images/avatar.svg")
/*
Further objective to establish responsiveness for the primary structur of the Document
*/
