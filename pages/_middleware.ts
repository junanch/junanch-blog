import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const url = request.nextUrl
  if (url.pathname === '/') {
    url.pathname = '/blog'
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}
