import { db } from "@/lib/db";
import { Product } from "@/types/product";
import { NextResponse } from "next/server";

interface Params {
  params: Promise<{ id: string }>;
}

export async function GET(req: Request, { params }: Params) {
  const { id } = await params;
  const productId = parseInt(id, 10);

  if (isNaN(productId)) {
    return NextResponse.json({ message: "Invalid product ID" }, { status: 400 });
  }

  try {
    const [rows] = await db.query(
      "SELECT * FROM product WHERE id = ?",
      [productId]
    );

    if (!Array.isArray(rows) || rows.length === 0) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    const product = rows[0] as Product;
    return NextResponse.json(product);
  } catch (error) {
    console.error("DB Error:", error);
    return NextResponse.json({ message: "DB Error" }, { status: 500 });
  }
}
