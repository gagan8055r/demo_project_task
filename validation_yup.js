const auth=require('./validate')

const userData = {
    name: 'Gagan',
    email: 'gagan@example.com',
    password: 'gagan@344'
};

const startTime = performance.now();
auth.validate(userData)
    .then(validData => {
        const endTime = performance.now(); // End time
        const duration = endTime - startTime;
        console.log('Yup validation. Time taken:', duration, 'milliseconds');
        console.log('Validated data:', validData);
    })
    .catch(error => {
        const endTime = performance.now(); // End time
        const duration = endTime - startTime;
        console.error('Validation failed. Time taken:', duration, 'milliseconds');
        console.error('Validation errors:', error.errors);
    });