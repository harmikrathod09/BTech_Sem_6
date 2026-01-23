import { NextRequest } from "next/server"; 
export async function GET(_req: NextRequest,{ params }: { params: { id: string 
}}) { 
console.log(params) 
return Response.json({name:'arjun',age:123}) 
}