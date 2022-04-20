const onLoad = {
  renderBackGround(Image) {
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
