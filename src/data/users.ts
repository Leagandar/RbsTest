import type { User } from "../types";

interface UsersData {
  users: User[];
}

const usersData: UsersData = {
  users: [
    {
      id: 1,
      firstName: "Nicholas",
      lastName: "Sainakov",
      middleName: "Aleksandrovich",
      organizationId: 1,
      email: "mail1@mail.ru",
    },
    {
      id: 2,
      firstName: "Galina",
      lastName: "Mozhaeva",
      middleName: "Vasilievna",
      displayName: "Mozhaeva Galina",
      organizationId: 1,
      email: "mail2@mail.ru",
    },
    {
      id: 3,
      firstName: "Alexander",
      lastName: "Zamiatin",
      middleName: "Vladimirovich",
      organizationId: 1,
      email: "mail3@mail.ru",
      password: "123",
    },
    {
      id: 4,
      firstName: "Eduard",
      lastName: "Galazhinsky",
      middleName: "Vladimirovich",
      organizationId: 1,
      email: "mail4@mail.ru",
    },
    {
      id: 5,
      firstName: "Julia",
      lastName: "Emer",
      middleName: "Antonovna",
      organizationId: 2,
      email: "mail5@mail.ru",
    },
    {
      id: 6,
      firstName: "Victor",
      lastName: "Nikolaev",
      middleName: "Vladimirovich",
      organizationId: 2,
      email: "mail6@mail.ru",
    },
    {
      id: 7,
      firstName: "Artem",
      lastName: "Feshchenko",
      middleName: "Viktorovich",
      organizationId: 2,
      email: "mail7@mail.ru",
    },
    {
      id: 8,
      firstName: "Olga",
      lastName: "Marukhina",
      middleName: "Vladimirovna",
      organizationId: 3,
      email: "mail8@mail.ru",
    },
  ],
};

export default usersData.users;
