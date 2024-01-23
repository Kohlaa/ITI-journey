let mp = new Map();
mp.set("mohamed", {
    Grades: [{
        Coursename: "JavaScript",
        Grade: "Excellent"
    }, ]
});

mp.set("ali", {
    Grades: [{
        Coursename: "Jquery",
        Grade: "Good"
    }, ]
}, );

mp.set("kohla", {
    Grades: [{
        Coursename: "CSS",
        Grade: "V.Good"
    }, ]
});


for (let key of mp) {
    for (key2 of key[1].Grades) {
        console.log(key[0] + ":", key2.Coursename, key2.Grade);
    }
}

let dropdown = document.querySelector("#student-dropdown");

for (let selectedName of mp.keys()) {
    let op = document.createElement("option");
    op.value = selectedName;
    op.textContent = selectedName;
    dropdown.appendChild(op);
}
change()

dropdown.addEventListener("change", () => {
    change();
});

function change() {
    let selectedName = dropdown.value;
    let studentGrade = mp.get(selectedName);

    let gradesDiv = document.querySelector("#student-grades");
    gradesDiv.innerHTML = "";

    for (let grade of studentGrade.Grades) {
        let p = document.createElement("p");
        p.textContent = `Course Name: ${grade.Coursename}, Grade: ${grade.Grade}`;
        gradesDiv.appendChild(p);
    }
}