import {
  getAutocompleteInstance,
  getDatePickerInstance,
} from "../plugins/materialize";
class FormUI {
  constructor(autocompleteInstance, datePickerInstance) {
    this._form = document.forms["locationControls"];
    this._origin = document.getElementById("autocomplete-origin");
    this._destination = document.getElementById("autocomplete-destination");
    this.depart = document.getElementById("datepicker-depart");
    this.return = document.getElementById("datepicker-return");
    //AutocompleteInstance
    this.autocompleteOrigin = autocompleteInstance(this._origin);
    this.autocompleteDestination = autocompleteInstance(this._destination);
    //datePickerInstance
    this.datePickerDepart = datePickerInstance(this.depart);
    this.datePickerReturn = datePickerInstance(this.return);
  }
  get form() {
    return this._form;
  }
  /* Inputs value */

  get OriginValue() {
    return this._origin.value;
  }
  get DestinationValue() {
    return this._destination.value;
  }
  get DateDepartValue() {
    return this.datePickerDepart.toString();
  }
  get DateReturnValue() {
    return this.datePickerReturn.toString();
  }
  setAutocompleteData(data) {
    this.autocompleteOrigin.updateData(data);
    this.autocompleteDestination.updateData(data);
  }
}
const formUI = new FormUI(getAutocompleteInstance, getDatePickerInstance);

export default formUI;
