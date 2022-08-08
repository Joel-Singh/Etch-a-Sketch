let root = document.querySelector(":root");
let style = getComputedStyle(document.body);
const sketchPad = document.querySelector("#sketch-pad");

function initializeSketchpad(size) {
  removeRowsAndColumns();
  createRowsAndColumns(size);
  setColumnsWidthAndHeight(size);
}

function createRowsAndColumns(size) {
  for (let i = 0; i < size; i++) {
    const newRow = document.createElement("div");
    newRow.classList.add("row");
    sketchPad.appendChild(newRow);
  }
  getRowArray().forEach((e) => {
    for (let i = 0; i < size; i++) {
      const newColumn = document.createElement("div");
      newColumn.classList.add("column");
      e.appendChild(newColumn);
    }
  });
}

function removeRowsAndColumns() {
  getRowArray().forEach((e) => {
    sketchPad.removeChild(e);
  });
}

function setColumnsWidthAndHeight(size) {
  root.style.setProperty(
    "--column-size",
    style.getPropertyValue("--sketch-pad-size").replace("px", "") / size + "px"
  );
}
function getRowArray() {
  return Array.from(document.querySelectorAll(".row"));
}
function getColumnArray() {
  return Array.from(document.querySelectorAll(".column"));
}
