import { faker } from "@faker-js/faker";

import { PrismaClient } from "..";
import type { User } from "..";

const prisma = new PrismaClient();

async function main() {
  // await createStudents();
  console.log("Seeding...");
  await createUser({
    name: faker.person.fullName(),
    email: `test-${faker.number.int({ min: 100, max: 999 })}@email.fr`,
    password: "123456",
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });

async function createUser(data: Partial<User>) {
  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      role: data.role,
      password: data.password,
    },
  });
  console.log(user);
}
