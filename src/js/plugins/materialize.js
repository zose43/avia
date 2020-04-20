import "materialize-css/dist/js/materialize.min";
import "materialize-css/dist/css/materialize.min.css";

// Init select
const select = document.querySelectorAll("select");
M.FormSelect.init(select);

export function getSeletInstance(elem) {
  return M.FormSelect.getInstance(elem);
}
// Init Autocomplete
const autocomplete = document.querySelectorAll(".autocomplete");
M.Autocomplete.init(autocomplete);

export function getAutocompleteInstance(elem) {
  return M.Autocomplete.getInstance(elem);
}
// Init Date-picker
const datePicker = document.querySelectorAll(".datepicker");
M.Datepicker.init(datePicker, {
  showClearBtn: true,
  format: "yyyy-mm",
});

export function getDatePickerInstance(elem) {
  return M.Datepicker.getInstance(elem);
}
