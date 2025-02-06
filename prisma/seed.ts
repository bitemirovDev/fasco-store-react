import {
  categories,
  products,
  brands,
  sizes,
  collections,
  sales,
  customersReviews,
} from "./constants";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "Erik Menendez",
        email: "erikm@gmail.com",
        password: hashSync("11111", 10),
        avatar: "/customer-2.jpg",
      },
    ],
  });

  await prisma.customerReview.createMany({
    data: customersReviews,
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.collection.createMany({
    data: collections,
  });

  await prisma.discount.createMany({
    data: sales,
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        token: "11111",
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
    const createdProduct = await prisma.product.create({
      data: {
        img: {
          create: {
            main: product.img.main,
            second: product.img.second,
            third: product.img.third,
            fourth: product.img.fourth,
          },
        },
        name: product.name,
        price: product.price,
        rating: product.rating,
        stock:
          product.availableSizes.length > 0
            ? product.availableSizes.reduce((a, b) => a + b.stock, 0)
            : product.stock,
        categories: {
          connect: product.categories,
        },
        collections: {
          connect: product.collections,
        },
        discountId: product?.discountId || null,
        brandId: product.brandId,
      },
    });

    if (product.availableSizes.length > 0) {
      for (const size of product.availableSizes) {
        await prisma.availableSize.create({
          data: {
            size: {
              connect: { name: size.name },
            },
            stock: size.stock,
            product: {
              connect: { id: createdProduct.id },
            },
          },
        });
      }
    }
  }
}
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Collection" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Size" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Discount" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Brand" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "AvailableSize" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductImage" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CustomerReview" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Order" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Review" RESTART IDENTITY CASCADE`;
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
