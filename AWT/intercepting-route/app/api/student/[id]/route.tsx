import { NextRequest } from "next/server";
import { students } from "@/app/data/student";
export async function GET(_req: NextRequest, { params }: {
    params: {
        id: number
    }
}) {
    // return "Hello world"
    const { id } = await params;
    return Response.json(students[id])
}
export async function DELETE(_req: NextRequest, { params }: {
    params: {
        id:
        number
    }
}) {
    // return "Hello world"
    const { id } = await params;
    students.splice(id, 1);
    return Response.json({ success: true })
}

export async function PATCH(_req: NextRequest,{ params }: { params: { id:
number }}) {
// return "Hello world"
const {id} = await params;
students[id] = await _req.json();
return Response.json({success:true})
}
