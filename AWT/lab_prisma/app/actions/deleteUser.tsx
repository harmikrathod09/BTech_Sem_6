"use server"

import React from 'react'
import prisma from '../lib/prisma'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function deleteUser(id: number) {
    await prisma.users.delete({ where: { UserID: id } });
    revalidatePath("/user");
    redirect("/user");

}
