document.addEventListener("DOMContentLoaded", function () {
    // Toggle description visibility on profile click
    const profileInfos = document.querySelectorAll(".profile-info");
    profileInfos.forEach((profileInfo) => {
      profileInfo.addEventListener("click", function () {
        profileInfos.forEach((item) => {
          item.classList.remove("active");
        });
        this.classList.toggle("active");
      });
    });
  });
  