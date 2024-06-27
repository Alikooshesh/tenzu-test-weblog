import PostBoxHomePage from "@/components/homePage/postBox";
import { Ipost } from "@/interface/postInterface";
import { getPosts } from "@/services/homePage/homePageServices";
import { timestampToGre } from "@/utils/dateAndTimeHandlers";
import { createRandomTimeStamp } from "@/utils/fakeData";

export default async function HomePage() {
  let postList:Ipost[] = []

  try{
    postList = await getPosts()
  }catch(err){
    alert(err)
  }

  return (
    <>
    <div className="w-full flex flex-col gap-[3rem]">
    {postList.map((item,index:number) => (
      <PostBoxHomePage 
        key={item.id}
        id={item.id}
        title={item.title}
        body={item.body}
        index={index}
        publishDate={timestampToGre(createRandomTimeStamp())}
      />
    ))}
    </div>
    </>
  );
}