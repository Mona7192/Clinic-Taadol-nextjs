// components/EducationalVideos.tsx
import React from "react";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

type Video = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl?: string;
  slug: string; // لینک به صفحه ویدیو
};

type Props = {
  mainVideo: Video;
  sideVideos: Video[];
};

const EducationalVideos: React.FC<Props> = ({ mainVideo, sideVideos }) => {
  return (
    <section className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold">
          فیلم‌های آموزشی با دکتر مختارپور
        </h2>
        <Link
          href="/videos"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          مشاهده همه
        </Link>
      </div>

      {/* Videos Row */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Video */}
        <div className="lg:w-1/2 relative group">
          <video
            src={mainVideo.videoUrl}
            className="w-full h-auto rounded-lg"
            controls
            poster={mainVideo.thumbnail}
          />
          {/* Overlay متن روی ویدیو */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg text-white">
            <h3 className="text-lg sm:text-xl font-semibold">{mainVideo.title}</h3>
            <p className="text-sm mt-1">{mainVideo.description}</p>
            <Link
              href={`/videos/${mainVideo.slug}`}
              className="mt-2 inline-block bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
            >
              مشاهده ویدیو
            </Link>
          </div>
        </div>

        {/* Side Videos فقط با Thumbnail و Play Icon */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          {sideVideos.map((video) => (
            <div
              key={video.id}
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            >
              {/* Thumbnail با Play Icon */}
              <div className="relative w-full sm:w-1/2 overflow-hidden rounded-lg shadow-md">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <FaPlay className="text-white text-3xl" />
                </div>
              </div>

              {/* متن و دکمه */}
              <div className="flex flex-col justify-center w-full sm:w-1/2">
                <h4 className="font-semibold">{video.title}</h4>
                <p className="text-gray-600 text-sm mt-1">{video.description}</p>
                <Link
                  href={`/videos/${video.slug}`}
                  className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                >
                  مشاهده ویدیو
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationalVideos;
