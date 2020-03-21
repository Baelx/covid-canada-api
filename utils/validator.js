module.exports = {
    // Provides a cleaner interface for parsing ints
    checkCases: (response) => {
        const vals = Object.values(response.provinces)
        for (const val of vals) {
            if (isNaN(parseInt(val.cases))) {
                console.log(val.cases)
                response.dataIntegrity.status = "questionable"
                response.dataIntegrity.warnings = "One or more provinces didn't return parseable integers. Original markup may have changed. Check Canada gov site."
            }
        }
        return response;
    }
}