import BannerMain from "@/components/banner/banner-main";
import CheckLogin from "@/components/check-login";
import DailyMain from "@/components/dailyMain/daily-main";
import NewStory from "@/components/newStory/new-story";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start w-full p-24 pt-[10px]">
      <CheckLogin/>
      <BannerMain/>
      <DailyMain/>
      <NewStory/>
    </div>
  );
}
