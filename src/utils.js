import faker from "faker";

export const fetchData = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(
        new Array(10).fill().map(() => ({
          title: faker.name.findName(),
          jobTitle: faker.name.jobTitle()
        }))
      );
    }, 600);
  });
