import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const user = req.cookies.get('authjs.session-token')?.value || null;

  try {
    return NextResponse.json(user);
  } catch (error) {
    console.log('[CART_GET]', error);
    return NextResponse.json('Не удалось получить корзину', { status: 500 });
  }
}
