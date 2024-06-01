import React from "react";

interface CloudCoverCardProps {
    cloudCoverage: number;
}

const CloudCoverCard: React.FC<CloudCoverCardProps> = ({
    cloudCoverage
}) => {
    return (
        <div className="flex flex-col items-center justify-center py-6 px-4 border border-sm rounded h-full bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30">
            <p>Cloud coverage</p>
            <p>{cloudCoverage}%</p>
        </div>
    );
}

export default CloudCoverCard;