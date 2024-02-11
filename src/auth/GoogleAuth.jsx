import React, { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import useAuthModal from "../hooks/useAuthModal";
import Logo from "../assets/logo.webp";
import { useNavigate } from "react-router";

const GoogleAuth = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const authModal = useAuthModal();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const userData = async () => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: "application/json",
          },
        }
      );
      setProfile(res.data);
      console.log(res.data);
      localStorage.setItem("id", JSON.stringify(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      userData();
    }
  }, [user]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("id"));
    setProfile(data);
    console.log("data");
    console.log(data);
  }, []);

  const getToken = async (name, email, picture) => {
    console.log(name, email, picture);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/authenticate",
        {
          name,
          email,
          picture,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("register")
      authModal.onOpen();
    } catch (error) {
      console.error("Error", error.message);
    }
  };

  useEffect(() => {
    if (profile && profile.length !== 0) {
      getToken({
        name: profile.name,
        email: profile.email,
        picture: profile.picture,
      });
    }
  }, [profile]);

  return (
    <>
      {profile && profile.length !== 0 ? (
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10 rounded-full"
            src={profile.picture}
            alt="image"
          />
          <p className="font-semibold">
            {profile.name.charAt(0).toUpperCase() + profile.name.slice(1)}
          </p>
        </div>
      ) : (
        <button
          className="flex items-center rounded-xl border-2  p-1 "
          onClick={() => login()}
        >
          <img src={Logo} alt="" width={25} height={25} />
          <p>Google</p>
        </button>
      )}
    </>
  );
};
export default GoogleAuth;
