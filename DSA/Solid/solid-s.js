class User{
    constructor(user) {
        this.user = user;
    }

    save() {
        console.log("Saving database");
    }

    send() {
        console.log("Sending email");
    }
}


// right way S- single responsibility principle
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class UserRepository {
    save(user) {
        console.log(user.name);
    }
}

class EmailService {
    send(user) {
        console.log(user.email);
    }
}

// Use Case
const user = new User("aman", "aman54@gmail.com");
const repo = new UserRepository();
const emailService = new EmailService();
repo.save(user);
emailService.send(user);