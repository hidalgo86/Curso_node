const moment = require("moment");

const fecha = moment();
const fechaFormato = fecha.format("DD ** MM ** YYYY");

const fecha2 = moment("1988-08-08");

fecha2.add(11, "years");
fecha2.add(1, "month");
fecha2.add(1, "day");

console.log(fecha.diff(fecha2, "days"));
console.log(moment("2017-13-29").isValid());
