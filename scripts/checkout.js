import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

//this creates a separate thread of code but this separate thread of code doesn't actually have a next step.
//Promise.all lets us run multiple promises at the same time and waits for all of them to finish

//async = makes a function return a promise
async function loadPage() {
    //console.log('load page');

    await loadProductsFetch();

    const value = await new Promise((resolve) => {
        loadCart(() => {
            resolve('value3');
        });
    });

    console.log(value);
    renderOrderSummary();
    renderPaymentSummary();


    //return 'value2'
}
loadPage();

/* 
Promise.all([ //Array of promises
    new Promise((resolve) => { //runs the function immediately
        //console.log('start promise');
        loadProducts(() => {
            //console.log('finish loading')
            //whatever we give to resolve will be saved in the parameter value (.then((value));)
            resolve('value1');
        });
    })
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })

]).then((values) => {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
}); */
 
/*
new Promise((resolve) => { //runs the function immediately
    //console.log('start promise');
    loadProducts(() => {
        //console.log('finish loading')
        //whatever we give to resolve will be saved in the parameter value (.then((value));)
        resolve('value1');
    });
}).then((value) => { //this is the next step
    //console.log('next step');
    console.log(value);
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });
}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
}); */

//this is running at the same time as the code above
//This allows JavaScript to do multiple things at the same time
/*
loadProducts(() => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    })
}); */

/* If we have a lot of callbacks, out code will become more and more nested, multiple callbacks cause a lot of nesting making it harder to work with*/