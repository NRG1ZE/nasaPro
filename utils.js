console.log("connected");
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

/**variables for calls */
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
      keyword: inputKeyword,
      media_type: "image",
      api_key: "SMcnNJzngrlKyVH47b06X49rp9kacFz3A8xqmdtp",
    },
  });

  console.log(response.data);
};
fetchDataFromNASA("Apollo");
