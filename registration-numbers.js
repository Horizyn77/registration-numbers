function RegNumsFactory() {
    let regNumArr = [];

    function storeValidRegNums(regInput) {
        regNumArr.push(regInput)
    }

    function getValidRegNums() {
        return regNumArr;
    }

    function regexValidation(regInput) {
        const pattern = /^[A-Z]{2,3} (\d{3,6}|\d{3}[ -]\d{3})$/
        return pattern.test(regInput);
    }

    function setLocalStorageArr(localStorageArr) {
        regNumArr = localStorageArr;
    }

    function clearArrData() {
        regNumArr = [];
    }

    function townFilter(town) {
        if (town === "cape-town") {
            let capeTownFiltered = regNumArr.filter((item) => item.toLowerCase().substring(0, 2) === "ca" && item.toLowerCase().charAt(2) !== "w");
            return capeTownFiltered;
        } else if (town === "paarl") {
            let paarlFiltered = regNumArr.filter((item) => item.toLowerCase().startsWith("cj"));
            return paarlFiltered;
        } else if (town === "george") {
            let georgeFiltered = regNumArr.filter((item) => item.toLowerCase().startsWith("caw"));
            return georgeFiltered;
        } else if (town === "stellenbosch") {
            let stellenboschFiltered = regNumArr.filter((item) => item.toLowerCase().startsWith("cl"));
            return stellenboschFiltered;
        } else if (town === "bellville") {
            let bellvilleFiltered = regNumArr.filter((item) => item.toLowerCase().startsWith("cy"));
            return bellvilleFiltered;
        }
    }

    function deleteRegNumFromArr(elText) {
        const index = regNumArr.indexOf(elText);
        regNumArr.splice(index, 1)
    }

    return {
        storeValidRegNums,
        getValidRegNums,
        regexValidation,
        setLocalStorageArr,
        clearArrData,
        townFilter,
        deleteRegNumFromArr
    }
}