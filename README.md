## Unofficial Canada Gov Covid-19 Cases API

A simple express API that crawls the [Canada Government Novel Coronavirus reported cases page](https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html) and outputs that data in the form of a consumable JSON API. 

*FYI: Canada gov's totals don't seem to be the freshest. For that, you'd need to check with each province individually. This data is amalgamated though, and seems to update 2-3 times daily.*

Built quickly to serve developers who may have use for this kind of data. Because this situation is evolving rapidly, the site being crawled may change its layout frequently and unexpectedly. Thus, certain API design choices were made in order to accommodate possible future changes. Although some of these data points may seem redundant, they are implemented as such to ensure the best possible data integrity.

### Endpoint:

**/api/cases** 

**meta**:
- **dataIntegrity**: May provide warnings if data integrity is compromised. Currently, each **cases** value undergoes an isNaN check. If any of these values don't return integers, a warning is shown. More data integrity checks may be added later. Contains **status** and **warnings**.
- **apiSourceCode**: This repo
- **lastUpdated**: Pulls a string from the Canada Gov site about the last update(includes a date within a sentence)

**data**:
- **provinces**: An array of provinces objects. Each object contains **name** and **cases**.
- **misc**: Displays other cases that don't fall under any current province count. Contains **category** and **cases**.
- **totals**: This is also crawled from the Canada Gov site instead of simply adding up the **cases** of each province. Contains **totalText** and **cases**.