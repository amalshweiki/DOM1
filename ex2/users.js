const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
  },
];
//2.Setup a Target Element

const container = document.querySelector(".container");
//3.Creating an Ordered List

const olEl = document.createElement("ol");
olEl.style.listStyleType = "none";
//4.Looping through Users
//5.Creating and Appending List Items

users.forEach((user) => {
  const liEl = document.createElement("li");
  liEl.setAttribute("data-id", user.id);
  //liEl.textContent = el.firstName + " " + el.lastName;
  liEl.textContent = `${user.firstName} ${user.lastName}`;
  olEl.appendChild(liEl);
});

container.appendChild(olEl);
