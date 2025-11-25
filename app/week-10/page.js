"use client";

import { useUserAuth } from "../contexts/AuthContext";
import Link from "next/link";

export default function LoginPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      {!user ? (
        <>
          <h1>Welcome to Shopping List</h1>
          <button onClick={handleLogin}>Login with GitHub</button>
        </>
      ) : (
        <>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleLogout}>Logout</button>
          <br />
          <Link href="/week-10/shopping-list">Go to Shopping List</Link>
        </>
      )}
    </main>
  );
}
