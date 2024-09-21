// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Añadir el header personalizado con la ruta
  return NextResponse.next({
    headers: {
      'x-pathname': request.nextUrl.pathname,
    },
  });
}

export const config = {
  matcher: [
    // Rutas que quieres que pasen por el middleware
    '/mamor',
  ],
};
