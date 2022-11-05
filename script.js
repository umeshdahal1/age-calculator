const dobField = document.getElementById("dob-field");
const submitField = document.getElementById("submit-field");
const resultHeader = document.getElementById("result-header");

function calculateAge(dob) {
  const resultObj = {};
  const diffInms = Date.now() - dob.getTime();
  console.log(diffInms);
  const diffDate = new Date(diffInms);
  // console.log(diffDate);
  console.log(diffDate.getUTCDate());
  resultObj.Date = Math.abs(diffDate.getUTCDate() - 1);

  console.log(diffDate.getUTCMonth());
  resultObj.month = diffDate.getUTCMonth();
  console.log(diffDate.getUTCFullYear());
  resultObj.year = Math.abs(diffDate.getUTCFullYear() - 1970);
  return resultObj;
}

const clickHandler = function (e) {
  const userSelectedDate = new Date(dobField.value);
  const result = calculateAge(userSelectedDate);
  resultHeader.innerHTML = `Your age is ${result.year} years, ${result.month} months and ${result.Date} days`;
};

submitField.addEventListener("click", clickHandler);
