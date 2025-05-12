"use client";

import { api } from "@/api/api";
import useAxios from "@/hooks/useAxios";
import { IContactData } from "@/interfaces/interfaces";
import Contact from "./contact";
import { GitHub, Google, Instagram, LinkedIn, Telegram, WhatsApp } from "@mui/icons-material";

const Contatcs = () => {
  // use this part if you want to use dynamic data from database
  ///////////////////////////////////////////////////////
  // const { data, loading } = useAxios(api, "/contact");

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!data || !data.data) {
  //   return <div>No data available</div>;
  // }

  // 
  ///////////////////////////////////////////////////////
  // this is the response of /contact api
  const data = {
    data: [
      {
        id: 1,
        whats_app: "...",
        gmail: "...",
        instagram: "...",
        linkedin: "...",
        github: "mohmdahmdi",
        telegram: "...",
      },
    ],
  };
  const contacts: IContactData = data.data[0];  
  return (
    <div className="grid grid-cols-4">
      <div className=" col-start-1 col-span-4  md:col-start-2 md:col-span-2 grid grid-cols-1 md:grid-cols-2">
        <Contact social={contacts.github} icon={<GitHub />} />
        <Contact social={contacts.gmail} icon={<Google />} />
        <Contact social={contacts.whats_app} icon={<WhatsApp />} />
        <Contact social={contacts.linkedin} icon={<LinkedIn />} />
        <Contact social={contacts.instagram} icon={<Instagram />} />
        <Contact social={contacts.telegram} icon={<Telegram />} />
      </div>
    </div>
  );
};

export default Contatcs;
