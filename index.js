console.log("connected");

const autoCompleteConfig = {
  renderText(Image) {
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
    return `
      <img src="${imgSrc}" />
      ${movie.Title} (${movie.Year})
    `;
  },
  inputValue(movie) {
    return movie.Title;
  },
  async fetchData(searchTerm) {
    const response = await axios.get(
      "https://images-api.nasa.gov" + "/search",
      {
        params: {
          s: searchTerm,
        },
        auth: {
          api_key: "SMcnNJzngrlKyVH47b06X49rp9kacFz3A8xqmdtp",
        },
      }
    );
    /**const fetchDataFromNASA = async (inputKeyword) => {
  const response = await axios.get(root + searchEndPoint, {
    params: {
      q: inputKeyword,
      media_type: "image",
    },
    
  });

  console.log(response.data);
}; */
    if (response.data.Error) {
      return [];
    }
    /**RETURN for Request */
    return response.data;
  },
};
//Root Param selects where to render auto complete
createAutoComplete({
  ...autoCompleteConfig,
  root: document.querySelector("#SearchField"),
  onOptionSelect(searchTerm) {
    onKeywordSelect(searchTerm, document.querySelector("#SummaryInput"));
  },
});

const onKeywordSelect = async (searchTerm, summaryElement) => {
  const response = await axios.get("http://www.placeholder.com/", {
    params: {
      apikey: "placeholder",
      q: searchTerm,
    },
  });

  summaryElement.innerHTML = imageTemplate(response.data);
};
const imageTemplate = (movieDetail) => {
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
