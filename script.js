// Get the icons by their IDs
const facebookIcon = document.getElementById("facebook");
const instagramIcon = document.getElementById("instagram");
const twitterIcon = document.getElementById("twitter");
const globeIcon = document.getElementById("website");

// Add click event listeners to each icon
facebookIcon.addEventListener("click", function() {
    window.open("https://www.facebook.com/", "_blank");
});

instagramIcon.addEventListener("click", function() {
    window.open("https://www.instagram.com/", "_blank");
});

twitterIcon.addEventListener("click", function() {
    window.open("https://twitter.com/", "_blank");
});
globeIcon.addEventListener("click", function() {
    window.open("https://www.businessinsider.com/guides/style/best-plus-size-clothing", "_blank");
});

// Add hover effect to icons
const icons = document.querySelectorAll(".icons a");

icons.forEach(icon => {
    icon.addEventListener("mouseover", function() {
        this.style.color = "#000";
        this.style.transform = "scale(1.6)";
    });

    icon.addEventListener("mouseout", function() {
        this.style.color = "#0abde3";
        this.style.transform = "scale(1)";
    });
});
// Get the card-image and profile-image elements
const cardImage = document.querySelector('.card-image');
const profileImage = document.querySelector('.profile-image');

// Add mouseover and mouseout event listeners to apply the hover effect
cardImage.addEventListener('mouseover', function() {
    cardImage.style.transform = 'scale(1.1)';
});

cardImage.addEventListener('mouseout', function() {
    cardImage.style.transform = 'scale(1)';
});

profileImage.addEventListener('mouseover', function() {
    profileImage.style.transform = 'scale(1.1)';
});

profileImage.addEventListener('mouseout', function() {
    profileImage.style.transform = 'scale(1)';
});