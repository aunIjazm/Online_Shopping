"use Client";
import Image from "next/image";
import Link from "next/link";

const VerticalCard = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
      <div className="mb-4">
        <Image
          src={props.ImgUrl}
          alt={props.cardImagAlt}
          className="w-full h-40 object-cover rounded-md"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{props.cardTitle}</h3>
      <p className="text-gray-600 mt-2">{props.cardDescription}</p>
      <Link href={'/about'} className="inline-block bg-teal-600 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:bg-teal-700 transition-colors">{props.cardLinkTtl}</Link>
    </div>
  );
};

export default VerticalCard;
