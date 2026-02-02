import {students} from '@/app/data/student'
import { NextRequest } from 'next/server'
export async function GET() {
// return "Hello world"
return Response.json(students)
}
export async function POST(request: NextRequest) {
// return "Hello world"
students.push(await request.json());
return Response.json({success:true})
}