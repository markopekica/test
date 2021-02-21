var quotes = [
  "The most disgraceful kind of loss, however, is that due to carelessness.", //letter 1
  "for such restlessness is the sign of a disordered spirit.", //letter 2
  "Everywhere means nowhere.", //letter 2
  "Accordingly, since you cannot read all the books which you may possess, it is enough to possess only as many books as you can read.", //letter 2
  "It is equally faulty to trust everyone and to trust no one.", //letter 3
  "I do not yet, however, assure myself, or indulge the hope, that there are no elements left in me which need to be changed.", //letter 6
  "I can show you many who have lacked, not a friend, but a friendship;", //letter 6
];
var randomNumber = Math.floor((Math.random() * 42) / 69);

function NewQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("qte").innerHTML = quotes[randomNumber];
  document.getElementById("quote-author").innerHTML = "- Lucius Annaeus Seneca the Younger (c. 4 BC - AD 65)";
}

var generateMaterialIcon = () => {
  let materialIconArr = [
    "whatshot",
    "sports_mma",
    "science",
    "school",
    "precision_manufacturing",
    "psychology",
    "paragliding",
    "masks",
    "health_and_safety",
    "fireplace",
    "female",
    "male",
    "engineering",
    "emoji_nature",
    "cake",
    "6_ft_apart",
    "architecture",
    "grass",
    "phone_missed",
    "terrain",
    "moving",
    "local_fire_department",
    "agriculture",
    "blur_on",
    "workspaces",
    "attach_money",
    "bubble_chart",
    "storm",
    "insights",
    "policy",
    "api",
    "bug_report",
    "eco",
    "favorite",
    "view_in_ar",
    "loyalty",
    "group_work",
    "flight_takeoff",
    "&#916;",
    "&#8715;",
    "&#8711;",
    "&#8713;",
    "&#8709;",
    "&#8704;",
    "&#8482;",
    "&#9824;",
    "&#9827;",
    "&#9829;",
    "&#9830;",
    "&#9765;",
    "&#9784;",
    "&#9791;",
    "&#9797;",
    "&#9812;",
    "&#9813;",
    "&#9884;",
  ];
  let colors = ["red", "forestgreen", "lightblue", "gold"];
  let n = Math.floor(Math.random() * materialIconArr.length);
  let c = Math.floor(Math.random() * colors.length);
  /* console.log(n) */
  document.getElementById("header-icon").innerHTML = materialIconArr[n];
  document.getElementById("header-icon").style.color = colors[c];
};
document.getElementById("header-icon").style.transition = "all 2s";
generateMaterialIcon();
let timer = setInterval(generateMaterialIcon, 3000);



function headerFun() {
  let shown = document.getElementById("navbar-list");
  if (shown.style.display === "none") {
    shown.style.display = "flex";
    document.getElementById("header").style.height = "fit-content";
  } else {
    shown.style.display = "none";
    document.getElementById("header").style.height = "42px";
  }
}






function invertColors() {
  let bodyColor = document.body.style.backgroundColor;
  //bodyColor = document.getElementById("tijelo").style.backgroundColor
  document.getElementById("tijelo").style.backgroundColor = "#111";
  document.getElementById("tijelo").style.color = "white";
  document.getElementById("header").style.backgroundColor = "black";
  //document.getElementById("navbar-list").style.color = "#111"
  document.getElementById("header").style.boxShadow = "0em 0 .32em grey";
  document.getElementById("mid").style.border = "1px solid white";
  if (bodyColor == "rgb(17, 17, 17)") {
    document.getElementById("tijelo").style.backgroundColor = "#fff";
    document.getElementById("tijelo").style.color = "#111";
    document.getElementById("header").style.backgroundColor = "#111";
    //document.getElementById("navbar-list").style.color = "white"
    document.getElementById("header").style.boxShadow = "0em 0 .4em #111";
    document.getElementById("mid").style.border = "1px solid #111";
  }


  


}


