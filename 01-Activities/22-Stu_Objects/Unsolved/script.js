//WRITE YOUR CODE BELOW
let customerOrder = {
    name: 'Ice Honey Latte',
    sugars: 2,
    customerName: 'David Blaine',
    isReady: false,
}

console.log(customerOrder)

if (customerOrder.isReady === true) {
    console.log(`Your ${customerOrder.name} is ready`)
} else {
    console.log(`Your ${customerOrder.name} is NOT ready`)
}