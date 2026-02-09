import React, { useEffect, useState } from 'react'
import supabase from '../helper/supabaseClient'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate=useNavigate();
  const [loading,setLoading]=useState(true);
  const [user,setUser]=useState(null);

  useEffect(()=>{
    const checkSession=async()=>{
    const data=await supabase.auth.getSession();
    if(!data.session){
       navigate("/login");
      return;
    }
    setUser(data?.session.user);
    setLoading(false)
  }
  checkSession();
  },[navigate])

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error.message);
      return;
    }

    navigate("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-8">
      <div className="max-w-xl mx-auto bg-zinc-800 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-2">
          Welcome ,
        </h2>
        <p className="text-zinc-400 mb-6">
          You are logged in as <span className="text-blue-400">{user.email}</span>
        </p>

        <button
          onClick={signOut}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-semibold transition"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}

export default Dashboard
