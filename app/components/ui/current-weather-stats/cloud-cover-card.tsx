import React from "react";

interface CloudCoverCardProps {
    cloudCoverage: number;
}

const CloudCoverCard: React.FC<CloudCoverCardProps> = ({
    cloudCoverage
}) => {
    return (
        <div className="flex flex-col items-center justify-center py-6 px-4 h-40 shadow-xl border rounded-lg">
            <p>Cloud coverage</p>
            <p>{cloudCoverage}%</p>
        </div>
    );
}

export default CloudCoverCard;