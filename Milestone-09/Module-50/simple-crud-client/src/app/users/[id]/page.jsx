import { getUserById } from '@/app/lib/data';

const UserDetailsPage = async ({ params }) => {
const { id } = await params;
const user = await getUserById(id);
// console.log(user,"all user");


  return (
    <div>
      <h2>User Details</h2>

      <p><strong>Name:</strong> {user?.name}</p>
      <p><strong>Email:</strong> {user?.email}</p>
      <p><strong>Role:</strong> {user?.role}</p>
    </div>
  );
};

export default UserDetailsPage;