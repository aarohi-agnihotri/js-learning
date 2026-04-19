// * create a card which contain photo with number of followers
// *photo and followers will displayed by clicking the button

const img = document.querySelector("img");
const numOfFollowers = document.querySelector("h2 span");
const btn = document.querySelector("#btn");
const card = document.querySelector("#card");

const xhr = new XMLHttpRequest();
const requestURL = "https://api.github.com/users/hiteshchoudhary";

btn.addEventListener("click", () => {
  btn.style.display = "none";
  card.style.display = "flex";

  xhr.open("GET", requestURL, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      const data = JSON.parse(xhr.responseText);
    //   console.log(data);
    //   console.log(data.followers);
    //   console.log(data.avatar_url)
      img.setAttribute("src", "https://avatars.githubusercontent.com/u/11613311?v=4");
      numOfFollowers.innerHTML = `<span>${data.followers}</span> `;
    }
  };
  xhr.send();
});
