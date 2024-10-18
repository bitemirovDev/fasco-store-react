import { categories, products, brands, sizes, collections, sales } from './constants';
import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt';

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User 1',
        email: 'user1@example.com',
        password: hashSync('11111', 10),
      },
      {
        fullName: 'User 2',
        email: 'user2@example.com',
        password: hashSync('11111', 10),
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.collection.createMany({
    data: collections,
  });

  await prisma.saleName.createMany({
    data: sales,
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
      },
      {
        userId: 2,
        totalAmount: 0,
      },
    ],
  });

  await prisma.brand.createMany({
    data: brands,
  });

  await prisma.size.createMany({
    data: sizes,
  });

  for (const product of products) {
    await prisma.product.create({
      data: {
        img: product.img,
        name: product.name,
        price: product.price,
        rating: product.rating,
        stock: product.sizes.reduce((a, b) => a + b.quantity, 0),
        categories: {
          connect: product.categories,
        },
        collections: {
          connect: product.collections,
        },
        saleNameId: product.saleNameId,
        brandId: product.brandId,
        sizes: {
          create: product.sizes.map(({ sizeId, quantity }) => ({
            sizeId, // Указываем размер через sizeId
            quantity, // Количество для этого размера
          })),
        },
      },
    });
  }
}
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Collection" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "SaleName" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Brand" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Size" RESTART IDENTITY CASCADE`;
}
async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.log(e);
  }
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
