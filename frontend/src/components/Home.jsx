import React, { useEffect } from "react";
import Auth from "./Auth";
import axios from "axios";

export default function Home() {
  Auth();

  const API = "http://127.0.0.1:3005/api/quote/getquote";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(API, {
            headers : {
                "x-access-token" : localStorage.getItem('token')
            }
        })
        console.log(response)
      } catch (err) {
        console.log(err);
      }
    }
    fetchData()
  }, []);

  return <div>Home</div>;
}
