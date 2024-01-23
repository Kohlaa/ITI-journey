// Fetch the JSON file
fetch('rockbands.json')
.then(response => response.json())
.then(bandsData => {
    
    const bandsDropdown = document.getElementById('bands');
    const artistsDropdown = document.getElementById('artists');

   
    for (const band in bandsData) {
        const option = document.createElement('option');
        option.value = band;
        option.textContent = band.charAt(0).toUpperCase() + band.slice(1); // Capitalize 
        bandsDropdown.appendChild(option);
    }


    window.populateArtists = function() {
        const selectedBand = bandsDropdown.value;
        artistsDropdown.innerHTML = '<option value="">Select Artist</option>';

        if (selectedBand) {
            bandsData[selectedBand].forEach(artist => {
                const option = document.createElement('option');
                option.value = artist.value;
                option.textContent = artist.name;
                artistsDropdown.appendChild(option);
            });
        }
    }

    // Function to open the selected artist's link
    window.openArtistLink = function() {
        const selectedLink = artistsDropdown.value;
        if (selectedLink) {
            window.open(selectedLink, '_blank');
        }
    }

});
