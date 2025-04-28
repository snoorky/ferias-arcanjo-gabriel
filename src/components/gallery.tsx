"use client";

import Image from "next/image";

const photos = [
  { src: "/images/01.jpg", width: 1, height: 1 },
  { src: "/images/02.jpg", width: 3, height: 2 },
  { src: "/images/03.jpg", width: 3, height: 2 },
  { src: "/images/04.jpg", width: 1, height: 1 },
  { src: "/images/05.jpg", width: 1, height: 1 },
  { src: "/images/06.jpg", width: 3, height: 2 },
  { src: "/images/07.jpg", width: 3, height: 2 },
  { src: "/images/08.jpg", width: 3, height: 2 },
  { src: "/images/09.jpg", width: 3, height: 2 },
  { src: "/images/10.jpg", width: 3, height: 2 },
  { src: "/images/11.jpg", width: 3, height: 2 },
  { src: "/images/12.jpg", width: 3, height: 2 },
  { src: "/images/13.jpg", width: 3, height: 2 },
];

export function JustifiedGallery() {
  const rowHeight = 220;

  return (
    <div className="flex flex-col px-4">
      <div className="flex flex-wrap gap-4 justify-center">
        {photos.map((photo, index) => {
          const ratio = photo.width / photo.height;
          const width = rowHeight * ratio;

          return (
            <Image
              key={index}
              src={photo.src}
              width={width}
              height={rowHeight}
              alt={`Image ${index}`}
              className="object-cover rounded-xl shadow-soft"
              layout="intrinsic"
              loading="lazy"
            />
          );
        })}
      </div>
    </div>
  );
}
