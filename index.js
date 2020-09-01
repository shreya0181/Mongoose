const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

 const URL = "mongodb://localhost:27017/conFusion";
 const connect = mongoose.connect(URL);

 connect.then((db)=>{
     console.log("COnnected Corredctly");

      var newDish = Dishes({
          name: "Shabana",
          description: "Person"
      })


      newDish.save().then((dish)=>{
           
        console.log(dish);

        return Dishes.find({}).exec();
          

      }).then((dishes)=>{
          console.log(dishes);
          return Dishes.remove({});
      }).then(()=>{
          return mongoose.connection.close();
      }).cath((err)=>{
          console.log(err);
      }
      );

 });
