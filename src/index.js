let campaignButtons = document.getElementsByClassName("campaign-button");
let campaignImg = document.getElementById("campaign-img");
let currentCampaign=document.getElementsByClassName("campaign-button")[0];

let imgsObj = {
  post: "/src/assets/post.png",
  shortlist: "/src/assets/shortlist.png",
  manage: "/src/assets/manage.png"
};

for (let campaign of campaignButtons) {
  campaign.addEventListener("click", (e) => {
    if (e.target.classList.contains("active-campaign")) {
      return;
    }    
    if (e.target.classList.contains("campaign-button")) {
      currentCampaign.classList.remove("active-campaign");
      e.target.classList.add("active-campaign");
      campaignImg.src = imgsObj[e.target.classList[0]];
      currentCampaign=e.target;
    }
  });
}
