const regInput = document.querySelector("input");
const addBtn = document.querySelector("#addBtn");
const numbersList = document.querySelector("ul");
const townOptions = document.querySelectorAll("option");
const townsSelect = document.querySelector("#towns")
const showAllBtn = document.querySelector("#showAllBtn")
const deleteBtns = document.querySelectorAll("span");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector("h3 span");
const overlay = document.querySelector(".overlay");
const errorOrInfoDisplay = document.querySelector(".errorOrInfoDisplay");
const clearBtn = document.querySelector("#clearBtn");
const areaMsg = document.querySelector(".areaMsg");
const removeWelcomeMsg = document.querySelector(".modal p:last-of-type")

let regNumArr = [];

function registrationNumbers() {

    const pattern = /^[A-Z]{2,3} \d{3,5}$/

    const regexTest = pattern.test(regInput.value);

    if (!regInput.value) {
        errorOrInfoDisplay.innerText = "Please enter a registration number.";
        errorOrInfoDisplay.classList.remove("hidden");
        errorOrInfoDisplay.classList.add("errorStyle")
        setTimeout(() => {
            errorOrInfoDisplay.classList.add("hidden")
            errorOrInfoDisplay.classList.remove("errorStyle")
        }, 3000)
    } else if (!regexTest) {
        errorOrInfoDisplay.innerText = "The registration number entered is not valid. Please follow the correct format. See guidelines here.";
        errorOrInfoDisplay.classList.remove("hidden");
        errorOrInfoDisplay.classList.add("errorStyle")
        setTimeout(() => {
            errorOrInfoDisplay.classList.add("hidden")
            errorOrInfoDisplay.classList.remove("errorStyle")
        }, 3000)
    } else if (regNumArr.includes(regInput.value)) {
        errorOrInfoDisplay.innerText = "The registration number has already been added.";
        errorOrInfoDisplay.classList.remove("hidden");
        errorOrInfoDisplay.classList.add("errorStyle")
        setTimeout(() => {
            errorOrInfoDisplay.classList.add("hidden")
            errorOrInfoDisplay.classList.remove("errorStyle")
        }, 3000)
    } else if (regNumArr.length > 14) {
        errorOrInfoDisplay.innerText = "The limit of registration numbers that can be added has been reached.";
        errorOrInfoDisplay.classList.remove("hidden");
        errorOrInfoDisplay.classList.add("errorStyle")
        setTimeout(() => {
            errorOrInfoDisplay.classList.add("hidden")
            errorOrInfoDisplay.classList.remove("errorStyle")
        }, 3000)
    } else {

        areaMsg.classList.add("hidden");

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
        errorOrInfoDisplay.innerText = "The registration number has been added successfully.";
        errorOrInfoDisplay.classList.remove("hidden");
        errorOrInfoDisplay.classList.add("successStyle")
        setTimeout(() => {
            errorOrInfoDisplay.classList.add("hidden")
            errorOrInfoDisplay.classList.remove("successStyle")
        }, 3000)
    }
}

function townsFiltered(e) {
    e.preventDefault();
    if (townsSelect.value === "cape-town") {


        while (numbersList.firstElementChild) {
            numbersList.removeChild(numbersList.firstElementChild)
        }

        let capeTownFiltered = regNumArr.filter((item) => item.toLowerCase().substring(0, 2) === "ca" && item.toLowerCase().charAt(2) !== "w");

        if (capeTownFiltered.length === 0) {
            errorOrInfoDisplay.innerText = "There are currently no registration numbers for Cape Town.";
            errorOrInfoDisplay.classList.remove("hidden");
            errorOrInfoDisplay.classList.add("errorStyle")
            setTimeout(() => {
                errorOrInfoDisplay.classList.add("hidden")
                errorOrInfoDisplay.classList.remove("errorStyle")
            }, 3000)
        }

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

        if (paarlFiltered.length === 0) {
            errorOrInfoDisplay.innerText = "There are currently no registration numbers for Paarl.";
            errorOrInfoDisplay.classList.remove("hidden");
            errorOrInfoDisplay.classList.add("errorStyle")
            setTimeout(() => {
                errorOrInfoDisplay.classList.add("hidden")
                errorOrInfoDisplay.classList.remove("errorStyle")
            }, 3000)
        }

        paarlFiltered.forEach((item) => {
            const li = document.createElement("li")
            li.innerHTML = `${item}<span>x</span>`;
            if (!numbersList.firstElementChild) {
                numbersList.append(li);
            } else {
                numbersList.insertBefore(li, numbersList.firstElementChild)
            }
        })
    } else if (townsSelect.value === "george") {
        while (numbersList.firstElementChild) {
            numbersList.removeChild(numbersList.firstElementChild)
        }

        let georgeFiltered = regNumArr.filter((item) => item.toLowerCase().startsWith("caw"))

        if (georgeFiltered.length === 0) {
            errorOrInfoDisplay.innerText = "There are currently no registration numbers for George.";
            errorOrInfoDisplay.classList.remove("hidden");
            errorOrInfoDisplay.classList.add("errorStyle")
            setTimeout(() => {
                errorOrInfoDisplay.classList.add("hidden")
                errorOrInfoDisplay.classList.remove("errorStyle")
            }, 3000)
        }

        georgeFiltered.forEach((item) => {
            const li = document.createElement("li")
            li.innerHTML = `${item}<span>x</span>`;
            if (!numbersList.firstElementChild) {
                numbersList.append(li);
            } else {
                numbersList.insertBefore(li, numbersList.firstElementChild)
            }
        })
    } else if (townsSelect.value === "stellenbosch") {
        while (numbersList.firstElementChild) {
            numbersList.removeChild(numbersList.firstElementChild)
        }

        let stellenboschFiltered = regNumArr.filter((item) => item.toLowerCase().startsWith("cl"))

        if (stellenboschFiltered.length === 0) {
            errorOrInfoDisplay.innerText = "There are currently no registration numbers for Stellenbosch.";
            errorOrInfoDisplay.classList.remove("hidden");
            errorOrInfoDisplay.classList.add("errorStyle")
            setTimeout(() => {
                errorOrInfoDisplay.classList.add("hidden")
                errorOrInfoDisplay.classList.remove("errorStyle")
            }, 3000)
        }
        stellenboschFiltered.forEach((item) => {
            const li = document.createElement("li")
            li.innerHTML = `${item}<span>x</span>`;
            if (!numbersList.firstElementChild) {
                numbersList.append(li);
            } else {
                numbersList.insertBefore(li, numbersList.firstElementChild)
            }
        })
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

    townsSelect.value = "default";
}

function deleteRegNum(e) {
    const elementText = e.target.parentElement.childNodes[0].nodeValue;

    if (e.target.tagName === "SPAN") {
        const index = regNumArr.indexOf(elementText)
        regNumArr.splice(index, 1)
        localStorage['regNums'] = JSON.stringify(regNumArr)

        e.target.parentElement.classList.add("removeFadeOut")
        e.target.parentElement.addEventListener("animationend", () => {
            e.target.parentElement.remove();
        })

        errorOrInfoDisplay.innerText = "The registration number has been removed successfully.";
        errorOrInfoDisplay.classList.remove("hidden");
        errorOrInfoDisplay.classList.add("successStyle")
        setTimeout(() => {
            errorOrInfoDisplay.classList.add("hidden")
            errorOrInfoDisplay.classList.remove("successStyle")
        }, 1000)
    }

    if (regNumArr.length === 0) {
        setTimeout(() => areaMsg.classList.remove("hidden"), 1000)
    }
}

if (localStorage['regNums']) {
    areaMsg.classList.add("hidden")
    regNumArr = JSON.parse(localStorage['regNums']);

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

function clearData() {
    if (regNumArr.length > 0) {
        errorOrInfoDisplay.innerText = "All your data has been successfully cleared";
        errorOrInfoDisplay.classList.remove("hidden");
        errorOrInfoDisplay.classList.add("successStyle")
        setTimeout(() => {
            errorOrInfoDisplay.classList.add("hidden")
            errorOrInfoDisplay.classList.remove("successStyle")
        }, 3000)
    }

    regNumArr = [];
    localStorage.removeItem("regNums");

    while (numbersList.firstElementChild) {
        numbersList.removeChild(numbersList.firstElementChild)
    }


    areaMsg.classList.remove("hidden");
}

if (!localStorage["firstPageLoad"]) {
    localStorage["firstPageLoad"] = "true";
}

if (regNumArr.length === 0) {
    areaMsg.classList.remove("hidden");
}

function modalLoad() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

addBtn.addEventListener("click", registrationNumbers)
townsSelect.addEventListener("change", townsFiltered)
showAllBtn.addEventListener("click", showAll)
numbersList.addEventListener("click", deleteRegNum)
clearBtn.addEventListener("click", clearData)
window.addEventListener("load", () => {
    if (localStorage["firstPageLoad"] === "true") {
        modalLoad();
    }
})
removeWelcomeMsg.addEventListener("click", () => localStorage["firstPageLoad"] = "false")
modalCloseBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden")
})