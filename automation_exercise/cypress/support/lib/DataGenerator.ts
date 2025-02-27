import { faker } from "@faker-js/faker/locale/es_MX";

export interface UserData {
  fname: string;
  lname: string;
  email: string;
  username: string;
  title: 'male' | 'female';
  password: string;
  birthday: string;
  phoneNumber: string;
}

export interface AddressData {
  company: string;
  address: string;
  address2: string;
  state: string;
  city: string;
  zipCode: string;
}

export interface PaymentData {
  cardNumber: string;
  cvc: string;
  monthExp: string;
  yearExp: string;
  nameCard: string;
}

class DataGenerator {
  static generateUserData(): UserData {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const fname = faker.person.firstName();
    const lname = faker.person.lastName();

    return {
      fname, // Shorthand property initialization
      lname,
      email: faker.internet.email({ firstName: fname, lastName: lname }),
      username: `${faker.internet.username({ firstName: fname, lastName: lname })}${Math.round(Math.random() * 1000)}`,
      title: faker.person.sex() as 'male' | 'female', // Type casting
      password: faker.internet.password(),
      birthday: formatter.format(faker.date.birthdate({ mode: "age", min: 18, max: 120 })),
      phoneNumber: faker.phone.number({ style: "international" }),
    };
  }

  static generateAddress(): AddressData {
    return {
      company: faker.company.name(),
      address: faker.location.streetAddress(),
      address2: faker.location.streetAddress(),
      state: faker.location.state(),
      city: faker.location.city(),
      zipCode: faker.location.zipCode(),
    };
  }

  static generatePaymentData(): PaymentData {
    return {
      cardNumber: faker.finance.creditCardNumber(),
      cvc: faker.finance.creditCardCVV(),
      monthExp: (faker.date.future().getMonth() + 1).toString().padStart(2, '0'),
      yearExp: faker.date.future().getFullYear().toString(),
      nameCard: `${faker.person.firstName()} ${faker.person.lastName()}`,
    };
  }
}

export default DataGenerator;

