class Machine {
    print() {}
    scan() {}
    fax() {}
}

class Printer extends Machine {
    print() {
        console.log("Printing");
    }

    scan() {
        throw new Error("Not supported");
    }

    fax() {
        throw new Error("Not supported");
    }
}

// right way I- interface segregation principle
class Printer {
    print() {
        console.log("Printing");
    }
}

class Scanner {
    scan() {
        console.log("Scanning");
    }
}

class FaxMachine {
    fax() {
        console.log("Faxing");
    }
}

const printer = new Printer();
printer.print();

const scanner = new Scanner();
scanner.scan();
