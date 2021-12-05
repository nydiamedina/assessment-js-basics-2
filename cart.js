///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const summedPrice = cart.reduce((acc, curr) => {
    return acc + curr.price;
}, 0);

console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    return cartTotal * (1 + tax) - couponValue;
}

console.log(calcFinalPrice(summedPrice, 10, 0.15));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    Properties:
    - id (string) to identify the customer in our database
    - firstName (string) to personalize the messages about their order,
    - lastName (string) to have their full name,
    - email (string) to send them email notifications about their order,
    - phoneNumber (number) to contact them in case email doesn't work,
    - address (string) to deliver the order to them,
    - zipCode (number) to have their full address information
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let customer = {
    id: 'a1b2',
    firstName: 'Nydia',
    lastName: 'Medina',
    email: 'nvmedina29@gmail.com',
    phoneNumber: 87654321,
    address: '123 Main Street, New York, NY',
    zipCode: 13123,
}

console.log(customer);