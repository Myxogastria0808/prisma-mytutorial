import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//* Create
const mySingleCreate = async () => {
  //prisma.model名 で書く (正し、モデル名は小文字で書く)
  const user = await prisma.user.create({
    data: {
      name: 'A',
    },
  });
  console.log(user);
};

//一つだけレコード増やす
mySingleCreate()
  .catch((e) => {
    throw e;
  })
  .finally(() => {
    prisma.$disconnect();
  });

const myMultipleCreate = async () => {
  const users = await prisma.user.createMany({
    data: [
      {
        name: 'Hello',
      },
      {
        name: 'World',
      },
    ],
  });
  console.log(users);
};

//複数レコード増やす
myMultipleCreate()
  .catch((e) => {
    throw e;
  })
  .finally(() => {
    prisma.$disconnect();
  });

//* Read
const myFind = async () => {
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
};

myFind()
  .catch((e) => {
    throw e;
  })
  .finally(() => {
    prisma.$disconnect();
  });

//* Update
const myUpdate = async () => {
  const user = await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      name: 'Unko',
    },
  });
  console.log(user);
};

myUpdate()
  .catch((e) => {
    throw e;
  })
  .finally(() => {
    prisma.$disconnect();
  });

//* Delete
const myDelete = async () => {
  const user = await prisma.user.delete({
    where: {
      id: 1,
    },
  });
  console.log(user);
};

myDelete()
  .catch((e) => {
    throw e;
  })
  .finally(() => {
    prisma.$disconnect();
  });
