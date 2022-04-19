console.log(alert("connected"));
/*
API INFO - MrrxfBkRraKb7d6DrQd6eShpll6SJFmELArFjzP6
You can start using this key to make web service requests. Simply pass your key in the URL when making a web request.
 Here's an example:
  https://api.nasa.gov/planetary/apod?api_key=MrrxfBkRraKb7d6DrQd6eShpll6SJFmELArFjzP6

APOD-Astronomy Picture of The Day
 HTTP Request
  "GET https://api.nasa.gov/planetary/apod"
  Params:
  date
  	YYYY-MM-DD	
      today
    	The date of the APOD image to retrieve
  start_date
  	YYYY-MM-DD
    	none
      	The start of a date range, when requesting date for a range of dates. Cannot be used with date.
  end_date
  	YYYY-MM-DD
    	today	The end of the date range, when used with start_date.
  count	int
  	none	
    If this is specified then count randomly chosen images will be returned. Cannot be used with date or start_date and end_date.
  thumbs
  	bool	
    False	Return the URL of video thumbnail. If an APOD is not a video, this parameter is ignored.
*/

const autoCompleteConfig = {
  renderOption(Image) {
    const imgSrc = Image.poster === "N/A" ? "" : Image.Poster;
    return `
      <img src="${imgSrc}"/>
      ${Image.Title} (${Image.Year})
    `;
  },

  inputValue(Image) {
    return Image.Title;
  },
  async fetchData(searchTerm) {
    const response = await axios.get("https://api.nasa.gov/planetary/apod", {
      params: {
        apikey: "MrrxfBkRraKb7d6DrQd6eShpll6SJFmELArFjzP6",
        s: searchTerm,
      },
    });

    if (response.data.Error) return [];

    return response.data.Search;
  },
};

createAutoComplete({
  ...autoCompleteConfig,
  root: document.querySelector("#autocomplete"),
  onOptionSelect(Image) {
    document.querySelector(".tutorial").classList.add("is-hidden");
    onImageSelect(Image, document.querySelector("#summary"));
  },
});

const onImageSelect = async (Image, summaryElement) => {
  const response = await axios.get("https://api.nasa.gov/planetary/apod", {
    params: {
      apikey: "MrrxfBkRraKb7d6DrQd6eShpll6SJFmELArFjzP6",
      i: Image.response,
    },
  });

  summaryElement.innerHTML = ImageTemplate(response.data);
};
