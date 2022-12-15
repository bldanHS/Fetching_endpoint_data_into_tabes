
const url = "http://127.0.0.1:5000"


// //igy szoktak a sracok csinalni   RNA
// .then(json=>console.log(json))

function fetchApps()
{
    return fetch(`${url}/applications`)
    .then(response => response.json())
    .then((data)=> generate_tableApps(data)) 
}

// igy csinaltam en

// async function fetchApps(){
//     try{
//         const response = await fetch(`${url}/applications`)
//         const data = await response.json();
//         console.log(data);  
//     } catch(err){
//         console.error(err);
//     }
// }

function generate_tableApps(data) {
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

function fetchAMP()
{
    return fetch(`${url}/amp`)
    .then(response => response.json())
    .then((data)=> generate_tableAMP(data)) 
}

function generate_tableAMP(data) {
    var tableContent = document.getElementById("body-outputAMP");
    for(var i=0; i<data.length; i++){   
        var row = `
        <tr>
            <td>${data[i].applicationId}</td>
            <td>${data[i].version}</td>
            <td>${data[i].meta}</td>
            <td>${data[i].name}</td>
            <td>${data[i].public}</td>
            <td>${data[i].snapshot}</td>
        </tr>
        `
        tableContent.innerHTML += row;
    }
}

function fetchGlobal()
{
    return fetch(`${url}/global`)
    .then(response => response.json())
    .then((data)=> generate_tableGlobal(data)) 
}

function generate_tableGlobal(data) {
    var tableContent = document.getElementById("body-outputGlobal");
    for(var i=0; i<data.length; i++){   
        var row = `
        <tr>
            <td>${data[i].applicationKey}</td>
        </tr>
        `
        tableContent    .innerHTML += row;
    }
}

fetchApps();
fetchAMP();
fetchGlobal();


//igy kezdtem

            // function implementData(ElementId) {
            //     const HeadElement = document.getElementById(ElementId);
            //     if(!HeadElement){
            //         return;
            //     }
            //     fetchApps()
            //     .then(elements => {
            //         if(!elements){
            //             HeadElement.innerHTML = "No data to show";
            //         }
            //         console.log(elements);
                    
            //         // for <tr> thead-be
            //     })  
            // }
            // implementData("body-output") 

// function append_json(data){
//     var table = document.getElementById('gable');
//     data.forEach(function(object) {
//         var tr = document.createElement('tr');
//         tr.innerHTML = '<td>' + object.organizationId + '</td>' +
//         '<td>' + object.Applica + '</td>' +
//         '<td>' + object.BALANCE + '</td>' +
//         '<td>' + object.DATE + '</td>';
//         table.appendChild(tr);
//     });
//}





//     const tableHead = table.querySelector("thead");
//     const tableBody = table.querySelector("tbody");


    // const response = await fetch(url)
    //     .then(function(response){
    //         return response.json();
    //     })
    //     .then(function(tokens){
    //         let placeholder = document.querySelector("#data-output")
    //     }
    // } // object, az egesz json content-tel
    // const data = await response.json();



//     tableHead.innerHTMl = "<tr></tr>";
//     tableBody.innerHTMl = "";

//     for (const headerText of headers) {
//         const HeaderElement = document.createElement("th");
//         HeaderElement.textContent = headerText;

//         tableHead.querySelector("tr").appendChild(HeaderElement);
//     }

//     for (const row of rows) {
//         const rowElement = document.querySelector("tr");
//         for(const cellText of row){
//             const CellElement = document.createElement("td");

//             CellElement.textContent = cellText;
//             rowElement.appendChild(CellElement); 
//         }

//         tableBody.appendChild(rowElement);  
//     }
// }


// FetchDataIntoTable("./data.json", document.querySelector("table"));