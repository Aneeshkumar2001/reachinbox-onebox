/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import axios from "axios";
import AllInbox from "@/components/private/AllInbox";
import Replies from "@/components/private/Replies";
import DetailPage from "@/components/private/DetailPage";

function Inbox() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedThread, setSelectedThread] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }

        const res = await axios.get(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          {
            headers: {
              Authorization: token,
            },
          }
        );

        setData(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error as string);
        setLoading(false);
      }
    };

    const interval = setInterval(fetchData, 3000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="bg-[#ECEFF3] dark:bg-black dark:text-white text-[#5B5F66] flex h-screen w-full justify-center items-center">
        Loading ...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#ECEFF3] dark:bg-black dark:text-white text-[#5B5F66] flex h-screen w-full justify-center items-center">
        Error loading data: {error}
      </div>
    );
  }

  const setReplyMail = (threadId: any) => {
    setSelectedThread(threadId);
  };

  return (
    <div className="bg-[#ECEFF3] dark:bg-black text-white pt-16 flex w-full h-screen">
      <div className="w-1/4">
        <AllInbox emails={data} onSelectMail={setReplyMail} />
      </div>
      <div className="w-2/4">
        <Replies selectedThread={selectedThread} />
      </div>
      <div className="w-1/4">
        <DetailPage />
      </div>
    </div>
  );
}

export default Inbox;
