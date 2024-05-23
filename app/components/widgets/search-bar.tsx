'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
 

export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(location: string) {
        const params = new URLSearchParams(searchParams);
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
        <div className="relative flex flex-1 flex-shrink-0">
        <label htmlFor="search" className="sr-only">
            Search
        </label>

        <input
            className="peer block w-full rounded-md border border-gray-200 py-3 pl-3 outline-2 placeholder:text-gray-500 focus:outline-blue-200"
            placeholder={placeholder}
            onChange={(e) => {
                handleSearch(e.target.value);
            }}
            defaultValue="london"
        />
        </div>
    );
}