import { db } from "@/lib/db";
import { Product } from "@/types/product";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM product");

    const products = rows as Product[];

    return NextResponse.json(products);
  } catch (error) {
    console.error("DB Error:", error);

    return NextResponse.json(
      { message: "Database error" },
      { status: 500 }
    );
  }
}
