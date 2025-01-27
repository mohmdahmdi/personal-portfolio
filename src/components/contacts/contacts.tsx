"use client";

import { api } from "@/api/api";
import useAxios from "@/hooks/useAxios";
import { IContactData } from "@/interfaces/interfaces";
import Contact from "./contact";
import { GitHub, Google, Instagram, LinkedIn, Telegram, WhatsApp } from "@mui/icons-material";

const Contatcs = () => {
  const { data, loading } = useAxios(api, "/contact");

  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle case where data is not yet available or empty
  if (!data || !data.data) {
    return <div>No data available</div>;
  }

  // Access the first item in the data array
  const contacts: IContactData = data.data[0];

  return (
    <div className="grid grid-cols-4">
      <div className="col-start-2 col-span-2 grid grid-cols-2">
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
