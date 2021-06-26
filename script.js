let detailsArr = [];
let table = document.getElementById("table");

table.style.display = "none";

document.getElementById("details-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const rbs = document.querySelectorAll('input[name="inlineRadioOptions"]');
  let selectedValue;
  for (const rb of rbs) {
    if (rb.checked) {
      selectedValue = rb.value;
      break;
    }
  }

  const checkboxes = document.querySelectorAll('input[name="chkbx"]:checked');
  var checkValues = [];
  checkboxes.forEach((checkbox) => {
    checkValues.push(checkbox.value);
  });

  if (checkValues.length < 2) {
    var span = document.getElementById("span");
    span.innerText = "Please tick two of your favorite food";
    span.style.color = "red";
    document.getElementById("span").classList.add("required-chk");
    setTimeout(function () {
      document.getElementById("span").classList.remove("required-chk");
      span.innerText = "";
    }, 2000);
    return false;
  }

  var details = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    gender: selectedValue,
    food: checkValues,
    addr: document.getElementById("addr").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
    pincode: document.getElementById("pincode").value,
  };

  detailsArr.push(details);

  table.style.display = "block";

  let tbody = document.getElementById("tbody");
  let tr = document.createElement("tr");

  detailsArr.forEach((detail) => {
    let data = `
        <td class="wrapping ">${detail.fname}</td>
        <td class="wrapping display-small display-medium">${detail.lname}</td>
        <td class="wrapping">${detail.gender}</td>
        <td class="wrapping">${detail.food}</td>
        <td class="wrapping display-small">${detail.addr}</td>
        <td class="wrapping">${detail.city}</td>
        <td class="wrapping display-small">${detail.state}</td>
        <td class="wrapping display-small">${detail.pincode}</td>  
        
      `;

    tr.innerHTML = data;
    tbody.append(tr);
    table.append(tbody);
  });

  document.getElementById("span").innerText = "";
  document.getElementById("details-form").reset();
});
