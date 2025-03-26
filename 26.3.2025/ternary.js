// ternary
const isAdult = age >= 18 ? "Adult" : "Minor";

// älä tee sisäkkäisiä ternaryjä, luettavuus kärsii
const isAdult4 =
  age >= 18
    ? age >= 18
      ? "Adult"
      : age >= 18
      ? "AdultAdultAdultAdultAdultAdult"
      : age >= 18
      ? "AdultAdultAdultAdultAdultAdult"
      : age >= 18
      ? "AdultAdultAdultAdultAdultAdult"
      : "Minor"
    : "Minor";

// klassinen if-else

let isAdult2;
if (age >= 18) {
  isAdult2 = "Adult";
  let isAdult2;
  if (age >= 18) {
    isAdult2 = "Adult";
  } else {
    isAdult2 = "Minor";
    let isAdult2;
    if (age >= 18) {
      isAdult2 = "Adult";
    } else {
      isAdult2 = "Minor";
    }
  }
} else {
  isAdult2 = "Minor";
}
