function toggleColumn(index) {
  const rows = document.querySelectorAll("#dataTable tr");
  rows.forEach((row) => {
    let cell = row.cells[index];
    if (cell.style.display === "none") {
      cell.style.display = "";
    } else {
      cell.style.display = "none";
    }
  });
}
function resetTable() {
  var rows = document.querySelectorAll("#dataTable tr");

  rows.forEach(function (row) {
    Array.from(row.cells).forEach(function (cell) {
      cell.style.display = "";
    });
  });
}
