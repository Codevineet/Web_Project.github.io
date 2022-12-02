let mongoose = require("mongoose")

let URI = "mongodb+srv://Easyhuntwp:Vineetlovesunnati69@vss03.dr6igaw.mongodb.net/?retryWrites=true&w=majority";

let connectdb = async()=>{
    try{
        let con = await mongoose.connect(URI,
            {
                useUnifiedTopology : true,
                useNewUrlParser : true
            }
            )
            console.log("Database is connected with the given URI")
    }
    catch(err){
            console.log(err)
    }
}

module.exports = connectdb