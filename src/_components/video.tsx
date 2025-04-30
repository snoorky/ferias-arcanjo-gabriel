"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export function Video() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <ReactPlayer
      url="https://video.wixstatic.com/video/11062b_ab90c76e981644f1a5cb91f5aaa6334a/480p/mp4/file.mp4"
      controls
      width="100%"
      height="100%"
    />
  );
}
