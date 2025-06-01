// import { prisma } from '@/prisma/prisma-client';
// import { NextResponse, NextRequest } from 'next/server';

// export async function PATCH(req: NextRequest, { params }) {
//   const token = req.cookies.get('cartToken')?.value;
//   const { id } = await params;
//   const data = (await req.json()) as { quantity: number };

//   if (!id) {
//     return NextResponse.json({ message: 'Cart item ID is required' }, { status: 400 });
//   }

//   try {
//     const cartItem = await prisma.cartItem.findFirst({
//       where: {
//         id: Number(id),
//       },
//     });

//     if (!cartItem) {
//       return NextResponse.json({
//         message: `Cart item with id: ${id} not found`,
//       });
//     }

//     await prisma.cartItem.update({
//       where: {
//         id: Number(id),
//       },
//       data: {
//         quantity: data.quantity,
//       },
//     });

//     const updatedCart = await updateCartTotalAmount(token);

//     return NextResponse.json(updatedCart);
//   } catch (error) {
//     console.log(error);
//     if (error instanceof Error) {
//       console.log('Error: ', error.stack);
//     }
//     return NextResponse.json({ message: 'An error occurred while deleting the cart item' }, { status: 500 });
//   }
// }

// export async function DELETE(req: NextRequest, { params }) {
//   const token = req.cookies.get('cartToken')?.value;
//   const { id } = await params;

//   if (!id) {
//     return NextResponse.json({ message: 'Cart item ID is required' }, { status: 400 });
//   }

//   try {
//     const cartItem = await prisma.cartItem.findFirst({
//       where: {
//         id: Number(id),
//       },
//     });

//     if (!cartItem) {
//       return NextResponse.json({
//         message: `Cart item with id: ${id} not found`,
//       });
//     }

//     await prisma.cartItem.delete({
//       where: {
//         id: Number(id),
//       },
//     });

//     const updatedCart = await updateCartTotalAmount(token);

//     return NextResponse.json(updatedCart);
//   } catch (error) {
//     console.log(error);
//     if (error instanceof Error) {
//       console.log('Error: ', error.stack);
//     }
//     return NextResponse.json({ message: 'An error occurred while deleting the cart item' }, { status: 500 });
//   }
// }
