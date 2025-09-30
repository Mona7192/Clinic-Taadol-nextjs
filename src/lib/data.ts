export type Service = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type Article = {
  id: string;
  title: string;
  category: 'روانشناسی' | 'مشاوره' | 'توسعه فردی';
  summary: string;
  imageUrl: string;
  imageHint: string;
};

export type Video = {
  id: string;
  title: string;
  thumbnailUrl: string;
  thumbnailHint: string;
  videoUrl: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  imageHint: string;
  bio: string;
};

import { BrainCircuit, HeartHandshake, Sparkles, UserCheck } from 'lucide-react';

export const services: Service[] = [
  {
    id: 'counseling',
    title: 'مشاوره فردی و خانواده',
    description: 'ارائه خدمات مشاوره تخصصی برای بهبود روابط فردی و خانوادگی، مدیریت استرس و اضطراب.',
    icon: HeartHandshake,
  },
  {
    id: 'addiction',
    title: 'درمان اعتیاد',
    description: 'رویکردهای نوین و علمی برای ترک انواع اعتیادهای رفتاری و مواد مخدر با حمایت کامل.',
    icon: UserCheck,
  },
  {
    id: 'mental-skills',
    title: 'آموزش مهارت‌های ذهنی',
    description: 'کارگاه‌های آموزشی برای تقویت تمرکز، حافظه، و توانایی‌های شناختی برای موفقیت در زندگی.',
    icon: BrainCircuit,
  },
  {
    id: 'personal-development',
    title: 'توسعه و رشد فردی',
    description: 'برنامه‌های شخصی‌سازی شده برای رسیدن به اهداف، افزایش اعتماد به نفس و خودشناسی.',
    icon: Sparkles,
  },
];

export const articles: Article[] = [
  {
    id: 'balance-theory',
    title: 'آشنایی با نظریه تعادل زیستی-روانی',
    category: 'روانشناسی',
    summary: 'در این مقاله، به بررسی عمیق نظریه تعادل دکتر مختارپور و تاثیر آن بر سلامت روان می‌پردازیم.',
    imageUrl: 'https://picsum.photos/seed/article1/600/400',
    imageHint: 'brain balance',
  },
  {
    id: 'stress-management',
    title: 'راهکارهای مدیریت استرس در محیط کار',
    category: 'مشاوره',
    summary: 'استرس شغلی یکی از بزرگترین چالش‌های امروزی است. با راهکارهای عملی با آن مقابله کنید.',
    imageUrl: 'https://picsum.photos/seed/article2/600/400',
    imageHint: 'office stress',
  },
  {
    id: 'mindfulness',
    title: 'چگونه ذهن‌آگاهی را تمرین کنیم؟',
    category: 'توسعه فردی',
    summary: 'تمرینات ساده و روزمره برای افزایش حضور در لحظه و کاهش نشخوار فکری.',
    imageUrl: 'https://picsum.photos/seed/article3/600/400',
    imageHint: 'calm meditation',
  },
  {
    id: 'communication-skills',
    title: 'بهبود مهارت‌های ارتباطی در روابط',
    category: 'مشاوره',
    summary: 'ارتباط موثر، کلید روابط سالم است. یاد بگیرید چگونه بهتر گوش دهید و صحبت کنید.',
    imageUrl: 'https://picsum.photos/seed/article4/600/400',
    imageHint: 'people talking',
  },
];

export const videos: Video[] = [
    {
        id: 'intro-video',
        title: 'معرفی کلینیک تعادل و دکتر مختارپور',
        thumbnailUrl: 'https://picsum.photos/seed/video1/600/400',
        thumbnailHint: 'clinic interior',
        videoUrl: '#',
    },
    {
        id: 'anxiety-video',
        title: 'وبینار: چگونه بر اضطراب غلبه کنیم؟',
        thumbnailUrl: 'https://picsum.photos/seed/video2/600/400',
        thumbnailHint: 'woman thinking',
        videoUrl: '#',
    },
    {
        id: 'balance-video',
        title: 'مفهوم تعادل روانی به زبان ساده',
        thumbnailUrl: 'https://picsum.photos/seed/video3/600/400',
        thumbnailHint: 'zen stones',
        videoUrl: '#',
    },
];

export const teamMembers: TeamMember[] = [
    {
        id: 'hassan-mokhtarpoor',
        name: 'دکتر حسن مختارپور',
        role: 'بنیان‌گذار و روانشناس ارشد',
        imageUrl: 'https://picsum.photos/seed/team1/400/400',
        imageHint: 'professional man',
        bio: 'دکتر حسن مختارپور، مبدع نظریه "تعادل زیستی-روانی"، با بیش از ۲۰ سال سابقه در زمینه روانشناسی بالینی، به هزاران نفر در مسیر بهبود کیفیت زندگی کمک کرده است. ایشان متخصص در درمان اختلالات اضطرابی و افسردگی هستند.',
    },
    {
        id: 'sara-ahmadi',
        name: 'سارا احمدی',
        role: 'مشاور خانواده و زوج‌درمانگر',
        imageUrl: 'https://picsum.photos/seed/team2/400/400',
        imageHint: 'professional woman',
        bio: 'خانم احمدی با تخصص در زمینه روابط عاطفی و خانواده، به زوج‌ها و خانواده‌ها کمک می‌کند تا با چالش‌های خود به شیوه‌ای سازنده روبرو شوند و روابطی سالم‌تر و پایدارتر بسازند.',
    },
    {
        id: 'reza-mohammadi',
        name: 'رضا محمدی',
        role: 'متخصص درمان اعتیاد',
        imageUrl: 'https://picsum.photos/seed/team3/400/400',
        imageHint: 'friendly man',
        bio: 'آقای محمدی با استفاده از جدیدترین متدهای درمانی، به افراد کمک می‌کند تا از بند اعتیادهای مختلف رها شوند و کنترل زندگی خود را دوباره به دست بگیرند.',
    },
];
