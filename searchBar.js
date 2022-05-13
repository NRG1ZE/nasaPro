/*

*/

const createAutoComplete = ({
  root,
  renderOption,
  onOptionSelect,
  inputValue,
  fetchData,
}) => {
  
  root.innerHTML = `
  <div class="field has-addons has-addons-centered is-grouped-multiline">
  <p id= "InputField" class="control has-icons-left has-text-right is-expanded">
    <input
      id="autoCompleteTextInput"
      class="input is-medium dropdown"
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
  
</div>
  `;
  /*

*/
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
