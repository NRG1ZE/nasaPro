/*

*/
console.log("connected");
const createAutoComplete = ({
  root,
  renderOption,
  onOptionSelect,
  inputValue,
  fetchData,
}) => {
  /*
  Confige root.innerHTML = to current form

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
        
        
        <label><b>Search</b></label>
    <input class="input" />
    <div class="dropdown">
      <div class="dropdown-menu">
        <div class="dropdown-content results"></div>
      </div>
    </div>
  */
  root.innerHTML = `
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
  <p class="control">
    <a class="button">
    One
    </a>
  </p>
</div>
  `;
  /*

*/
  const input = root.querySelector("input");
  const dropdown = root.querySelector(".dropdown");
  const resultsWrapper = root.querySelector(".results");
  /*

*/
  const onInput = async (event) => {
    const items = await fetchData(event.target.value);

    if (!items.length) {
      dropdown.classList.remove("is-active");
      return;
    }

    resultsWrapper.innerHTML = "";
    dropdown.classList.add("is-active");
    for (let item of items) {
      const option = document.createElement("a");

      option.classList.add("dropdown-item");
      option.innerHTML = renderOption(item);
      option.addEventListener("click", () => {
        dropdown.classList.remove("is-active");
        input.value = inputValue(item);
        onOptionSelect(item);
      });

      resultsWrapper.appendChild(option);
    }
  };
  /*

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
