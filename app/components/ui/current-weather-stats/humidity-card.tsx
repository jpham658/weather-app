import React from "react";

interface HumidityCardProps {
    humidity: number
}

const HumidityCard: React.FC<HumidityCardProps> = ({
    humidity
}) => {
    return (
        <div className="flex flex-col items-center justify-center py-6 px-4 bg-white h-40 shadow-xl border rounded-lg">
            <p>Humidity</p>
            <p>{humidity}%</p>
        </div>
    );
}

export default HumidityCard;