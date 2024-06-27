import { Ipost } from "@/interface/postInterface";
import { createRandomTimeStamp } from "@/utils/fakeData";

export async function getPosts() {
    const res = await fetch (`${process.env.NEXT_PUBLIC_BASE_API_URL}/posts`);
  
    if (!res.ok) {
      throw new Error(res.statusText)
    }
    
    let result : Ipost[] = await res.json()

    result = result.sort((a,b) => a.id-b.id)

    let addTime : Ipost[] = []

    let tempTime = 0
    result = result.map((item) => {
        tempTime = createRandomTimeStamp(new Date(tempTime) , new Date(Date.now() - (1000 * 60 * 60 * 24 * (result.length - item.id))))
        return({...item,updated_at : tempTime})
    })

    return result.reverse();
  }