var isDate = function (input) {
  //   write your code here
  if (input instanceof Date) {
    return true;
  } else if (typeof input === 'string') {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate.getTime());
  } else {
    return false;
  }
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));