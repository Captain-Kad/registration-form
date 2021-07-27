var i, tag, provinces, provincesLen;

provinces = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Nova Scotia",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
];
provincesLen = provinces.length;

tag = `<select class="form-control form-control-lg select-opt"> 
<option class="disabled" selected disabled style="color: grey">
Select your province</option>`;
for (i = 0; i < provincesLen; i++) {
  tag += "<option>" + provinces[i] + "</option>";
}
tag += "</select>";
document.getElementById("addProvince").innerHTML = tag;