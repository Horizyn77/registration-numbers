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
const aboutBtn = document.querySelector("#aboutBtn");

const regNumsFactory = RegNumsFactory();

function registrationNumbers() {

    const regexTest = regNumsFactory.regexValidation(regInput.value);

    if (!regInput.value) {
        errorOrInfoDisplay.innerHTML = "<i class='bi-exclamation-octagon-fill'></i>&nbsp;&nbsp;Please enter a registration number.";
        errorOrInfoDisplay.classList.remove("hidden");
        errorOrInfoDisplay.classList.add("errorStyle")
        setTimeout(() => {
            errorOrInfoDisplay.classList.add("hidden")
            errorOrInfoDisplay.classList.remove("errorStyle")
        }, 3000)
    } else if (!regexTest) {
        errorOrInfoDisplay.innerHTML = "<i class='bi-exclamation-octagon-fill'></i>&nbsp;&nbsp;The registration number entered is not valid. Please follow the correct format. See guidelines <span id='aboutLink'>here</span>.";
        errorOrInfoDisplay.classList.remove("hidden");
        errorOrInfoDisplay.classList.add("errorStyle")
        setTimeout(() => {
            errorOrInfoDisplay.classList.add("hidden")
            errorOrInfoDisplay.classList.remove("errorStyle")
        }, 3000)
    } else if (regNumsFactory.getValidRegNums().includes(regInput.value)) {
        errorOrInfoDisplay.innerHTML = "<i class='bi-exclamation-octagon-fill'></i>&nbsp;&nbsp;The registration number has already been added.";
        errorOrInfoDisplay.classList.remove("hidden");
        errorOrInfoDisplay.classList.add("errorStyle")
        setTimeout(() => {
            errorOrInfoDisplay.classList.add("hidden")
            errorOrInfoDisplay.classList.remove("errorStyle")
        }, 3000)
    } else if (regNumsFactory.getValidRegNums().length > 14) {
        errorOrInfoDisplay.innerHTML = "<i class='bi-exclamation-octagon-fill'></i>&nbsp;&nbsp;The limit of registration numbers that can be added has been reached.";
        errorOrInfoDisplay.classList.remove("hidden");
        errorOrInfoDisplay.classList.add("errorStyle")
        setTimeout(() => {
            errorOrInfoDisplay.classList.add("hidden")
            errorOrInfoDisplay.classList.remove("errorStyle")
        }, 3000)
    } else {

        areaMsg.classList.add("hidden");

        regNumsFactory.storeValidRegNums(regInput.value);

        localStorage['regNums'] = JSON.stringify(regNumsFactory.getValidRegNums());

        const li = document.createElement("li")

        regNumsFactory.getValidRegNums().forEach((item) => {

            li.innerHTML = `${item}<span>x</span>`;

            if (regNumsFactory.getValidRegNums().length === 0) {
                numbersList.append(li);
            } else {
                numbersList.insertBefore(li, numbersList.firstElementChild)
            }
        })
        errorOrInfoDisplay.innerHTML = "<i class='bi-check-circle-fill'></i>&nbsp;&nbsp;The registration number has been added successfully.";
        errorOrInfoDisplay.classList.remove("hidden");
        errorOrInfoDisplay.classList.add("successStyle")
        setTimeout(() => {
            errorOrInfoDisplay.classList.add("hidden")
            errorOrInfoDisplay.classList.remove("successStyle")
        }, 2000)
    }
}

function townsFiltered() {

    if (townsSelect.value === "cape-town") {

        while (numbersList.firstElementChild) {
            numbersList.removeChild(numbersList.firstElementChild)
        }

        const capeTownFilter = regNumsFactory.townFilter("cape-town");

        if (capeTownFilter.length === 0) {
            errorOrInfoDisplay.innerHTML = "<i class='bi-exclamation-octagon-fill'></i>&nbsp;&nbsp;There are currently no registration numbers for Cape Town.";
            errorOrInfoDisplay.classList.remove("hidden");
            errorOrInfoDisplay.classList.add("errorStyle")
            setTimeout(() => {
                errorOrInfoDisplay.classList.add("hidden")
                errorOrInfoDisplay.classList.remove("errorStyle")
            }, 2000)
        }

        capeTownFilter.forEach((item) => {
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

        const paarlFilter = regNumsFactory.townFilter("paarl");

        if (paarlFilter.length === 0) {
            errorOrInfoDisplay.innerHTML = "<i class='bi-exclamation-octagon-fill'></i>&nbsp;&nbsp;There are currently no registration numbers for Paarl.";
            errorOrInfoDisplay.classList.remove("hidden");
            errorOrInfoDisplay.classList.add("errorStyle")
            setTimeout(() => {
                errorOrInfoDisplay.classList.add("hidden")
                errorOrInfoDisplay.classList.remove("errorStyle")
            }, 2000)
        }

        paarlFilter.forEach((item) => {
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

        const georgeFilter = regNumsFactory.townFilter("george");

        if (georgeFilter.length === 0) {
            errorOrInfoDisplay.innerHTML = "<i class='bi-exclamation-octagon-fill'></i>&nbsp;&nbsp;There are currently no registration numbers for George.";
            errorOrInfoDisplay.classList.remove("hidden");
            errorOrInfoDisplay.classList.add("errorStyle")
            setTimeout(() => {
                errorOrInfoDisplay.classList.add("hidden")
                errorOrInfoDisplay.classList.remove("errorStyle")
            }, 2000)
        }

        georgeFilter.forEach((item) => {
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

        const stellenboschFilter = regNumsFactory.townFilter("stellenbosch");

        if (stellenboschFilter.length === 0) {
            errorOrInfoDisplay.innerHTML = "<i class='bi-exclamation-octagon-fill'></i>&nbsp;&nbsp;There are currently no registration numbers for Stellenbosch.";
            errorOrInfoDisplay.classList.remove("hidden");
            errorOrInfoDisplay.classList.add("errorStyle")
            setTimeout(() => {
                errorOrInfoDisplay.classList.add("hidden")
                errorOrInfoDisplay.classList.remove("errorStyle")
            }, 2000)
        }
        stellenboschFilter.forEach((item) => {
            const li = document.createElement("li")
            li.innerHTML = `${item}<span>x</span>`;
            if (!numbersList.firstElementChild) {
                numbersList.append(li);
            } else {
                numbersList.insertBefore(li, numbersList.firstElementChild)
            }
        })
    } else if (townsSelect.value === "bellville") {
        while (numbersList.firstElementChild) {
            numbersList.removeChild(numbersList.firstElementChild)
        }

        const bellvilleFilter = regNumsFactory.townFilter("bellville");

        if (bellvilleFilter.length === 0) {
            errorOrInfoDisplay.innerHTML = "<i class='bi-exclamation-octagon-fill'></i>&nbsp;&nbsp;There are currently no registration numbers for Bellville.";
            errorOrInfoDisplay.classList.remove("hidden");
            errorOrInfoDisplay.classList.add("errorStyle")
            setTimeout(() => {
                errorOrInfoDisplay.classList.add("hidden")
                errorOrInfoDisplay.classList.remove("errorStyle")
            }, 2000)
        }
        bellvilleFilter.forEach((item) => {
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
    regNumsFactory.getValidRegNums().forEach((item) => {
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
       
        regNumsFactory.deleteRegNumFromArr(elementText);

        localStorage['regNums'] = JSON.stringify(regNumsFactory.getValidRegNums());

        e.target.parentElement.classList.add("removeFadeOut")
        e.target.parentElement.addEventListener("animationend", () => {
            e.target.parentElement.remove();
        })

        errorOrInfoDisplay.innerHTML = "<i class='bi-check-circle-fill'></i>&nbsp;&nbsp;The registration number has been removed successfully.";
        errorOrInfoDisplay.classList.remove("hidden");
        errorOrInfoDisplay.classList.add("successStyle")
        setTimeout(() => {
            errorOrInfoDisplay.classList.add("hidden")
            errorOrInfoDisplay.classList.remove("successStyle")
        }, 1000)
    }

    if (regNumsFactory.getValidRegNums().length === 0) {
        setTimeout(() => areaMsg.classList.remove("hidden"), 1000)
    }
}

if (localStorage['regNums']) {
    areaMsg.classList.add("hidden")
    regNumsFactory.setLocalStorageArr(JSON.parse(localStorage['regNums']));

    regNumsFactory.getValidRegNums().forEach((item) => {
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
    if (regNumsFactory.getValidRegNums().length > 0) {
        errorOrInfoDisplay.innerHTML = "<i class='bi-check-circle-fill'></i>&nbsp;&nbsp;All your data has been successfully cleared";
        errorOrInfoDisplay.classList.remove("hidden");
        errorOrInfoDisplay.classList.add("successStyle")
        setTimeout(() => {
            errorOrInfoDisplay.classList.add("hidden")
            errorOrInfoDisplay.classList.remove("successStyle")
        }, 3000)
    }

    regNumsFactory.clearArrData();
    localStorage.removeItem("regNums");

    while (numbersList.firstElementChild) {
        numbersList.removeChild(numbersList.firstElementChild)
    }

    areaMsg.classList.remove("hidden");
    regInput.value = "";
}

if (regNumsFactory.getValidRegNums().length === 0) {
    areaMsg.classList.remove("hidden");
}

function modalLoad() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

if (townsSelect.selected) {
    townsSelect.style.border = "1px solid #4daafa";
}

addBtn.addEventListener("click", registrationNumbers)
townsSelect.addEventListener("change", () => {
    townsFiltered();

    if (townsSelect.value === "default") {
        showAll();
    }
})

showAllBtn.addEventListener("click", showAll)
numbersList.addEventListener("click", deleteRegNum)
clearBtn.addEventListener("click", clearData)
aboutBtn.addEventListener("click", () => {
    modalLoad();
})
errorOrInfoDisplay.addEventListener("click", (e) => {
    if (e.target.matches("#aboutLink")) {
        modalLoad();
    }
})

if (!localStorage["firstPageLoad"]) {
    window.addEventListener("load", () => modalLoad())
    localStorage["firstPageLoad"] = "true";
}

modalCloseBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden")
})
overlay.addEventListener("click", () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden")
})