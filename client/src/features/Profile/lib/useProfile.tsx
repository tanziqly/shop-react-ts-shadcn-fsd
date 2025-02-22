import { useState } from "react";
import { updateProfile } from "../api/profileApi";

export const useProfile = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = async () => {
    try {
      await updateProfile({ name, lastname, email, password });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  return {
    name,
    setName,
    lastname,
    setLastname,
    email,
    setEmail,
    password,
    setPassword,
    handleSave,
  };
};
