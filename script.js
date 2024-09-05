var isDate = function (input) {
  if (input instanceof Date) {
    return true;
  } else if (typeof input === 'string') {
    // Use Date.parse instead of new Date
    return !isNaN(Date.parse(input)); 
  } else {
    return false;
  }
};