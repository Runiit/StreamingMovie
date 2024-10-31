const apiKey = 'vidsrc.in'; // Replace with your VidSrc.dev API key

async function fetchData() {
    const query = document.getElementById('search-input').value;
    const type = document.querySelector('input[name="type"]:checked').value;
    const url = `https://vidsrc.dev/api/search?apiKey=${apiKey}&query=${encodeURIComponent(query)}${type !== 'all' ? `&type=${type}` : ''}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayResults(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function fetchNewReleases() {
    const url = `https://vidsrc.dev/api/new-releases?apiKey=${apiKey}`; // Adjust URL based on API docs

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayResults(data);
    } catch (error) {
        console.error('Error fetching new releases:', error);
    }
}

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    data.results.forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.overview}</p>
        `;
        resultsDiv.appendChild(resultItem);
    });
}