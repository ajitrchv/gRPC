const fs = require("fs")
const employees = []

employees.push({
    "name":"hardpope",
    "salary":1000,
    "id":1820154
})
employees.push({
    "name":"eric",
    "salary":4000,
    "id":1820156
})
const popehard = {
    "name":"popehard",
    "salary":2000,
    "id":1820155
}
employees.push(popehard)

fs.writeFileSync("jsondata.json",JSON.stringify(employees))


