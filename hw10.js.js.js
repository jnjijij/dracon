<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table Generator</title>
</head>
<body>
    <input type="number" id="rowCount" placeholder="Number of Rows">
    <input type="number" id="colCount" placeholder="Number of Columns">
    <input type="text" id="cellContent" placeholder="Cell Content">
    <button onclick="generateTable()">Generate Table</button>
    <table id="myTable" border="1"></table>

    <script>
        function generateTable() {
            const rowCount = parseInt(document.getElementById('rowCount').value);
            const colCount = parseInt(document.getElementById('colCount').value);
            const cellContent = document.getElementById('cellContent').value;

            const table = document.getElementById('myTable');
            table.innerHTML = '';

            for (let i = 0; i < rowCount; i++) {
                const row = document.createElement('tr');
                for (let j = 0; j < colCount; j++) {
                    const cell = document.createElement('td');
                    cell.textContent = cellContent;
                    row.appendChild(cell);
                }
                table.appendChild(row);
            }
        }
    </script>
</body>
</html>
