import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { email, subject, message } = await request.json();
    console.log(JSON.stringify({ email, subject, message }));

    return NextResponse.json({
      status: 'success',
      message: 'Message received',
    });
  } catch (error) {
    console.error('Error: ', error);
    return NextResponse.json({
      status: 'error',
      message: 'Failed to receive message',
    });
  }
}