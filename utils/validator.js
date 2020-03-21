module.exports = {
    // Checks if cases values are integers and updates data integrity warning if one or more is not
    checkCases: (response) => {
        const vals = Object.values(response.data.provinces);
        for (const val of vals) {
            if (isNaN(parseInt(val.cases))) {
                console.log(val.cases)
                response.meta.dataIntegrity.status = "questionable"
                response.meta.dataIntegrity.warnings.push("One or more provinces didn't return parsable integers. Original markup may have changed. Check Canada gov site.");
            }
        }
        return response;
    },
    // Compares the total returned from crawling with the sum of all returned province's cases individually and updates data integrity warning if there is a mismatch
    checkTotal: (response) => {
        const totalCasesReported = Object.values(response.data.totalCases.cases);
        const vals = Object.values(response.data.provinces);
        let totalCasesSum;
        for (const val of vals) {
            totalCasesSum += parseInt(val.cases)
        }
        if (totalCasesSum !== totalCasesReported) {
            response.meta.dataIntegrity.status = "questionable"
            response.meta.dataIntegrity.warnings.push("The total cases value crawled from Canada Gov did not match the sum of each province's cases. Either Canada Gov's math is wrong or there was a crawler error. Check Canada gov site.");
        }
        return response;
    }
}