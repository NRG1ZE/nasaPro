/*
landing Background
  This file sets the background of the HTML docment.body to the Astronomy Picture of the Day
@ params date is passed as YYYY-MM-DD
Example request:
https://api.nasa.gov/planetary/apod?api_key=SMcnNJzngrlKyVH47b06X49rp9kacFz3A8xqmdtp
Debug-https://api.nasa.gov/planetary/apod?date=2022-04-21&apikey=SMcnNJzngrlKyVH47b06X49rp9kacFz3A8xqmdtp
*/
const hero = document.getElementById("searchbarContainer");
const website = document.body;
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
  website.style.backgroundImage = `url(${response.data.hdurl})`;
  console.log(response.data);
};
fetchData();

// capture = https://apod.nasa.gov/apod/image/2204/Apollo-16-station-10crop1110.jpg
//url("images/avatar.svg")
/*
Further objective to establish responsiveness for the primary structur of the Document
*/
//https://apod.nasa.gov/apod/image/2205/MercuryTailPleiades_Voltmer_1448.jpg
//https://apod.nasa.gov/apod/image/2205/MercuryTailPleiades_Voltmer_960_annotated.jpg
