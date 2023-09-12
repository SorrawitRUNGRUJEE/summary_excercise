const fs = require('fs/promises')
const product = "./products.json"
const summary = "./summary.json"
const encoding = "utf8"
    fs.readFile(product,encoding)
    .then(res=>{
        return JSON.parse(res)
    })
    .then(res=>{
        return res.reduce((acc,item)=>{
            acc.all++
            if(item.category.name == "Clothes") acc.Clothes++
            if(item.category.name == "Shoes") acc.Shoes++
            if(item.category.name == "Others") acc.Others++
            if(item.category.name == "Camilo") acc.Camilo++
            if(item.category.name == "Electronics") acc.Electronics++
            return acc
        },{
            all:0,
            Clothes:0,
            Shoes:0,
            Others:0,
            Camilo:0,
            Electronics:0
        });
    }).then(res=>{
        const sum = JSON.stringify(res)
        fs.writeFile(summary,sum)
    }).finally(x=>console.log("finish"))


 
