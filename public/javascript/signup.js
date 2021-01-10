async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && password) {
    const response = await fetch("api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "content-type": "application/json" },
    });
    // check the response status
    if (response.ok) {
      console.log("Success!");
      document.location.replace("/login");
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);
