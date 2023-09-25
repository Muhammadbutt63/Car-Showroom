const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let Value1 = 0;
let Value2 = 0;
let Value3 = 0;
let Value4 = 0;
let Result = 0;
let Quantity1 = 0;
let Quantity2 = 0;
let Quantity3 = 0;
let Quantity4 = 0;


let GetButton1value = () => {
    try {
        let TemporaryValue = parseInt($('.value1').dataset.value);
        Value1 += TemporaryValue;
        let GetInput = $('.one');
        GetInput.placeholder = `${Value1} x ${Quantity1}`;
        Quantity1++;
    } catch (error) {
        console.log(error.message)
    }
}

let GetButton2value = () => {
    try {
        let TemporaryValue = parseInt($('.value2').dataset.value);
        Value2 += TemporaryValue;
        let GetInput = $('.two');
        GetInput.placeholder = `${Value2} x ${Quantity2}`;
        Quantity2++;
    } catch (error) {
        console.log(error.message)
    }
}

let GetButton3value = () => {
    try {
        let TemporaryValue = parseInt($('.value3').dataset.value);
        Value3 += TemporaryValue;
        let GetInput = $('.three');
        GetInput.placeholder = `${Value3} x ${Quantity3}`;
        Quantity3++;
    } catch (error) {
        console.log(error.message)
    }
}

let GetButton4value = () => {
    try {
        let TemporaryValue = parseInt($('.value4').dataset.value);
        Value4 += TemporaryValue;
        let GetInput = $('.four');
        GetInput.placeholder = `${Value4} x ${Quantity4}`;
        Quantity4++;
    } catch (error) {
        console.log(error.message)
    }
}

let CalculateThePrice = () => {
    try {
        console.log(Value1);
        console.log(Value2);
        console.log(Value3);
        console.log(Value4);
        if (Value1 !== 0) {
            Result = Result + Value1
        }
        if (Value2 !== 0) {
            Result = Result + Value2
        }
        if (Value3 !== 0) {
            Result = Result + Value3
        }
        if (Value4 !== 0) {
            Result = Result + Value4
        }
        let ResultDiv = $('.Result');
        ResultDiv.innerHTML = `
        <div class="card">
        <div class="card-body">
          <div class="container mb-5 mt-3">
            <div class="row d-flex align-items-baseline">
              <div class="col-xl-9">
                <p style="color: #7e8d9f;font-size: 20px;">Invoice >> <strong>ID: #123-123</strong></p>
              </div>
              <div class="col-xl-3 float-end">
                <a class="btn btn-light text-capitalize border-0" data-mdb-ripple-color="dark"><i
                    class="fas fa-print text-primary"></i>Print</a>
                <a class="btn btn-light text-capitalize" data-mdb-ripple-color="dark"><i
                    class="far fa-file-pdf text-danger"></i> Export</a>
              </div>
              <hr>
            </div>
      
            <div class="container">
              <div class="col-md-12">
                <div class="text-center">
                  <i class="fab fa-mdb fa-4x ms-0" style="color:#5d9fc5 ;"></i>
                  <h2 class="pt-0 bg-danger">Muhammad Butt Cars</h2>
                </div>
      
              </div>
      
      
              <div class="row">
                <div class="col-xl-8">
                  <ul class="list-unstyled">
                    <li class="text-muted">To: <span style="color:black ;">Muhammad Butt</span></li>
                    <li class="text-muted">Pia Road, Lahore</li>
                    <li class="text-muted">Lahore, Pakistan</li>
                    <li class="text-muted"><i class="fas fa-phone"></i>+92 3074185659</li>
                  </ul>
                </div>
                <div class="col-xl-4">
                  <p class="text-muted">Invoice</p>
                  <ul class="list-unstyled">
                    <li class="text-muted"><i class="fas fa-circle" style="color:#84B0CA ;"></i> <span
                        class="fw-bold">ID:</span>#123-456</li>
                    <li class="text-muted"><i class="fas fa-circle" style="color:#84B0CA ;"></i> <span
                        class="fw-bold">Creation Date: </span>Sep 19,2023</li>
                    <li class="text-muted"><i class="fas fa-circle" style="color:#84B0CA ;"></i> <span
                        class="me-1 fw-bold">Status:</span><span class="badge bg-danger text-black fw-bold">
                        Unpaid</span></li>
                  </ul>
                </div>
              </div>
      
              <div class="row my-2 mx-1 justify-content-center">
                <table class="table table-striped table-borderless">
                  <thead class="bg-danger" class="text-white">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Description</th>
                      <th scope="col">Qty</th>
                      <th scope="col">Unit Price</th>
                      <th scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Lamborghini</td>
                      <td>${Quantity1}</td>
                      <td>${Value1}</td>
                      <td>${Value1}</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Rolls Royce</td>
                      <td>${Quantity2}</td>
                      <td>${Value2}</td>
                      <td>${Value2}</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>BMW</td>
                      <td>${Quantity3}</td>
                      <td>${Value3}</td>
                      <td>${Value3}</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Audi</td>
                      <td>${Quantity4}</td>
                      <td>${Value4}</td>
                      <td>${Value4}</td>
                    </tr>
                  </tbody>
      
                </table>
              </div>
              <div class="row">
                <div class="col-xl-8">
                  <p class="ms-3">Add additional notes and payment information</p>
      
                </div>
                <div class="col-xl-3">
                  <p class="text-black float-start"><span class="text-black me-3"> Total Amount</span><span
                      style="font-size: 25px;"><strong>${Result}</strong></span></p>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-xl-10">
                  <p>Thank you for your purchase</p>
                </div>
                <div class="col-xl-2">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `

    } catch (error) {
        console.log(error.message)
    }
}

let GoToNewPage = () =>{
    window.open('index.html',"_self");
}
let GoToNewPage1 = () =>{
    window.open('signup-form.html',"_self");
}

