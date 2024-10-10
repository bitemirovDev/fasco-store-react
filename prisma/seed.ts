import { categories, products, brands, sizes } from './constants';
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

  await prisma.tag.createMany({
    data: [
      {
        name: 'deals',
      },
      {
        name: 'new-arrivals',
      },
    ],
  });

  await prisma.sale.createMany({
    data: [
      {
        name: 'Spring Sale',
        percent: 20,
      },
      {
        name: 'Super Sale',
        percent: 40,
      },
      {
        name: 'Black Friday',
        percent: 70,
      },
    ],
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
        stock: product.stock,
        categoryId: product.categoryId,
        tags: {
          connect: product.tags,
        },
        saleId: product.saleId,
        brandId: product.brandId,
        sizes: {
          connect: product.sizes,
        },
      },
    });
  }
}
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Tag" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Sale" RESTART IDENTITY CASCADE`;
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
