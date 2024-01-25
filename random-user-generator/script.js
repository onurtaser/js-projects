function fetchUser() {
  showSpinner();
  fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then(data => {
      hideSpinner();
      settingUser(data.results[0])
    });
}

  const generateBtn = document.getElementById("generate");
  const header = document.getElementById("user");

  function settingUser(user) {

    if(user.gender === "male"){
      document.body.style.backgroundColor = "steelblue";
    } else {
      document.body.style.backgroundColor = "rebeccapurple";
    }

    header.innerHTML = `
    <div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src="${user.picture.large}"
            />
            <div class="space-y-3">
              <p class="text-xl">
                <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span> ${user.email}
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span> ${user.phone}
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span> ${user.location.city}/${user.location.country}
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
            </div>
          </div>
        </div>
      </div>`
  }

  function showSpinner() {
    document.querySelector(".spinner").style.display = "block";
  }

  function hideSpinner() {
    document.querySelector(".spinner").style.display = "none";
  }

generateBtn.addEventListener("click", fetchUser);

fetchUser();
