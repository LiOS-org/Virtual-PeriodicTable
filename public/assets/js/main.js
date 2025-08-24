// Adjusts the height of the .table according to the contents within it
document.addEventListener("DOMContentLoaded", function() {
    const groups = document.querySelectorAll('.table ');
    let maxHeight = 0;
    groups.forEach(g => {
        maxHeight = Math.max(maxHeight, g.offsetHeight);
    });
    groups.forEach(g => {
        g.style.height = maxHeight + "px";
    });
});