import { faker } from "@faker-js/faker/locale/es_MX";

class DataGenerator {
  static generateUserData() {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    
    return {
      fname: faker.person.firstName(),
      lname: faker.person.lastName(),
      email: faker.internet.email({ firstName: this.fname, lastName: this.lname }),
      username: `${faker.internet.username({
        firstName: this.fname,
        lastName: this.lname,
      })}${Math.round(Math.random() * 1000)}`,
      title: faker.person.sex(), // male or female
      password: faker.internet.password(),
      birthday: `${formatter.format(
        faker.date.birthdate({ mode: "age", min: 18, max: 120 })
      )}`,
      phoneNumber: faker.phone.number({ style: "international" }),
    };
  }

  static generateAddress() {
    return {
      company: faker.company.name(),
      address: faker.location.streetAddress(),
      address2: faker.location.streetAddress(),
      state: faker.location.state(),
      city: faker.location.city(),
      zipCode: faker.location.zipCode(),
    };
  }
}

module.exports = DataGenerator;
