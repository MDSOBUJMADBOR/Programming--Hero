  "use server"

import { addPost } from "@/database/postdb"
import { revalidatePath } from "next/cache"

  
 export  const handlePostAction = async (formData) => {
    
    const title = formData.get("title") 
    const desc = formData.get("desc")

    addPost({title, description: desc})
  
     revalidatePath('/server-action')


  }