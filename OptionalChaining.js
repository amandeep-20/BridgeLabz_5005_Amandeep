const user = {
    name: "Aman",
    address: {
        city: "asr"
    },
    greet() {
        return "Hello!";
    }
};
console.log(user.address?.city);
console.log(user.address?.zipcode);
console.log(user.profile?.age);
console.log(user.greet?.());
console.log(user.sayBye?.());

const user1 = {
    profile: {
        details: {
            age: 25
        }
    }
};
console.log(user1?.profile?.details?.age);
console.log(user1?.account?.balance);

function Info(user) {
    return user?.details?.info || "No details available";
}
console.log(Info({ details: { info: "User data" } }));
console.log(Info(null));