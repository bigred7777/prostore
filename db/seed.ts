import sampleData from "./sample-data";
import prisma from "../lib/prisma";

async function main() {
  await prisma.product.deleteMany();
  await prisma.product.createMany({ data: sampleData.products });

  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

  await prisma.user.createMany({ data: sampleData.users });

  console.log("Database seeding successful");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
