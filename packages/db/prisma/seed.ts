import { faker } from "@faker-js/faker";
import { enhance } from "@zenstackhq/runtime";

import { PrismaClient } from "..";
import type { Prisma } from "..";

const prisma = new PrismaClient();

async function main() {
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

async function createUser(data: Prisma.UserCreateInput) {
  // use enhanced prisma client to handle password hashing
  const db = enhance(prisma);
  const user = await db.user.create({
    data: {
      name: data.name,
      email: data.email,
      role: data.role,
      password: data.password,
    },
  });
  console.log(user);
}
