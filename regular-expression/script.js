let searchBtn = document.querySelector("#searchBtn");
let searchUser = document.querySelector("#searchUser");
let postCode = /^\d{4}$/;
let email = /^[a-zA-Z0-9]+[\._]?[a-zA-Z0-9]+[@]\w+[.]\w{2,3}$/;
let phone = /^(\+)?(88)?01[0-9]{9}$/;

let ent = prompt(`Which Expressions you want to Verify?
                   1.Email
                   2.Phone Number
                   3.Post Code`);

while (ent > 3 || ent == 0) {
  alert("Enter the Input between 1 1o 3.");
  ent = prompt(`Which Expressions you want to Verify?
                   1.Email
                   2.Phone Number
                   3.Post Code`);
}

searchBtn.addEventListener("click", (e) => {
  let userText = searchUser.value;
  if (userText != "") {
    let guess = parseInt(ent);

    switch (guess) {
      case 1:
        if (email.test(userText)) {
          alert("Congrats! your Email Expression is Correct.");
        } else {
          alert("Try Again! Your Email is wrong.");
        }
        searchUser.value = "";
        break;
      case 2:
        if (phone.test(userText)) {
          alert("Congrats! your Phone Number Expression is Correct.");
        } else {
          alert("Try Again! Your Phone Number is wrong.");
        }
        searchUser.value = "";
        break;
      case 3:
        if (postCode.test(userText)) {
          alert("Congrats! your Post Code Expression is Correct.");
        } else {
          alert("Try Again! Your Post Code is wrong.");
        }
        searchUser.value = "";
        break;

      default:
        alert("Try Again! You Enter the wrong Input.");
    }
  } else {
    alert("Enter the Expression.");
  }
});
