"use server" 
 
import { revalidatePath } from "next/cache"; 
import { redirect } from "next/navigation";  
import prisma from "../lib/prisma";
 
async function EditUserAction(formData: FormData) { 
  const id = Number(formData.get("UserID")); 
  const userName = formData.get("UserName") as string; 
  const password = formData.get("Password") as string; 
 
  await prisma.users.update({ 
    where: { 
      UserID: id, 
    }, 
    data: { 
      UserName: userName, 
      Password: password, 
    }, 
  }); 
 
  revalidatePath("/user"); 
  redirect("/user"); 
} 
 
export {EditUserAction}; 