/*
landing Background
  This file sets the background of the HTML docment.body to the Astronomy Picture of the Day
@ params todaysDate
*/
let setBackground = document.body.style.background;
var today = new Date();
const [YYYY, MM, DD] = [
  today.getFullYear(),
  ("0" + (today.getMonth() + 1)).slice(-2),
  today.getDate(),
];
let Return = `${YYYY}` + "-" + `${MM}` + "-" + `${DD}`;

const onLoad = {
  async fetchData() {
    const response = await axios.get("https://api.nasa.gov/planetary/apod", {
      params: {
        apikey: "MrrxfBkRraKb7d6DrQd6eShpll6SJFmELArFjzP6",
        date: `${Return}`,
      },
    });

    if (response.data.Error) return [];

    return console.log(response.data);
    //return setBackGround = `${response.data.imageurl}`
  },
};
