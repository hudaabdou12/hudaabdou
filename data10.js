  
  const fs = require("fs")

  const addperson = ( id , fname , lname , city , age ) => {
      const allData = loadinfo()

      const duplicatedData = allData.filter((obj) =>{
       return obj,id === id
      })

      if (duplicatedData.length == 0 ){

      allData.push({
        id : id,
        fname : fname,
        lname : lname,
        city : city,
        age : age,
      })
      savealldata(allData)
     } else{
      console.log("ERORR DUPLICATED DATA")
     }
    }


  ///////////////////////////////////////////

    const loadinfo = () => {
        try {const dataJson = fs.readFileSync( "data10.json").toString()
          return JSON.parse(dataJson)
        }
        catch {
          return[]
        }
    }

    //////////////////////////////////////////////////////////

    const savealldata = (allData) => {
        const saveallDataJson = JSON.stringify(allData)
        fs.writeFileSync("data10.json" , saveallDataJson)
    }

    /////////////////////////////////////////////////////////////////////
    
    const deleteData = (id)  => {
      const allData = loadinfo()

      const dataTokeep = allData.filter((obj) => {
        return obj.id !== id
      } )

      console.log(dataTokeep)
      console.log( "you have successfully deleted an item")

       savealldata(dataTokeep)

    }

    ////////////////////////////////////////////////
     
    const readData = (id) => {
     const allData = loadinfo()
      const itemNeeded = allData.find(obj => {
        return obj.id == id
      })
      // console.log(itemNeeded)
      if (itemNeeded) {
        console.log(itemNeeded)
    }else {
      console.log(" ID NEEDED NOT FOUND ")
    }
  }

  /////////////////////////////////////
   const listData = () => {

    const allData = loadinfo()
    allData.forEach((obj) => {
   console.log(obj.fname , obj.city)
    })
      
    }
  

    module.exports = {
      addperson,
      deleteData,
      readData,
      listData
    }