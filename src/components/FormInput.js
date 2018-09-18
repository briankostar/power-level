import React from "react";

class FormInput extends React.Component {
  render() {
    return (
      <div class="container">
        <form>
          Age:
          <input class="input" type="number" />
          Weight:
          <input class="input" type="number" />
          Sex:
          <select>
            <option>M</option>
            <option>F</option>
          </select>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default FormInput;
