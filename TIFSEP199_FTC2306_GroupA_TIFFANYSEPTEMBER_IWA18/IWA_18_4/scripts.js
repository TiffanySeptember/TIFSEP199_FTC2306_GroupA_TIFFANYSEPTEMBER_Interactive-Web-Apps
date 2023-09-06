/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event
 */
import {
  COLUMNS,
  TABLES,
  createOrderData,
  state,
  updateDragging,
} from "./data.js";

import {
  createOrderHtml,
  html,
  updateDraggingHtml,
  moveToColumn,
} from "./view.js";

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event
 */
const handleDragOver = (event) => {
  event.preventDefault();
  const path = event.path || event.composedPath();
  let column = null;

  for (const element of path) {
    const { area } = element.dataset;
    if (area) {
      column = area;
      break;
    }
  }
  if (!column) return;
  updateDragging({ over: column });
  updateDraggingHtml({ over: column });
};
const handleDragStart = (event) => {
  event.target.classList.add("dragging");

  const currentColumn = event.target.closest(".grid__column").dataset.area;
  updateDraggingHtml({ over: currentColumn });
};
const handleDragEnd = (event) => {
  event.target.classList.remove("dragging");

  const orderId = event.target.dataset.id;

  const currentColumn = event.target.closest(".grid__column").dataset.area;
  const newColumn = state.dragging.over;

  if (currentColumn !== newColumn) {
    moveToColumn(orderId, newColumn);
    event.target.remove();

    if (state.orders[orderId]) {
      state.orders[orderId].column = newColumn;
    }
  }

  // Clear the dragging HTML effects
  updateDraggingHtml({ over: null });
};
const handleHelpToggle = (event) => {
  if (event.target === html.help.cancel) {
    html.help.overlay.style.display = "none";
  } else {
    html.help.overlay.style.display = "block";
  }
};
const handleAddToggle = (event) => {
  if (event.target === html.add.cancel) {
    html.add.overlay.style.display = "none";
  } else {
    html.add.overlay.style.display = "block";
  }
};
const handleAddSubmit = (event) => {
  event.preventDefault();

  const order = createOrderData({
    title: html.add.title.value,
    table: html.add.table.value,
    column: COLUMNS[0],
  });

  const orderHtml = createOrderHtml(order);
  html.columns[order.column].appendChild(orderHtml);

  state.orders[order.id] = order;

  html.add.overlay.style.display = "none";
  html.add.title.value = "";
  html.add.table.value = TABLES[0];
};
const handleEditToggle = (event) => {
  if (event.target === html.edit.cancel) {
    html.edit.overlay.style.display = "none";
  } else {
    const clickedOrderElement = event.target.closest(".order");
    const orderId = clickedOrderElement.dataset.id;
    const orderData = state.orders[orderId];

    html.edit.title.value = orderData.title;
    html.edit.table.value = orderData.table;
    html.edit.id.value = orderId;
    html.edit.column.value = orderData.column;

    html.edit.overlay.style.display = "block";
  }
};
const handleEditSubmit = (event) => {
  event.preventDefault();

  const editedTitle = html.edit.title.value;
  const editedTable = html.edit.table.value;
  const editedColumn = html.edit.column.value;
  const orderId = html.edit.id.value;

  const orderElement = document.querySelector(`[data-id="${orderId}"]`);
  orderElement.querySelector("[data-order-title]").textContent = editedTitle;
  orderElement.querySelector("[data-order-table]").textContent = editedTable;
  orderElement.dataset.column = editedColumn;

  const targetColumn = html.columns[editedColumn];
  targetColumn.appendChild(orderElement);

  state.orders[orderId].title = editedTitle;
  state.orders[orderId].table = editedTable;
  state.orders[orderId].column = editedColumn;

  html.edit.overlay.style.display = "none";
};
const handleDelete = (event) => {
  const orderId = html.edit.id.value;
  const orderElement = document.querySelector(`[data-id="${orderId}"]`);
  orderElement.remove();

  delete state.orders[orderId];
  html.edit.overlay.style.display = "none";
};

html.add.cancel.addEventListener("click", handleAddToggle);
html.other.add.addEventListener("click", handleAddToggle);
html.add.form.addEventListener("submit", handleAddSubmit);
html.other.grid.addEventListener("click", handleEditToggle);
html.edit.cancel.addEventListener("click", handleEditToggle);
html.edit.form.addEventListener("submit", handleEditSubmit);
html.edit.delete.addEventListener("click", handleDelete);
html.help.cancel.addEventListener("click", handleHelpToggle);
html.other.help.addEventListener("click", handleHelpToggle);

for (const htmlColumn of Object.values(html.columns)) {
  htmlColumn.addEventListener("dragstart", handleDragStart);
  htmlColumn.addEventListener("dragend", handleDragEnd);
}

for (const htmlArea of Object.values(html.area)) {
  htmlArea.addEventListener("dragover", handleDragOver);
}
