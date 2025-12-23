"use server"

import { revalidatePath } from "next/cache";
import prisma from "../lib/prisma"
import { redirect } from "next/navigation";


export default async function deleteProduct(id:number) {
  await prisma.product.delete({where:{id}});
  revalidatePath("/product");
  redirect("/product");
}
