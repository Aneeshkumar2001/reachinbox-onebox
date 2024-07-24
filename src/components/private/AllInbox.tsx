/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { TbReload } from "react-icons/tb";

// Component for individual emails
const EmailItem = ({
  senderEmail,
  mailSubject,
  threadId,
  onMailSelect,
}: {
  senderEmail: string;
  mailSubject: string;
  threadId: number;
  onMailSelect: (threadId: number) => void;
}) => {
  const abbreviateSubject = (subject: string, maxWords: number) => {
    const words = subject.split(" ");
    return words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + " ..."
      : subject;
  };

  return (
    <div
      className="email-item border-t-2 dark:border-[#ffffff25] border-[#8b8b8b64] mx-8 py-4 cursor-pointer"
      onClick={() => onMailSelect(threadId)}
    >
      <div>
        <div className="flex justify-between">
          <div className="sender dark:text-white text-black text-lg font-normal">
            {senderEmail}
          </div>
          <div className="date dark:text-[#FCFCFC66] text-[#919EAB] font-thin pr-3">
            Mar 7
          </div>
        </div>
        <div className="subject py-2 dark:text-[#E1E0E0] text-gray-600 font-normal">
          {abbreviateSubject(mailSubject, 7)}
        </div>
        <div className="tags flex">
          <div className="tag-interested dark:bg-[#222426] bg-[#F0F0F0] px-3 py-1 rounded-2xl text-[#57E0A6] text-sm flex items-center">
            <GoDotFill className="mr-1 text-lg" />
            Interested
          </div>
          <div className="tag-campaign flex items-center dark:bg-[#222426] bg-[#F0F0F0] px-3 py-1 rounded-2xl dark:text-[#FFFFFF] text-black text-sm ml-2">
            <IoIosSend className="mr-1 text-lg" />
            Campaign Name
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for the inbox
const AllInbox = ({
  emails,
  onSelectMail,
}: {
  emails: any;
  onSelectMail: (threadId: number) => void;
}) => {
  const refreshInbox = async () => {
    const token = localStorage.getItem("token");
    await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
      headers: {
        Authorization: token,
      },
    });
    console.log("Inbox refreshed");
  };

  if (!Array.isArray(emails)) {
    console.error("Expected array for emails, got:", emails);
    return null;
  }

  return (
    <div className="inbox-container border-r-2 bg-[#FAFAFA] dark:bg-black dark:border-[#33383F] border-[#E0E0E0] h-full overflow-y-scroll no-scrollbar">
      <div className="inbox-header px-4 pt-4 flex justify-between">
        <div className="header-info px-4">
          <div className="title text-2xl py-3 text-[#4285F4] font-semibold flex items-center">
            All Inbox(es)
            <FaAngleDown className="ml-2 font-normal mt-1 cursor-pointer" />
          </div>
          <div className="selection-info dark:text-white text-black font-bold">
            {emails.length}/25{" "}
            <span className="text-[#7F7F7F] font-normal">Inboxes selected</span>
          </div>
        </div>
        <div
          className="refresh-btn p-3 mt-3 dark:bg-[#25262B] bg-white border border-gray-200 dark:border-gray-800 mr-4 rounded-xl h-min cursor-pointer"
          onClick={refreshInbox}
        >
          <TbReload className="text-black dark:text-white" />
        </div>
      </div>

      <div className="search-section my-4 px-8">
        <div className="search-bar relative">
          <input
            placeholder=" Search"
            className="search-input w-full dark:bg-[#23272C] bg-[#F4F6F8] rounded-md p-1 pl-8 border dark:border-[#FFFFFF1A] border-[#DFE3E8]"
          />
          <CiSearch className="search-icon absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
        <div className="filter-bar flex justify-between py-4">
          <div className="new-replies dark:text-white text-black">
            <span className="new-replies-count dark:bg-[#222426] bg-[#ECECEC] text-[#5C7CFA] px-2 py-1 rounded-3xl">
              {emails.length}
            </span>{" "}
            New Replies
          </div>
          <div className="sort-options flex items-center dark:text-white text-black">
            Newest <FaAngleDown className="ml-3 text-xl" />
          </div>
        </div>
      </div>

      <div className="emails-list">
        {emails.map((email: any) => (
          <EmailItem
            key={email.id}
            senderEmail={email.fromEmail}
            mailSubject={email.subject}
            threadId={email.threadId}
            onMailSelect={onSelectMail}
          />
        ))}
      </div>
    </div>
  );
};

export default AllInbox;
