import { supabase } from "@/lib/supabase"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const to = Number(searchParams.get('to')) || 0
    const from = Number(searchParams.get('from')) || 0
    const { data, error } = await supabase
        .from("news")
        .select("*")
        .range(from, to)
    if (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
    return NextResponse.json({ data })
}