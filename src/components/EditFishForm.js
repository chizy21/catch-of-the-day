import React from "react";

class EditFishForm extends React.Component {
    render() {
        return (
            <div className="fish-edit">
                <input type="text" name="name" />
                <input type="text" name="price" />
                <select name="status">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" />
                <input type="text" name="image" />
                <button type="submit">+ Add Fish</button>
                <button type="reset">Reset</button>
                <button type="button" onClick={this.props.reset}>Reset</button>
                <button type="button" onClick={this.props.save}>Save</button>
                <button type="button" onClick={this.props.cancel}>Cancel</button>
                <input type="hidden" name="id" />
                <input type="hidden" name="fishId" />
                <input type="hidden" name="fishName" />
                <input type="hidden" name="fishPrice" />
                <input type="hidden" name="fishStatus" />
                <input type="hidden" name="fishDesc" />
                <input type="hidden" name="fishImage" />
                
            </div>
        )
    }
}

export default EditFishForm;