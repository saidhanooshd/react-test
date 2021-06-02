import React from "react"
import Checkbox from '../common/CheckBox';


const baseUrl = window.location.href.split(window.location.pathname)[0];
const primaryColor = '#0d70b5';
const items = [
    'Call the Dentist',
    'Schedule a dinner  with Peter',
    'DailYui 43',
    'Call the Vet',
    'Kates Birthday Present',
    'Zero inbox',
    'No alcohol today',
    'Check in to fight',
  ];

class ListItems extends React.Component {
    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
      }
    
      toggleCheckbox = label => {
        if (this.selectedCheckboxes.has(label)) {
          this.selectedCheckboxes.delete(label);
        } else {
          this.selectedCheckboxes.add(label);
        }
      }
    
      handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
    
        for (const checkbox of this.selectedCheckboxes) {
          console.log(checkbox, 'is selected.');
        }
      }
    
      createCheckbox = label => (
        <Checkbox
                label={label}
                handleCheckboxChange={this.toggleCheckbox}
                key={label}
            />
      )
    
      createCheckboxes = () => (
        items.map(this.createCheckbox)
      )
    
    render() {
        return (
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <form onSubmit={this.handleFormSubmit}>
                  {this.createCheckboxes()}
                  <button className="btn btn-default" type="submit">Save</button>
                </form>
      
              </div>
            </div>
          </div>
        );
    }
}
    export default ListItems;