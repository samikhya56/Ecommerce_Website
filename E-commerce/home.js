// home.js

document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    if (query) {
        alert(`Searching for: ${query}`);
        // Here, you would typically redirect to a search results page
        // window.location.href = `search-results.html?query=${encodeURIComponent(query)}`;
    } else {
        alert('Please enter a search term.');
    }
});
