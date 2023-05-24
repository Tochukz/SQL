const path = require('path')
const fs = require('fs');
const readline = require('readline');


async function processLineByLine({sql, firstField, dataFile, csvFile, fieldLength}) {
  const fileStream = fs.createReadStream(path.join(__dirname, `dataset/${csvFile}.csv`));

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  
  for await (const line of rl) {
    const values = line.split(',')
    if (values[0] == firstField) {
        continue;
    }
    let row = "("
    for(let val in values) {
        if (!values[val]) {
            values[val] = 0;
        } else if (isNaN(values[val])) {
            values[val] = `"${values[val].replaceAll('"', '')}"`;
        }
    }
    if (values.length == fieldLength) {
        row += values.join(',');
        row += '), \n'
        sql += row;
    }
  }

  fs.writeFileSync(path.join(__dirname, `sql-data/${dataFile}.sql`), sql);
}
const rankSql = "INSERT INTO `rank` (`Rank`, `Name`, `Platform`, `Year`, `Genre`, `Publisher`, `NA_Sales`, `EU_Sales`, `JP_Sales`, `Other_Sales`) VALUES \n";
const  platformSql = "INSERT INTO `platform` (`Platform`, `FirstRetailAvailability`, `Discontinued`, `UnitsSoldMillions`, `Comment`) VALUES \n";
const transacSql = "INSERT INTO `transaction` (`TransactionID`, `Timestamp`, `CustomerID`, `Name`, `Surname`, `Shipping_State`, `Item`, `Description`, `Retail_Price`, `Loyalty_Discount`) VALUES \n";
const tables = [
  {
    sql: rankSql,
    firstField: 'Rank',
    dataFile: 'rank-data',
    csvFile: 'Rank',
    fieldLength: 10
  },
  {
    sql: platformSql,
    firstField: 'Platform',
    dataFile: 'platform-data',
    csvFile: 'Platform',
    fieldLength: 5,
  },
  {
    sql: transacSql,
    firstField: 'TransactionID',
    dataFile: 'transaction-data',
    csvFile: 'Transaction',
    fieldLength: 10
  }
]

tables.forEach(item => { 
    processLineByLine(item);
});
