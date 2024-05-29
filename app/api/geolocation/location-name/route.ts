import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");
    
    if(!lat || !lon) {
        return new NextResponse("Invalid coordinates...", {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
            },
        })
    }
    
    try {
        const key = process.env.OPEN_WEATHER_API_KEY;
        const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${key}`
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
          if(Array.isArray(data) && data.length === 0) {
            return new NextResponse("City not found...", {
              status: 404,
              headers: {
                'Content-Type': 'application/json',
              },
            });
          }
          return new NextResponse(JSON.stringify(data), {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            },
          });
    } catch(error) {
        console.error('Error fetching data:', error);
    }
}