"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const photos = [
  { src: "/images/01.jpg", width: 1, height: 1 },
  { src: "/images/02.jpg", width: 3, height: 2 },
  { src: "/images/03.png", width: 3, height: 2 },
  { src: "/images/04.jpg", width: 2, height: 3 },
  { src: "/images/05.jpg", width: 2, height: 3 },
  { src: "/images/13.jpg", width: 3, height: 2 },
  { src: "/images/06.jpg", width: 2, height: 3 },
  { src: "/images/07.jpg", width: 1, height: 1 },
  { src: "/images/08.jpg", width: 2, height: 3 },
  { src: "/images/09.jpg", width: 1, height: 1 },
  { src: "/images/16.jpg", width: 3, height: 2 },
  { src: "/images/10.jpg", width: 2, height: 3 },
  { src: "/images/14.jpg", width: 3, height: 2 },
  { src: "/images/11.jpg", width: 2, height: 3 },
  { src: "/images/12.jpg", width: 3, height: 2 },
  { src: "/images/15.jpg", width: 3, height: 2 },
  { src: "/images/17.jpg", width: 1, height: 1 },
];

export function JustifiedGallery() {
  const [rowHeight, setRowHeight] = useState(70);

  useEffect(() => {
    const updateRowHeight = () => {
      if (window.innerWidth >= 1280) {
        setRowHeight(270);
      } else if (window.innerWidth >= 1024) {
        setRowHeight(150);
      } else if (window.innerWidth >= 768) {
        setRowHeight(130);
      } else {
        setRowHeight(70);
      }
    };

    updateRowHeight();
    window.addEventListener("resize", updateRowHeight);
    return () => {
      window.removeEventListener("resize", updateRowHeight);
    };
  }, []);

  return (
    <div className="xl:-mx-40">
      <div className="flex flex-wrap gap-2 justify-between md">
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
              className={`object-cover rounded-xl shadow-soft item${index}`}
              layout="intrinsic"
              loading="lazy"
            />
          );
        })}
      </div>
    </div>
  );
}
