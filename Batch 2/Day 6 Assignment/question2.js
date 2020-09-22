  let buses = [];
  
  
  function display(busarray = undefined) {
    let tabledata = "";
    let buses;
    if (busarray == undefined) {
        buses = JSON.parse(localStorage.getItem("buses"));
    } else {
        buses = busarray;
    }
  
    buses.forEach(function (bus, index) {
      let currentrow = `<tr>
        <td>${index + 1}</td>
        <td>${bus.name}</td>
        <td>${bus.source}</td>
        <td>${bus.destination}</td>
        <td>${bus.number}</td>
        <td>${bus.passenger}</td>
        </tr>`;
  
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
  }
  
  display();
  
  function addBus(e) {
    e.preventDefault();
    let bus = {};
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let number = document.getElementById("number").value;
    let passenger = document.getElementById("passenger").value;
    
    bus.name = name;
    bus.source = source;
    bus.destination = destination;
    bus.number = Number(number);
    bus.passenger = Number(passenger);
  
    let buses = JSON.parse(localStorage.getItem("buses"));
    buses.push(bus);
    localStorage.setItem("buses", JSON.stringify(buses));
  
    display();
  
    document.getElementById("name").value;
    document.getElementById("source").value;
    document.getElementById("destination").value;
    document.getElementById("number").value;
    document.getElementById("passenger").value;
  }
  
  function searchBySource() {
    let searchSourceValue = document.getElementById("searchSource").value;
    let buses = JSON.parse(localStorage.getItem("buses"));
    let newdata = buses.filter(function (bus) {
      return (
        bus.source.toUpperCase().indexOf(searchSourceValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }
  
  function searchByDestination() {
    let searchDestinationValue = document.getElementById("searchDestination").value;
    console.log(searchByDestination);
    let buses = JSON.parse(localStorage.getItem("buses"));
    let newdata = buses.filter(function (bus) {
      return (
        bus.destination.toUpperCase().indexOf(searchDestinationValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }
  
  