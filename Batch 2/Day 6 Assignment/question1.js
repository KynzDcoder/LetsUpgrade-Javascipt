let employees = [
    {
      name: "John",
      age: 32,
      city: "New York",
      salary: "60000",
    },
    {
        name: "Alice",
        age: 26,
        city: "Los Angeles",
        salary: "32000",
    },
    {
        name: "Mark",
        age: 28,
        city: "Silicon Valley",
        salary: "45000",
    },
    {
        name: "Kylie",
        age: 22,
        city: "California",
        salary: "30000",
    },
    {
        name: "Zaheen",
        age: 24,
        city: "Kolkata",
        salary: "42000",
    },
  ];

  function display(empArray) {
    let tabledata = "";
  
    empArray.forEach(function (employee, index) {
      let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${employee.name}</td>
      <td>${employee.age}</td>
      <td>${employee.city}</td>
      <td>${employee.salary}</td>
      <td>
      <button onclick='deleteEmployee(${index})'>delete</button>
      </td>
      </tr>`;
  
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("empDetails")[0].innerHTML = tabledata;
  }

  display(employees);

  function searchByName() {
    let searchValue = document.getElementById("searchName").value;
  
    let newdata = employees.filter(function (emp) {
      return (
        emp.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }

  function searchByCity() {
    let searchValue = document.getElementById("searchCity").value;
  
    let newdata = employees.filter(function (emp) {
      return (
        emp.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }

  function deleteEmployee(index) {
    employees.splice(index, 1);
    display(employees);
  }
  
