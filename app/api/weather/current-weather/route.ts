import Error from "next/error";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const lat = 51.5072;
    const lon = 0.1276;
    const key = process.env.OPEN_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;
    try {
        const res = await fetch(url);
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