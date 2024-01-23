const validator = require('validator');

const dateString = '2001-06-28';

if (validator.isDate(dateString)) {
  console.log(`${dateString} is a valid date.`);
} else {
  console.log(`${dateString} is not a valid date.`);
}
