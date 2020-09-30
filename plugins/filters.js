import Vue from "vue"
Vue.filter('duration', function (value) {
  value = value.toString();
  if (value && value.length < 3) {
    return value + " min";
  }
  let hour = value.substring(0, 1);
  let minute = value.substring(1, 3);

  return hour + "h e " + minute + " min";
})
