<template>
  <div class="greeter">
    <h2>{{ greeting }}, It's {{ time }} on {{ currentDay }}</h2>
  </div>
</template>

<script>
export default {
  name: "GreeterComponent",
  setup() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    let time = hours + ":" + minutes;
    let day = date.getDay();
    let greeting;
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let currentDay = days[day];
    if (hours < 4) {
      greeting = "Go to bed!";
    } else if (hours < 12) {
      greeting = "Good morning";
    } else if (hours < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }

    return { greeting, time, currentDay };
  },
};
</script>

<style>
.greeter {
  text-align: center;
  margin: 20px;
}
</style>