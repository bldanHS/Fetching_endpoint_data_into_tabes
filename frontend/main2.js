
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

  function create_header(data){
    // debugger
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



    function create_tbody(array){
      tbody = table.createTBody(); // 3x executed
      array.forEach((object) => {  //object times executed
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


    // data = [ [{},{},{}...], [{},{},{}...], [{},{},{}...] ]
    // populating_table_head_from_2D_array_extended(column, data);
    // data.forEach((object_array) => {
    //    console.log(object_array)});
                        //         let tbody = parentElement.createTBody();
                        //             object_array.forEach((object) => {
                        //             object_values = Object.values(object);
                        //             let tbodyRow = tbody.insertRow();
                        //             object_values.forEach(value => {
                        //               let td = document.createElement("td");
                        //               td.innerHTML = value;
                        //               tbodyRow.appendChild(td);
                        //               tbody.appendChild(tbodyRow);
                        //             });
                        //           });
                        //       });
                            
                            
                            



// function populating_table_head_from_2D_array(list){
//   const body = document.body;
//   // debugger
//   list.forEach((list_of_key) => {
//     let parentElement = document.createElement("div");
//     tbl = document.createElement('table');
//     tbl.classList.add("table");
//     tbl.setAttribute('id',tableid)
//     // tableid++
//     let thead = tbl.createTHead();
//     let row = thead.insertRow();
//     list_of_key.forEach((key)=> {
//       let th = document.createElement("th");
//       th.innerHTML = key;
//       row.appendChild(th);
//       thead.appendChild(row);
//       tbl.appendChild(thead);
//       body.appendChild(tbl);
//       body.appendChild(parentElement);
//     })
//   });
// }


//   function populating_table_head_from_2D_array_extended(list, data){
//     const body = document.body;
//     list.forEach((list_of_key) => {
//       // let parentElement = document.createElement("div");
//       tbl = document.createElement('table');
//       tbl.classList.add("table");
//       let thead = tbl.createTHead();
//       let row = thead.insertRow();
//       let tbody = tbl.createTBody();
//       debugger
//       list_of_key.forEach((key)=> {
//         let th = document.createElement("th");
//         th.innerHTML = key;
//         row.appendChild(th);
//         thead.appendChild(row);
//         tbl.appendChild(thead);
//         body.appendChild(tbl);
//       });
//         data.forEach((array) => { // a sok foreach azert van mert nekem beljebb kell mennem a strukturaban + fuggvenybe kulon scope lesz, es nem erem el azt ami nekem kell
//           array.forEach((object) => {
//             object_values = Object.values(object);
//             let tbodyRow = tbody.insertRow();
//             object_values.forEach(value => {
//               let td = document.createElement("td");
//               td.innerHTML = value;
//               tbodyRow.appendChild(td);
//               tbody.appendChild(tbodyRow);
//             });
//           });
//         });
//     });
  
      
//     }
// function creating_tables(list){
//     list.forEach((list_of_key) => {
//       let parentElement = document.createElement("div");
//       table = document.createElement('table');
//       table.classList.add("table");
//       let thead = table.createTHead();
//         let row = thead.insertRow();
//         let tbody = table.createTBody();
//       list_of_key.forEach((key)=> {
//       let th = document.createElement("th");
//       th.innerHTML = key;
//       row.appendChild(th);
//       thead.appendChild(row);
//       table.appendChild(thead);
//       body.appendChild(table);
//       body.appendChild(parentElement);
//     })
//   })
// }

fetch_all_data();
