import React from "react";

class FormInput extends React.Component {
  render() {
    return (
      <section class="section">
        <div class="container">
          <form>
            <div class="field">
              <label class="label">Age:</label>
              <div class="control">
                <input class="input" type="text" placeholder="Age" />
              </div>
            </div>
            <div class="field">
              <label class="label">Weight:</label>
              <div class="control">
                <input class="input" type="text" placeholder="Weight" />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <label class="radio">
                  <input type="radio" name="question" /> kg
                </label>
                <label class="radio">
                  <input type="radio" name="question" /> lb
                </label>
              </div>
            </div>
            <div class="field">
              <label class="label">Sex:</label>
              <div class="control">
                <div class="select">
                  <select>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
export default FormInput;
