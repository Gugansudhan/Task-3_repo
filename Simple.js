function convert() {
  let Deg = document.getElementById("degrees");
  let Res = document.getElementById("RES");
  let input = document.getElementById("temp1");
  let output = document.getElementById("temp");

  let inputValue = input.value;
  let outputValue = output.value;

  //celsius

  if (inputValue === "cel1" && outputValue === "cel") {
    Res.value = Deg.value;
  } else if (inputValue === "cel1" && outputValue === "fah") {
    Res.value = Number((Deg.value * 9) / 5) + 32;
  } else if (inputValue === "cel1" && outputValue === "kel") {
    Res.value = Number(Deg.value) + 273.15;
  }

  //fahrenheit

  if (inputValue === "fah1" && outputValue === "fah") {
    Res.value = Deg.value;
  } else if (inputValue === "fah1" && outputValue === "cel") {
    Res.value = Number((Deg.value - 32) * 5) / 9;
  } else if (inputValue === "fah1" && outputValue === "kel") {
    Res.value = Number(((Deg.value - 32) * 5) / 9) + 273.15;
  }

  //kelvin

  if (inputValue === "kel1" && outputValue === "kel") {
    Res.value = Deg.value;
  } else if (inputValue === "kel1" && outputValue === "cel") {
    Res.value = Number(Deg.value) - 273.15;
  } else if (inputValue === "kel1" && outputValue === "fah") {
    Res.value = Number(((Deg.value - 273.15) * 9) / 5) + 32;
  }
}
function reset() {
  let Deg = document.getElementById("degrees");
  let Res = document.getElementById("RES");
  Deg.value = " ";
  Res.value = " ";
}
