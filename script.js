

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".add-to-cart");
    items.forEach(function (item) {
        item.addEventListener("click", function () {
            alert("Item added to cart!");
        });
    });

    var newsletterForm = document.querySelector(".newsletter form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you for subscribing!");
        });
    }
});
new PerformanceObserver((entryList) => {
const entries = entryList.getEntries();
const lastEntry = entries[entris.length - 1];
console.log("LCP:", lastEntry.startTime);
}).observe({ type: "largest.contentful-paint", buffered: true});