import React from 'react';

class FormInput extends React.Component {

    render(){
        return (
            <div>
                <form>
                    Age:
                    <input type="number" />
                    Weight:
                    <input type="number" />
                    Sex:
                    <select>
                        <option>M</option>
                        <option>F</option>
                    </select>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default FormInput