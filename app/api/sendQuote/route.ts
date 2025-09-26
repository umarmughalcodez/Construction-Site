import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your gmail
        pass: process.env.GMAIL_PASS, // app password
      },
    });

    // send mail
    await transporter.sendMail({
      from: `"Construction Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CLIENT_EMAIL || process.env.GMAIL_USER, // where to send
      subject: `New Quote Request: ${body.subject}`,
      text: `
        Name: ${body.f_name} ${body.l_name}
        Email: ${body.email}
        Phone: ${body.phone}
        Postcode: ${body.postcode}
        Subject: ${body.subject}
        Message: ${body.message}
      `,
    });

    return NextResponse.json({ success: true, body });
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
