class Payment1{
    process(method) {
        if (method === "credit") {
            console.log("card payment");
        } else if (method === "paypal") {
            console.log("PayPal payment...");
        }
    }
}

//right way O-open for extension/closed for modification
class Payment{
    process(paymentMethod) {
        paymentMethod.process();
    }
}

class CreditCard{
    process() {
        console.log("card payment");
    }
}

class PayPal{
    process() {
        console.log("PayPal payment");
    }
}

// Use Case
const processor = new Payment();
processor.process(new CreditCard());
processor.process(new PayPal());