import { faker } from "@faker-js/faker";

export const generateMessage = () => faker.lorem.words({ min: 1, max: 3 });

export const generateUsername = () => faker.internet.userName();

export const generateColor = () =>
  faker.internet.color({ redBase: 100, greenBase: 100, blueBase: 100 });
