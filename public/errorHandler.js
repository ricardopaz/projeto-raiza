function getCookie() {
  const cookies = document.cookie.split('; ');

  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');

    if (cookieName === "error" || cookieName === "success") {
      // Return both the cookie name and value in an array
      return [cookieName, decodeURIComponent(cookieValue)];
    }
  }

  // If the loop finishes without finding the cookie, return false values
  return [false, false];
}

function deleteCookie(name) {
  // Set the cookie with an expiration date in the past to delete it
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

function displayError(message) {
  // Create an error div element
  const errorDiv = document.createElement('div');
  errorDiv.classList.add('error-message');
  errorDiv.textContent = message;

  // Prepend the error div to the body
  document.body.prepend(errorDiv);

  // Remove the error message after 5 seconds (5000 milliseconds)
  setTimeout(() => {
    errorDiv.remove();
  }, 5000);
}

function displaySuccess(message) {
  // Create an error div element
  const errorDiv = document.createElement('div');
  errorDiv.classList.add('success-message');
  errorDiv.textContent = message;

  // Prepend the error div to the body
  document.body.prepend(errorDiv);

  // Remove the error message after 5 seconds (5000 milliseconds)
  setTimeout(() => {
    errorDiv.remove();
  }, 5000);
}

document.addEventListener('DOMContentLoaded', function() {
  console.log("[ErrorHandler]: Checking for errors or success");
  const [errorCookie, cookieValue] = getCookie();

  if (errorCookie && cookieValue) {
    if (errorCookie == "success") {
      console.log("[Error Handler]: Success Found", cookieValue);
      displaySuccess(cookieValue);
      deleteCookie(errorCookie);
    } 

    if (errorCookie == "error") {
      console.log("[Error Handler]: Error found", cookieValue);
      displayError(cookieValue)
      deleteCookie(errorCookie);
    }
  } else {
    console.log("[Error Handler]: Nothing found!");
  }
});
