import React from "react";

interface HumidityCardProps {
    humidity: number
}

const HumidityCard: React.FC<HumidityCardProps> = ({
    humidity
}) => {
    return (
        <div className="flex flex-col items-center justify-center py-6 px-4 border border-sm rounded h-full bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30">
            <p>Humidity</p>
            <p>{humidity}%</p>
        </div>
    );
}

export default HumidityCard;