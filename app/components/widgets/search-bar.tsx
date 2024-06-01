'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
 

export default function Search({ placeholder, isDay }: { 
    placeholder: string;
    isDay: boolean;
  }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [location, setLocation] = useState<string>("");

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setLocation(e.target.value);
    }

    function handleSubmit(event?: FormEvent<HTMLFormElement>) {
        if (event) {
            event.preventDefault();
        }

        const params = new URLSearchParams(searchParams);
        if(!location) {
            // Replace with something else...
            console.log("You haven't entered a location...");
            return;
        }
        
        const [ city, country ] = location.split(", ");

        if(city) {
            params.set("city", city);
            if(country) {
                params.set("country", country);
            } else {
                params.delete("country");
            }
        } else {
            params.delete("city");
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="relative flex flex-1 flex-shrink-0 ">
        <form className="w-full flex gap-3" onSubmit={handleSubmit}>
            <input
                className={`peer block w-full rounded bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 py-3 pl-3 text-lg outline-2 placeholder:text-blue-900 focus:outline-blue-200/[.50]`}
                placeholder={placeholder}
                value={location}
                onChange={handleChange}
                onKeyDown={(e) => {
                    if (e.key === "Enter") handleSubmit();
                }}
            />
            <button type="submit" className="bg-slate-200 px-3 text-blue-900 text-lg rounded hover:bg-blue-100">Submit</button>
        </form>
        </div>
    );
}