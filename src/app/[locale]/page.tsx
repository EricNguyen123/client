import BannerMain from "@/components/banner/banner-main";
import DailyMain from "@/components/dailyMain/daily-main";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 pt-[10px]">
      <BannerMain/>
      <DailyMain/>
    </main>
  );
}
