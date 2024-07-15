const fs = require("fs")

// const { require } = require("yargs");5

// fs.writeFileSync( "data1.txt" , "yasmeen" )

// // console.log(fs.readFileSync("data1.txt").toString())

// fs.appendFileSync( "data1.txt" , " alaa ali ")

// console.log(fs.readFileSync("data1.txt").toString())

////////////////////////////////////////////////////////////////////

// const x = require("./allData")

// console.log(x.fname)
// console.log(x.lname)
// console.log(x.city)
// console.log(x.fun1(5,5))

///////////////////////////////////////////////////////////////////
 
// const validator = require("validator")

    
//     // console.log(validator.isEmail("yasmeen"))

//     console.log(validator.isEmail("yasmeen@gmail.com"))

    /////////////////////////////////////////////////////////////

    // console.log(process.argv)
  
//   console.log(process.argv[2])

//   const x = process.argv[2]

//   if (x === "add"){
//     console.log ("you have adedd an item")

//   } else if ( x === "delete"){
//     console.log ("you have deleted an item")

//   } else {
//     console.log("ERORR")
//   }

///////////////////////////////////////////////////////

  const yargs = require("yargs")
  // // console.log(yargs.argv)

  // // yargs.command({
  // //   command : "add" ,
  // //   desribe : "to add an item" ,
  // //   handler : ()=> {
  // //     console.log("you have already adedd an item")
  // //   }
  // // })
  //   //  console.log(yargs.argv)

  //   ///////////////////////////////////////////////////////

    const data10 = require("./data10")
const { type } = require("os")


    yargs.command({
      command : "add" ,
      desribe : "to add an item" ,
      builder : {
        fname : {
      desribe : "this the first name desc in add command",
      demandOption : true , 
      type : "string"
      },
      lname :{
        desribe : "this the last name desc in add command",
      demandOption : true , 
      type : "string"
      }
    },
      handler : (x)=> {
        // console.log("you have already adedd an item")

        // console.log(x.fname , x.lname)

        data10.addperson(x.id , x.fname , x.lname , x.city , x.age )
      }
    })

    

    // console.log(yargs.argv)
      
    // yargs.parse()


    yargs.command({
      command : "delete",
      desribe : "to delete an item",
      handler : (x)=> {
        // console.log("you have already deleted an item")
        data10.deleteData(x.id)
      }
    })


    //////////////////////////////////////////////////////////

     yargs.command({
      command : "read",
      desribe : "to read an item",
      builder : {
        id : {
          describe : " this is id desc in read command",
          demandOption : true,
          type : "string"
        }
      },
       handler : (x) => {
        data10.readData(x.id)
       }

     })

     ////////////////////////////////////////

      yargs.command ({
        command : "list",
        desribe : " to list data",
        handler : () =>{
          data10.listData()
        }
      })

     yargs.parse()
    // console.log(yargs.argv)


    // const person1 = {
    //   fname : "yasmeen",
    //   lname : "alaa",
    //   city  : "luxor"
    
    // }
  
    //  const person1Json = JSON.stringify(person1)

    //  console.log(person1Json)
 
    //  const person1Obj = JSON.parse(person1Json)
 
    //   console.log(person1Obj)
 
    //   fs.writeFileSync("data10.json" , person1Json)

    
   


