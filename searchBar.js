/*
searchBar.js - AutoCompleteConfig to spread in Au
*/

const createAutoComplete = ({
  root,
  renderOption,
  onOptionSelect,
  inputValue,
  fetchData,
}) => {
  /*
  Confige root.innerHTML = to current form
-----1. To convert
        <div class="field has-addons has-addons-centered">
          <p class="control has-icons-left has-text-right is-expanded">
            <input
              id="autoCompleteTextInput"
              class="input is-medium"
              type="text"
              placeholder="...type here to start search"
            />
            <span class="icon is-medium is-left">
              <i class="fa-solid fa-satellite-dish"></i>
            </span>
          </p>
          <div class="control">
            <a class="button is-info is-medium"> Discover </a>
          </div>
        </div> 
        
 --------2. temp working form       
        <label><b>Search</b></label>
    <input class="input" />
    <div class="dropdown">
      <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
      </div>
    </div>

---------3.works ---no drop down
<div class="field has-addons has-addons-centered is-grouped-multiline">
  <p id= "InputField" class="control has-icons-left has-text-right is-expanded">
    <input
      id="autoCompleteTextInput"
      class="input is-medium"
      type="text"
      placeholder="...type here to start search"
    />
    <span class="icon is-medium is-left">
      <i class="fa-solid fa-satellite-dish"></i>
    </span>
  </p>
  <p class="control">
    <a class="button is-info is-medium"> Discover </a>
  </p>
  <div class="dropdown is-active">

  test#4
<input class="input" />
    <div class="dropdown">
      <div class="dropdown-menu">
       <div class="dropdown-content results"></div>
      </div>
    </div>
  */
  root.innerHTML = `
  <div class="animals-combobox">
  <label for="animal">Animal</label>
  <input id="animal" type="text" role="combobox" aria-autocomplete="inline" aria-controls="animals-listbox" aria-expanded="false" aria-haspopup="listbox">
  <ul id="animals-listbox" role="listbox" aria-label="Animals">
    <li id="animal-cat" role="option">Cat</li>
    <li id="animal-dog" role="option">Dog</li>
  </ul>
</div>
  
  
  `;
  /*

*/
  //set input search from api to query searchable terms
  const input = root.querySelector("input");
  const dropdown = root.querySelector(".dropdown");
  const resultsWrapper = root.querySelector("#ResultsContainer");
  /*

*/
  const onInput = async (event) => {
    const searchTerms = await fetchData(event.target.value);

    if (!searchTerms.length) {
      dropdown.classList.remove("is-active");
      return;
    }

    resultsWrapper.innerHTML = "";
    dropdown.classList.add("is-active");
    for (let searchTerm of searchTerms) {
      const option = document.createElement("a");

      option.classList.add("dropdown-searchTerm");
      option.innerHTML = renderOption(searchTerm);
      option.addEventListener("click", () => {
        dropdown.classList.remove("is-active");
        input.value = inputValue(searchTerm);
        onOptionSelect(searchTerm);
      });

      resultsWrapper.appendChild(option);
    }
  };
  /*
  Where onInput Is Called
*/
  input.addEventListener("input", debounce(onInput, 500));
  /*

*/
  document.addEventListener("click", (event) => {
    if (!root.contains(event.target)) {
      dropdown.classList.remove("is-active");
    }
  });
};
// JS auto completion tool
console.log("Autocomplete");
