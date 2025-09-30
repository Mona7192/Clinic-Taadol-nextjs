import { VideoCard } from '@/components/video-card';
import { videos } from '@/lib/data';

export default function VideosPage() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 text-right">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">گالری ویدیوها</h1>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
            مفاهیم روانشناسی را به زبانی ساده و در قالب ویدیوهای آموزشی بیاموزید.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
           {/* Duplicate for more content */}
           {videos.map(video => (
            <VideoCard key={`${video.id}-2`} video={{...video, id: `${video.id}-2`}} />
          ))}
        </div>
      </div>
    </div>
  );
}
