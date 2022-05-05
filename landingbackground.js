/*
landing Background
  This file sets the background of the HTML main section Element to the Astronomy Picture of the Day
@ params date is passed as YYYY-MM-DD
Example request:
https://api.nasa.gov/planetary/apod?api_key=SMcnNJzngrlKyVH47b06X49rp9kacFz3A8xqmdtp

*/
var today = new Date();
const [website, YYYY, MM, DD] = [
  document.body,
  today.getFullYear(),
  ("0" + (today.getMonth() + 1)).slice(-2),
  today.getDate(),
];
const Return = `${YYYY}` + "-" + `${MM}` + "-" + `${DD}`;
console.log(Return);

const fetchData = async (todaysDate) => {
  const response = await axios.get("https://api.nasa.gov/planetary/apod", {
    params: {
      date: todaysDate,
      api_key: "SMcnNJzngrlKyVH47b06X49rp9kacFz3A8xqmdtp",
    },
  });

  website.style.backgroundImage = `url(${response.data.hdurl})`;
  console.log(response.data);
};
fetchData(`${Return}`);

/*

Further objective to establish responsiveness for the primary structur of the Document
*/
