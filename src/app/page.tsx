import Image from "next/image"

const path = "C:/Users/Asus/Downloads/Swapnil/project/upload_app/public/images/airbnb_house2.jpg";
const startingPathNumber = path.match("public")?.index;
const endPathNumber = path.length;
const actualPath = path.slice(startingPathNumber + 6,endPathNumber);



export default function Home(){

    return (
        <div>
            <Image
                src={actualPath}
                priority
                alt="Image"
                fill
                objectFit="cover"
            />
        </div>
    )
}