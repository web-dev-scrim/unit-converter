const lengthConversions = [
  { from: "meters", to: "feet", factor: 3.28084 },
  { from: "feet", to: "meters", factor: 0.3048 },
];
const volumeConversions = [
  { from: "liters", to: "gallons", factor: 0.264172 },
  { from: "gallons", to: "liters", factor: 3.78541 },
];
const massConversions = [
  { from: "kilograms", to: "pounds", factor: 2.20462 },
  { from: "pounds", to: "kilograms", factor: 0.453592 },
];

const inputField = document.getElementById("input-value");
const convertButton = document.getElementById("convert-btn");
const lengthResult = document.getElementById("length-result");
const volumeResult = document.getElementById("volume-result");
const massResult = document.getElementById("mass-result");

convertButton.addEventListener("click", () => {
  if (isNaN(inputField.value) || inputField.value.trim() === "") {
    alert("Please enter a valid number");
    return;
  }

  const inputValue = Number(inputField.value);
  let lengthValue = `${inputValue} ${lengthConversions[0].from} = ${(
    inputValue * lengthConversions[0].factor
  ).toFixed(3)} ${lengthConversions[0].to} | ${inputValue} ${
    lengthConversions[1].from
  } = ${(inputValue * lengthConversions[1].factor).toFixed(3)} ${
    lengthConversions[1].to
  }`;

  let volumeValue = `${inputValue} ${volumeConversions[0].from} = ${(
    inputValue * volumeConversions[0].factor
  ).toFixed(3)} ${volumeConversions[0].to} | ${inputValue} ${
    volumeConversions[1].from
  } = ${(inputValue * volumeConversions[1].factor).toFixed(3)} ${
    volumeConversions[1].to
  }`;
  let massValue = `${inputValue} ${massConversions[0].from} = ${(
    inputValue * massConversions[0].factor
  ).toFixed(3)} ${massConversions[0].to} | ${inputValue} ${
    massConversions[1].from
  } = ${(inputValue * massConversions[1].factor).toFixed(3)} ${
    massConversions[1].to
  }`;

  lengthResult.textContent = lengthValue;
  volumeResult.textContent = volumeValue;
  massResult.textContent = massValue;
});
