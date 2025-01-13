function Error() {
    const error = {
        name: "Error",
        message: "wrong!",
    };
    return error;
}

try {
    const error = Error();
    throw error;
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}