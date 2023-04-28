interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Greenbel',
  lastName: 'Eleghasim',
  age: 1000,
  location: 'Nigeria',
}

const student2: Student = {
  firstName: 'Rahab',
  lastName: 'Mary',
  age: 1000,
  location: 'Kenya',
}

const studentsList: Array<Student> = [ student1, student2 ];

type Elmt = Element | HTMLElement;

const body: Elmt | HTMLBodyElement = document.getElementsByTagName('body')[0];

const table: Elmt | HTMLTableElement = document.createElement('table');

const header: Elmt | HTMLTableRowElement = document.createElement('tr');

const header0: Elmt | HTMLTableHeaderCellElement = document.createElement('th');
header0.innerHTML = 'First Name';

const header1: Elmt | HTMLTableHeaderCellElement = document.createElement('th');
header1.innerHTML = 'Location';

// Append header cells to header
header.appendChild(header0);
header.appendChild(header1);

// Append header as first row of table
table.appendChild(header);

// Row 2
const data1: Elmt | HTMLTableRowElement = document.createElement('tr');

const data1A: Elmt | HTMLTableDataCellElement = document.createElement('td');
data1A.innerHTML = student1.firstName;

const data1B: Elmt | HTMLTableDataCellElement = document.createElement('td');
data1B.innerHTML = student1.location;

// Append cells to row 2
data1.appendChild(data1A);
data1.appendChild(data1B);

// Append second row to table
table.appendChild(data1);

// Row 3
const data2: Elmt | HTMLTableRowElement = document.createElement('tr');

const data2A: Elmt | HTMLTableDataCellElement = document.createElement('td');
data2A.innerHTML = student2.firstName;

const data2B: Elmt | HTMLTableDataCellElement = document.createElement('td');
data2B.innerHTML = student2.location;

// Append cells to row 2
data2.appendChild(data2A);
data2.appendChild(data2B);

// Append third row to table
table.appendChild(data2);

// Append table to documemt body
body.appendChild(table);
