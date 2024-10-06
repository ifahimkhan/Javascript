// let data = JSON.parse("Invalid json")

try {
    let data = JSON.parse('Invalid JSON String');
} catch (error) {
    console.log('Error caught:', error.message);
}


process.on('uncaughtException', (err) => {
    console.log('Caught exception:', err.message);

});


data = JSON.parse('Invalid json')



