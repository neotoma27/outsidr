// import React, { useState, useEffect } from 'react';
// import { getUsers } from '@/app/lib/data';

interface User {
  id: number;
  name: string;
  email: string;
}

async function getUsersData() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
  const res = await fetch(`${apiUrl}/users`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  // const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
  // const [users, setUsers] = useState<User[]>([]); 
  // const [newUser, setNewUser] = useState({ name: '', email: '' }); 
  // const [updateUser, setUpdateUser] = useState({ id: '', name: '', email: '' });

  // Fetch users
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`${apiUrl}/users`);
  //       const data = await response.json();
  //       setUsers(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, [apiUrl]);

  // // Create a user
  // const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(`${apiUrl}/users`, newUser);
  //     setUsers([response.data, ...users]);
  //     setNewUser({ name: '', email: '' });
  //   } catch (error) {
  //     console.error('Error creating user:', error);
  //   }
  // };

  // // Update a user
  // const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     await axios.put(`${apiUrl}/users/${updateUser.id}`, { name: updateUser.name, email: updateUser.email });
  //     setUpdateUser({ id: '', name: '', email: '' });
  //     setUsers(
  //       users.map((user) => {
  //         if (user.id === parseInt(updateUser.id)) {
  //           return { ...user, name: updateUser.name, email: updateUser.email };
  //         }
  //         return user;
  //       })
  //     );
  //   } catch (error) {
  //     console.error('Error updating user:', error);
  //   }
  // };

  // // Delete a user
  // const deleteUser = async (userId: number) => {
  //   try {
  //     await axios.delete(`${apiUrl}/users/${userId}`);
  //     setUsers(users.filter((user) => user.id !== userId));
  //   } catch (error) {
  //     console.error('Error deleting user:', error);
  //   }
  // };
  const usersData = await getUsersData()

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="space-y-4 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-800 text-center">User Management App</h1>

        {/* Display users */}
        <div className="space-y-2">
          {usersData.map((user: User) => (
            <div key={user.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
              <div className="bg-white shadow-lg rounded-lg p-2 mb-2 hover:bg-gray-100">
                <div className="text-sm text-gray-600">ID: {user.id}</div>
                <div className="text-lg font-semibold text-gray-800">{user.name}</div>
                <div className="text-md text-gray-700">{user.email}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
        // {/* Form to add new user */}
        // <form onSubmit={createUser} className="p-4 bg-blue-100 rounded shadow">
        //   <input
        //     placeholder="Name"
        //     value={newUser.name}
        //     onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        //     className="mb-2 w-full p-2 border border-gray-300 rounded"
        //   />

        //   <input
        //     placeholder="Email"
        //     value={newUser.email}
        //     onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        //     className="mb-2 w-full p-2 border border-gray-300 rounded"
        //   />
        //   <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600">
        //     Add User
        //   </button>
        // </form>

        // {/* Form to update user */}
        // <form onSubmit={handleUpdateUser} className="p-4 bg-green-100 rounded shadow">
        //   <input
        //     placeholder="User ID"
        //     value={updateUser.id}
        //     onChange={(e) => setUpdateUser({ ...updateUser, id: e.target.value })}
        //     className="mb-2 w-full p-2 border border-gray-300 rounded"
        //   />
        //   <input
        //     placeholder="New Name"
        //     value={updateUser.name}
        //     onChange={(e) => setUpdateUser({ ...updateUser, name: e.target.value })}
        //     className="mb-2 w-full p-2 border border-gray-300 rounded"
        //   />
        //   <input
        //     placeholder="New Email"
        //     value={updateUser.email}
        //     onChange={(e) => setUpdateUser({ ...updateUser, email: e.target.value })}
        //     className="mb-2 w-full p-2 border border-gray-300 rounded"
        //   />
        //   <button type="submit" className="w-full p-2 text-white bg-green-500 rounded hover:bg-green-600">
        //     Update User
        //   </button>
        // </form>
//   <button onClick={() => deleteUser(user.id)} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
//   Delete User
// </button>
}