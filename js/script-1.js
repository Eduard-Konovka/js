// #1-33
function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  if (message.length <= maxLength) {
    result = message;
  } else {
	  result = message.slice(0, maxLength) + "...";
  }
  // Change code above this line
  return result;
}

// #1-36 (вариант 1)
let message = 'spam bla-bla-bla sale'
function checkForSpam() {
  let result;
  // Change code below this line
	message = message.toLowerCase('spam' && 'sale');
	if (message.includes('spam')) {
    result = true;
  } else if (message.includes('sale')) {
    result = true;
  } else {
    result = false;
  }
  // Change code above this line
  return result;
}
console.log('#1-36: ', checkForSpam(), typeof checkForSpam());

// #1-36 (вариант 2)
function checkForSpam2() {
  let result;
  // Change code below this line
	message = message.toLowerCase('spam' && 'sale');
  result = message.includes('spam') || message.includes('sale');
  // Change code above this line
  return result;
}
console.log('#1-36: ', checkForSpam2(), typeof checkForSpam());

