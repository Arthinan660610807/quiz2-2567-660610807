import Image from "next/image";
import styles from "./page.module.css";
import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import Reply from "@/components/Reply";
import { ReplyProps } from "@/libs/types";
import { PostOwnnerProps } from "@/libs/types";
import { CommentProps } from "@/libs/types";
import { useState } from "react";


export default function Home() {

  const [PostOwnnerProps] =useState({
    ImagePath : /public/profileImages/ee56ba71-aada-40c6-92cc-755c9e5f0d8a.jpg,
    username:Arthinan Changsawang
    id : 660610807,
    likes : 1
  });

  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        
        {/* Comment Example */}
        
        {/* Reply Example */}
        

        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
