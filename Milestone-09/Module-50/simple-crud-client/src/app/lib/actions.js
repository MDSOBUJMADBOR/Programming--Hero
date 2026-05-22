import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createUser = async (formData) => {
          'use server'
const newUser = Object.fromEntries(formData.entries());

// console.log(newUser,"newUser");
const res = await fetch("http://localhost:5000/users",{
method: 'POST',
headers: {
   'Content-type' : 'application/json'
},
body: JSON.stringify(newUser) 
});
const data = await res.json();
console.log('data after post',data);
 if(data.insertedId){
revalidatePath('/users');
 }
return data;
}

export const updateUser = async (id ,formData) => {
   'use server';
   const updateUser = Object.fromEntries(formData.entries());
   const res = await fetch(`http://localhost:5000/users/${id}`,{
      method: 'PATCH',
      headers: {
         'content-type' : 'application/json'
      },
      body: JSON.stringify(updateUser)
   })
   const data = await res.json();
   console.log('after updateUser',data);

if(data.modifiedCount > 0) {
   revalidatePath('/users');
   redirect('/users');
}
    
}


export  const deleteUser = async (userId) => {
"use server"
 const res = await fetch(`http://localhost:5000/users/${userId}`,{
          method: 'DELETE'
});
const data =await res.json();
console.log(data,'after delete');
if(data.deletedCount > 0){
revalidatePath("/users");
}
return data;
}
