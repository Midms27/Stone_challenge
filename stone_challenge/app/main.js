//variables for export JSON files for reading on application
const products = require('../data/products.json');
const emails = require('../data/email.json');


//main function of the application 
const main = (lista, pessoas) => {
    
    //verify if has something on the list
    if(lista!=null){
        //this function get and sum the prices of the products
        prices = lista.map(pro => {return pro.price * 100});
        quant = lista.map(pro => {return pro.quantity})
        var total = 0;
        for(var i=0; i < prices.length; i++){

            total = prices[i] * quant[i] + total 

        }
        
        //this const have the average of the prices that will paid
        const media = total / pessoas.length

        //return the final result whit the email and the amount that will paid
        return pessoas.forEach(email => {
            console.log(`${email}: ${media}`)
        });
    } else {
        console.log('a lista está vazia')
    }
}


//call the function
main(products,emails)
