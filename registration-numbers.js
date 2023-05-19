const regInput = document.querySelector("input");
const addBtn = document.querySelector("#addBtn");
const numbersList = document.querySelector("ul");
const townOptions = document.querySelectorAll("option");
const townsSelect = document.querySelector("#towns")
const showAllBtn = document.querySelector("#showAllBtn")
const deleteBtns = document.querySelectorAll("span");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector("h3 span")
const overlay = document.querySelector(".overlay")

let regNumArr = [];

function registrationNumbers() {

    const pattern = /^[A-Z]{2,3} \d{3,5}$/

    const regexTest = pattern.test(regInput.value);

    if (!regInput.value) {
        alert("Empty value")
    } else if (!regexTest) {
        alert("Regex failed")
    } else if (regNumArr.length > 14) {
        alert("Limit reached")
    } else if (regNumArr.includes(regInput.value)) {
        alert("Reg number already added")
    } else {
        regNumArr.push(regInput.value);

        localStorage['regNums'] = JSON.stringify(regNumArr);

        const li = document.createElement("li")

        regNumArr.forEach((item) => {

            li.innerHTML = `${item}<span>x</span>`;

            if (regNumArr.length === 0) {
                numbersList.append(li);
            } else {
                numbersList.insertBefore(li, numbersList.firstElementChild)
            }
        })
    }
}

function townsFiltered(e) {
    e.preventDefault();
    if (townsSelect.value === "cape-town") {
        while (numbersList.firstElementChild) {
            numbersList.removeChild(numbersList.firstElementChild)
        }

        let capeTownFiltered = regNumArr.filter((item) => item.toLowerCase().substring(0, 2) === "ca" && item.toLowerCase().charAt(2) !== "w");

        capeTownFiltered.forEach((item) => {
            const li = document.createElement("li")
            li.innerHTML = `${item}<span>x</span>`;

            if (!numbersList.firstElementChild) {
                numbersList.append(li);
            } else {
                numbersList.insertBefore(li, numbersList.firstElementChild)
            }
        })
    } else if (townsSelect.value === "paarl") {
        while (numbersList.firstElementChild) {
            numbersList.removeChild(numbersList.firstElementChild)
        }

        let paarlFiltered = regNumArr.filter((item) => item.toLowerCase().startsWith("cj"))

        paarlFiltered.forEach((item) => {
            const li = document.createElement("li")
            li.innerHTML = `${item}<span>x</span>`;
            numbersList.append(li);
        })
    } else if (townsSelect.value === "george") {
        while (numbersList.firstElementChild) {
            numbersList.removeChild(numbersList.firstElementChild)
        }

        let georgeFiltered = regNumArr.filter((item) => item.toLowerCase().startsWith("caw"))

        georgeFiltered.forEach((item) => {
            const li = document.createElement("li")
            li.innerHTML = `${item}<span>x</span>`;
            numbersList.append(li);
        })
    } else if (townsSelect.value === "stellenbosch") {
        while (numbersList.firstElementChild) {
            numbersList.removeChild(numbersList.firstElementChild)
        }

        let stellenboschFiltered = regNumArr.filter((item) => item.toLowerCase().startsWith("cl"))

        if (stellenboschFiltered.length >= 1) {
            stellenboschFiltered.forEach((item) => {
                const li = document.createElement("li")
                li.innerHTML = `${item}<span>x</span>`;
                numbersList.append(li);
            })
        } else {
            numbersList.append("There are no registration numbers for Stellenbosch")
        }

    }
}

function showAll() {
    while (numbersList.firstChild) {
        numbersList.removeChild(numbersList.firstChild)
    }
    regNumArr.forEach((item) => {
        const li = document.createElement("li")
        li.innerHTML = `${item}<span>x</span>`;

        if (!numbersList.firstElementChild) {
            numbersList.append(li);
        } else {
            numbersList.insertBefore(li, numbersList.firstElementChild)
        }
    })
}

function deleteRegNum(e) {
    const elementText = e.target.parentElement.childNodes[0].nodeValue;

    if (e.target.tagName === "SPAN") {
        const index = regNumArr.indexOf(elementText)
        regNumArr.splice(index, 1)
        e.target.parentElement.classList.add("removeFadeOut")
        e.target.parentElement.addEventListener("animationend", () => {
            e.target.parentElement.remove();
        })
    }
}

if (localStorage['regNums']) {
    regNumArr = JSON.parse(localStorage['regNums']);
    console.log(regNumArr)
    regNumArr.forEach((item) => {
        const li = document.createElement("li")
        li.innerHTML = `${item}<span>x</span>`;

        if (!numbersList.firstElementChild) {
            numbersList.append(li);
        } else {
            numbersList.insertBefore(li, numbersList.firstElementChild)
        }
    })
}

addBtn.addEventListener("click", registrationNumbers)
townsSelect.addEventListener("change", townsFiltered)
showAllBtn.addEventListener("click", showAll)
numbersList.addEventListener("click", deleteRegNum)
window.addEventListener("load", function () {

    // if (!localStorage.getItem("modalLoaded")) {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden")
    //     localStorage.setItem("modalLoaded", "true")
    // }
})

modalCloseBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden")
})