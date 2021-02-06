const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true });

const fruitsSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "please enter name of the fruit!"]
    },
    rating: {
        type: Number,
        mim: 0,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitsSchema);

const fruit = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "Pritty solid as a fruit."
});

const pineapple = new Fruit ({
    name: "Pineapple",
    rating: 7,
    review: "pineapple solid as a fruit."
});

pineapple.save();


const kiwi = new Fruit ({
        name: "kiwi",
        rating: 5,
        review: "not solid as a fruit."
    });
//     const banana = new Fruit ({
//             name: "banana",
//     rating: 8,
//     review: "gooof solid as a fruit."
// });
// const orange = new Fruit ({
//         name: "orange",
//         rating: 6,
//         review: "okay solid as a fruit."
//     });
    
//     Fruit.insertMany([kiwi, banana, orange], function(err) {
//     if(err){
//             console.log(err);
//         }else{
//                 console.log('succeful');
//             }
//         });

// Fruit.updateOne({ _id: "5ff70b023729d457d870db5f" }, {name: "Peach"}, (err) => {
//     if(err){
//         console.log(err);
//     }else {
//         console.log("sucesufully updated the documnent");
//     }
// });

// Fruit.deleteOne({ _id: "5ff6e38dd773154458380608" }, (err) => {
//     if(err){
//         console.log(err);
//     }else {
//         console.log("sucesufully deleted the documnent");
//     }
// });
        
Fruit.find( (err, fruits) => {
    if(err) {
        console.log(err);
    }else{
        mongoose.connection.close();
        fruits.forEach(fruit => {
            console.log(fruit.name);
        });
    }
});


const peopleSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favourateFruit: fruitsSchema
});

const People = mongoose.model("People", peopleSchema);

const people = new People ({
    name: 'ammy',
    age: 12, 
    favourateFruit: pineapple
});

People.updateOne({_id: "5ff70df151ee294094014099"}, { favourateFruit: kiwi }, (err) => {
    if(err){
        console.log(err);
    }else {
        console.log("sucefully added fruit");
    }
} );

// People.deleteMany({age: 21}, (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Deleted many");
//     }
// });

// people.save();   