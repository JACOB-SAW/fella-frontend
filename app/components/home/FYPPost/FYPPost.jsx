import MediaPost from "./PostMedia";
import TextPost from "./PostText";

export default function FYPPost({ post }) {
  if (post.type === "media") {
    return <MediaPost post={post} />;
  }

  return <TextPost post={post} />;
}