const mongoose = require('mongoose');
const Shopping = mongoose.model('Shopping');

exports.getHomePage = (req, res) => {

    Shopping.find((error, Shoppings) => {
        if (!error) {
            res.render('index.ejs', { ShoppingItems: Shoppings });
        }
        else {
            console.log('Failed to retrieve data.');
        }
    });

};

exports.postNewShopping = (req, res) => {
    let fielditem1 = req.body.newitem1;
    let fielditem2 = req.body.newitem2;

    newShopping.first_item1 = fielditem1;
    newShopping.last_item2 = fielditem2;

    newShopping.save((error, response) => {
        if (!error) {
            res.redirect('/');
        }
        else {
            console.log("Failed to save data.");
        }
    })
}


exports.deleteShopping = (req, res) => {
    const shoppingItemId = req.body.shoppingDelete;

    Shopping.findByIdAndRemove(shoppingItemId, (error) => {
        if(!error){
            res.redirect('/');
        } else {
            console.log("Failed to remove an item.");
        }
    })
};