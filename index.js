const selectSlider = document.querySelector("#select");
const selectOutput = document.querySelector("#select-output");

selectOutput.textContent = selectSlider.value;

selectSlider.addEventListener("input", () => {
  selectOutput.textContent = selectSlider.value;
});

const mondaySlider = document.querySelector("#monday");
const mondayOutput = document.querySelector("#monday-output");

mondayOutput.textContent = mondaySlider.value;

mondaySlider.addEventListener("input", () => {
  mondayOutput.textContent = mondaySlider.value;
});

const tuesdaySlider = document.querySelector("#tuesday");
const tuesdayOutput = document.querySelector("#tuesday-output");

tuesdayOutput.textContent = tuesdaySlider.value;

tuesdaySlider.addEventListener("input", () => {
  tuesdayOutput.textContent = tuesdaySlider.value;
});

const wednesdaySlider = document.querySelector("#wednesday");
const wednesdayOutput = document.querySelector("#wednesday-output");

wednesdayOutput.textContent = wednesdaySlider.value;

wednesdaySlider.addEventListener("input", () => {
  wednesdayOutput.textContent = wednesdaySlider.value;
});

const thursdaySlider = document.querySelector("#thursday");
const thursdayOutput = document.querySelector("#thursday-output");

thursdayOutput.textContent = thursdaySlider.value;

thursdaySlider.addEventListener("input", () => {
  thursdayOutput.textContent = thursdaySlider.value;
});

const fridaySlider = document.querySelector("#friday");
const fridayOutput = document.querySelector("#friday-output");

fridayOutput.textContent = fridaySlider.value;

fridaySlider.addEventListener("input", () => {
  fridayOutput.textContent = fridaySlider.value;
});

const saturdaySlider = document.querySelector("#saturday");
const saturdayOutput = document.querySelector("#saturday-output");

saturdayOutput.textContent = saturdaySlider.value;

saturdaySlider.addEventListener("input", () => {
  saturdayOutput.textContent = saturdaySlider.value;
});

const sundaySlider = document.querySelector("#sunday");
const sundayOutput = document.querySelector("#sunday-output");

sundayOutput.textContent = sundaySlider.value;

sundaySlider.addEventListener("input", () => {
  sundayOutput.textContent = sundaySlider.value;
});

function sleepHoursPerDay() {
  document.getElementById("total-match").style.display = "none";
  document.getElementById("total-defecit").style.display = "none";
  document.getElementById("total-surplus").style.display = "none";

  let sleepHours = [];

  let targetSleepHours = selectSlider.value * 7;
  console.log(targetSleepHours, "targetSleepHours");
  document.getElementById("target-total").innerHTML = targetSleepHours;

  sleepHours.push(
    Number(mondaySlider.value),
    Number(tuesdaySlider.value),
    Number(wednesdaySlider.value),
    Number(fridaySlider.value),
    Number(thursdaySlider.value),
    Number(saturdaySlider.value),
    Number(sundaySlider.value)
  );

  let actualSleepHours = sleepHours.reduce((acc, curr) => acc + curr);
  console.log(actualSleepHours, "actualSleepHours");
  document.getElementById("your-total").innerHTML = actualSleepHours;

  if (targetSleepHours === actualSleepHours) {
    document.getElementById("total-match").style.display = "block";
  } else if (targetSleepHours > actualSleepHours) {
    document.getElementById("total-defecit").style.display = "block";
  } else document.getElementById("total-surplus").style.display = "block";
}
