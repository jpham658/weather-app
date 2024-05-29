import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");

    const key = process.env.OPEN_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;
  
    try {
      const res = await fetch(url, { cache: 'no-store' });
      if (!res.ok) {
        const errorData = await res.json();
        return new NextResponse(JSON.stringify({ error: errorData }), {
          status: res.status,
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }
      const data = await res.json();
      return new NextResponse(JSON.stringify(data), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }