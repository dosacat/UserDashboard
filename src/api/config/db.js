// imports package to generate sample data.
import { faker } from '@faker-js/faker';

// Creates and array of JSON User data.
function UserDB() {
    // Array which stores user data
    let users = [];
    
    for (let i = 1; i < 50; i++) {
        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();
        users.push({
            id : i,
            firstName : firstName,
            lastName : lastName,
            email : faker.helpers.unique(faker.internet.email, [firstName,lastName,]),
            avatar: faker.image.avatar(),
        });
    };

    return users;
}


export default UserDB;