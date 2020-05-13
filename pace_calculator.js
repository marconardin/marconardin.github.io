function get_distance_type() {
  return document.querySelector("input[name=measurement]:checked").value;
}

function convert_decimal_to_seconds(pace) {
  return Math.round((((pace * 100) % 100) * 0.6 * 100) / 100);
}

function calculate_pace() {
  let distance_type = get_distance_type();
  let distance = document.querySelector("#distance").value;
  let time = document.querySelector("#time").value;

  // calculate pace and convert decimal to seconds
  let pace = time / distance;
  let seconds = convert_decimal_to_seconds(pace);
  pace = Math.floor(pace);

  document.querySelector("#calculated_pace").innerHTML =
    "Your pace: " +
    pace +
    " minutes and " +
    seconds +
    " seconds per " +
    distance_type;
}
