"use server"

import { revalidatePath } from "next/cache";
import prisma from "../lib/prisma";
import { redirect } from "next/navigation";

export default async function submitProduct(formData: FormData) {
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const price = Number(formData.get('price'));
    const quantity = Number(formData.get('quantity'));

    const data = { name, description, price, quantity };

    console.log(data);
    
    await prisma.product.create({ data });
    revalidatePath("/product");
    redirect("/product");
}