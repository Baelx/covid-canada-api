const axios = require('axios');
const cheerio = require('cheerio'); 
const validator = require('./validator');

module.exports = {
    site: () => {
        return axios.get('https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html')
            .then((response) => {
                const $ = cheerio.load(response.data)
                // Create response object consisting of JSON made from a parsed table found at above site
                const responseObject = {
                    meta: {
                        urlCrawled: 'https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html',
                        apiSourceCode: 'https://github.com/Baelx/covid-canada-api',
                        // This key is updated if data validation fails
                        dataIntegrity: {
                            status: 'good',
                            warnings: []
                        },
                    },
                    data: {

                        lastUpdated: $('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > caption').html(),
                        provinces: [
                            {
                                name: $('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(1) > td:nth-child(1)').html(),
                                cases:  parseInt($('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(1) > td:nth-child(2)').html().replace(',',''))
                            },
                            {
                                name: $('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(2) > td:nth-child(1)').html(),
                                cases:  parseInt($('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(2) > td:nth-child(2)').html().replace(',',''))
                            },
                            {
                                name: $('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(3) > td:nth-child(1)').html(),
                                cases:  parseInt($('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(3) > td:nth-child(2)').html().replace(',',''))
                            },
                            {
                                name: $('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(4) > td:nth-child(1)').html(),
                                cases:  parseInt($('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(4) > td:nth-child(2)').html().replace(',',''))
                            },
                            {
                                name: $('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(5) > td:nth-child(1)').html(),
                                cases:  parseInt($('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(5) > td:nth-child(2)').html().replace(',',''))
                            },
                            {
                                name: $('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(6) > td:nth-child(1)').html(),
                                cases:  parseInt($('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(6) > td:nth-child(2)').html().replace(',',''))
                            },
                            {
                                name: $('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(7) > td:nth-child(1)').html(),
                                cases:  parseInt($('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(7) > td:nth-child(2)').html().replace(',',''))
                            },
                            {
                                name: $('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(8) > td:nth-child(1)').html(),
                                cases:  parseInt($('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(8) > td:nth-child(2)').html().replace(',',''))
                            },
                            {
                                name: $('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(9) > td:nth-child(1)').html(),
                                cases:  parseInt($('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(9) > td:nth-child(2)').html().replace(',',''))
                            },
                            {
                                name: $('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(10) > td:nth-child(1)').html(),
                                cases:  parseInt($('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(10) > td:nth-child(2)').html().replace(',',''))
                            },
                            {
                                name: $('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(11) > td:nth-child(1)').html(),
                                cases:  parseInt($('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(11) > td:nth-child(2)').html().replace(',',''))
                            },
                            {
                                name: $('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(12) > td:nth-child(1)').html(),
                                cases:  parseInt($('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(12) > td:nth-child(2)').html().replace(',',''))
                            },
                            {
                                name: $('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(13) > td:nth-child(1)').html(),
                                cases:  parseInt($('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(13) > td:nth-child(2)').html().replace(',',''))
                            }
                        ],
                        misc: {
                            category: $('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(14) > td:nth-child(1)').html(),
                            cases:  parseInt($('.table-bordered > tbody > tr:nth-child(14) > td:nth-child(2)').html().replace(',',''))
                        },
                        totals: {
                            totalText: $('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(15) > td:nth-child(1) > strong').html(),
                            cases:  parseInt($('body > main > div:nth-child(3) > table.table.table-striped.table-bordered > tbody > tr:nth-child(15) > td:nth-child(2) > strong').html().replace(',',''))
                        },
                    }
                }
                return responseObject;
                })
                .then(response => {
                    return validator.checkCases(response)
                })
            }
}