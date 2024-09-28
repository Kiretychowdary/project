document.getElementById('wallet-link').addEventListener('click', function() {
    showSection('wallet');
});

document.getElementById('products-link').addEventListener('click', function() {
    showSection('products');
});

document.getElementById('orders-link').addEventListener('click', function() {
    showSection('orders');
});

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}
