async function fetchData(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

async function buildDropDown() {
    const users = await fetchData("http://jsonplaceholder.typicode.com/users");
    const dropdown = document.getElementById("userDropdown");
    users.forEach(user => {
        const option = document.createElement("option");
        option.value = user.id;
        option.text = user.name;
        dropdown.appendChild(option);
    });
}

function anableBtn() {
    document.getElementById("showImageButton").disabled = false;
}

async function showImg() {
    const userId = document.getElementById("userDropdown").value;
    const userDetails = await fetchData(`http://jsonplaceholder.typicode.com/users/${userId}`);
    const userDetailsDiv = document.getElementById("userDetails");
    userDetailsDiv.innerHTML = `<h2>${userDetails.name}'s data</h2>`;
}

buildDropDown();