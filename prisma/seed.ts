import { categories, products, brands, collections, sales, customersReviews } from './constants';
import { prisma } from './prisma-client';

async function up() {
  await prisma.customerReview.createMany({
    data: customersReviews,
  });

  await prisma.productCategory.createMany({
    data: categories,
  });

  await prisma.productCollection.createMany({
    data: collections,
  });

  await prisma.productDiscount.createMany({
    data: sales,
  });

  await prisma.productBrand.createMany({
    data: brands,
  });

  for (const product of products) {
    const createdProduct = await prisma.product.create({
      data: {
        img: product.img,
        name: product.name,
        price: product.price,
        rating: product.rating,
        stock: product.sizes.length > 0 && product.sizes.reduce((a, b) => a + b.quantity, 0),
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

    for (const size of product.sizes) {
      await prisma.productSize.create({
        data: {
          name: size.name,
          quantity: size.quantity,
          product: {
            connect: { id: createdProduct.id },
          },
        },
      });
    }
  }
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "ProductCategory" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductCollection" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductSize" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductDiscount" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductBrand" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CustomerReview" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductReview" RESTART IDENTITY CASCADE`;
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
