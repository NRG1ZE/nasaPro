console.log("UTILS.js:connected");
const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};
/**
 * API Root:
https://images-api.nasa.gov
API Endpoints:

 */

/**variables for calls
 * 
 * 
q (optional) -string- Free text search terms to compare to all indexed metadata.
center (optional) -string- NASA center which published the media.
description(optional) -string- Terms to search for in “Description” fields.
description_508(optional) -string- Terms to search for in “508 Description” fields.
keywords (optional) -string- Terms to search for in “Keywords” fields. Separate multiple values with commas.
location (optional) -string- Terms to search for in “Location” fields.
media_type(optional) -string- Media types to restrict the search to. Available types: [“image”, “audio”]. Separate multiple values with commas.
nasa_id (optional) -string- The media asset’s NASA ID.
page (optional) integer Page number, starting at 1, of results to get.
photographer(optional)-string- The primary photographer’s name.
secondary_creator(optional)-string- A secondary photographer/videographer’s name.
title (optional) -string- Terms to search for in “Title” fields.
year_start (optional) -string- The start year for results. Format: YYYY.
year_end (optional) -string- The end year for results. Format: YYYY.
 */
//root
const root = "https://images-api.nasa.gov";
let nasa_id = "";
let album_name = "";
//endpoints
const searchEndPoint = "/search";
const assetEndPoint = `/asset/'${nasa_id}'`;
const metaDataEndPoint = `/metadata/'${nasa_id}'`;
const captionshEndPoint = `/captions/'${nasa_id}'`;
const albumEndPoint = `/album/'${album_name}'`;

const fetchDataFromNASA = async (inputKeyword) => {
  const response = await axios.get(root + searchEndPoint, {
    params: {
      title: inputKeyword,
      media_type: "image",
    },
    auth: {
      api_key: "SMcnNJzngrlKyVH47b06X49rp9kacFz3A8xqmdtp",
    },
  });

  console.log("utils return:", response.data);
};
fetchDataFromNASA("mo");
