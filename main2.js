function generate_table(data) {
    var tableContent = document.getElementById("body-outputApps");
    for(var i=0; i<data.length; i++){   
        var row = `
        <tr>
            <td>${data[i].organizationId}</td>
            <td>${data[i].applicationKey}</td> 
        </tr>
        `
        tableContent.innerHTML += row;
    }
}

function tableCreate(data) {
    const body = document.body,
          tbl = document.createElement('table');
    tbl.style.width = '100px';
    tbl.style.border = '1px solid black';
    data = new Map();

    for (let i = 0; i < data.keys() ; i++) {
      const tr = ""
        
      for (let j = 0; j < 2; j++) {
        if (i === 2 && j === 1) {
          break;
        } else {
          const td = tr.insertCell();
          td.appendChild(document.createTextNode(`Cell I${i}/J${j}`));
          td.style.border = '1px solid black';
          if (i === 1 && j === 1) {
            td.setAttribute('rowSpan', '2');
          }
        }
      }
    }
    body.appendChild(tbl);
  }
  
  tableCreate();