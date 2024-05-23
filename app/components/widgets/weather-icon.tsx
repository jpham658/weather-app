import Image from "next/image";

interface WeatherIconProps {
    weatherName: string;
    iconCode: string;
    size: number;
}

function getImageName(iconCode: string) {
    /**
     * Get image name for icon.
     * @param iconCode The code for the icon
     * @returns the image name for the icon
     */
    const iconNumber = iconCode.slice(0, 2);
    if(iconNumber === "03" || iconNumber === "04"){
        return "0x" + iconCode.slice(2);
    }
    return iconCode;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({
    weatherName, 
    iconCode,
    size
    }) => {
    const iconName = getImageName(iconCode);
    return (
        <Image 
            src={`/weather/${iconName}.svg`}
            alt={`${weatherName} icon`}
            width={size}
            height={size}
        />
    );}

export default WeatherIcon;