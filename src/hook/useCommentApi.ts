interface Comment {
  id?: number; // optional when sending new comment (before it's saved)
  name: string;
  comment: string;
}

import { useEffect, useState } from "react";
import axios from "axios";


const API_URL = "http://localhost:3001/comments";

export const useComments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchComments = async () => {
    try {
      const res = await axios.get<Comment[]>(API_URL);
      setComments(res.data);
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    } finally {
      setLoading(false);
    }
  };

  const addComment = async (comment: Omit<Comment, "id">) => {
    try {
      const res = await axios.post<Comment>(API_URL, comment);
      setComments((prev) => [...prev, res.data]);
    } catch (error) {
      console.error("Failed to add comment:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return { comments, loading, addComment };
};
