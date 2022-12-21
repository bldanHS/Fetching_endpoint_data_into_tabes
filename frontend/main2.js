
const url = "http://127.0.0.1:5000"

endpoints = ["/applications", "/amp", "/global"]

function fetch_all_data()
{
  Promise.all(endpoints.map(endpoint => 
    fetch(`${url}${endpoint}`)                
      .then((data) => data.json())
      .catch((logError => {
        console.error(logError);
      }))
    ))
  .then((t) => {
    console.log(t);
    return t;
  })
  .then(value => {
    generating_table(value)
  })
}


function generating_table(data) {

  const body = document.body;
  const parentElement = document.createElement("div");
  create_header(data);

  //creating and populating table heads according to dataset


  function create_header(data){
      data.forEach((obj_array) => {
        table = document.createElement('table');
        table.classList.add("table");
        let thead = table.createTHead();
        let theadrow = thead.insertRow();
        create_tbody(obj_array);
        Object.keys(obj_array[0]).forEach(key => {
          th = document.createElement("th");
          th.innerHTML = key;
          theadrow.appendChild(th);
        });
        thead.appendChild(theadrow);
        table.appendChild(thead);
        parentElement.appendChild(table);
        body.appendChild(parentElement);
      });


    //creating and populating table bodies according to dataset array

    function create_tbody(array){
      tbody = table.createTBody();
      array.forEach((object) => {
        object_values = Object.values(object);
        let tbodyRow = tbody.insertRow();
        object_values.forEach(value => {
          let td = document.createElement("td");
          td.innerHTML = value;
          tbodyRow.appendChild(td);
          tbody.appendChild(tbodyRow);
        });
      });
    }
  }
  
}


fetch_all_data();
