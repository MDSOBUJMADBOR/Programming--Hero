import { updateUser } from '@/app/lib/actions';
import { getUserById } from '@/app/lib/data';
import { Button, Input, Label, Modal, TextField } from '@heroui/react';


const UserEditPage =async ({params}) => {
const { id } = await params;
const user = await getUserById(id);
console.log(user,'Edit use');


const updateUserWrapper =async (formData) => {
          'use server'
return updateUser( id , formData)
}

          return (
                    <div>
     <h2>Editing user: </h2>
<div className='w-1/2 mx-auto'>  
          <form action={updateUserWrapper}  className="flex flex-col gap-4">
                            <TextField className="w-full" name="name" defaultValue={user?.name} type="text">
                              <Label>Name</Label>
                              <Input placeholder="Enter your name" />
                            </TextField>
                            <TextField className="w-full" name="email" defaultValue={user?.email} type="email">
                              <Label>Email</Label>
                              <Input placeholder="Enter your email" />
                            </TextField>
                            <TextField className="w-full" name="role" defaultValue={user?.role}>
                              <Label>Role</Label>
                              <Input placeholder="Enter your role" />
                            </TextField>          
                            
                         
               <div className='flex'>
                    <Button slot="close" variant="secondary">
                     Cancel
                    </Button>
                    <Button type="submit" slot="close">Update User</Button>
               </div>
                    
                          </form>
</div>
                    </div>
          );
};

export default UserEditPage;