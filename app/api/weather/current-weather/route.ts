import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const lat = req.nextUrl.searchParams.get("lat") ? req.nextUrl.searchParams.get("lat") : 51.5072;
    const lon = req.nextUrl.searchParams.get("lon") ? req.nextUrl.searchParams.get("lon") : 0.1276;
    const key = process.env.OPEN_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;
    const res = await fetch(url);
    return NextResponse.json(res);
}