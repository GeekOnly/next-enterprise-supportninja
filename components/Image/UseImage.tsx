import Image from 'next/image';

interface ImageOptions {
  imageUrl: string;
}

const UseImage : React.FC<ImageOptions> = ({imageUrl }) => {
  return (
    <div>
      <Image
        src={imageUrl}
        alt=""
        loading="lazy"
        width={1792} // Specify the width
        height={128} // Specify the height
        className="bottom-squiggle w-full" // Add your custom class for styling
      />
    </div>
  );
};

export default UseImage;