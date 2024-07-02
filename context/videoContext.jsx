import { createContext, useEffect, useState } from "react";
import api from "../src/utils/api";
import { categories } from "../src/constants";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const type = selectedCategory.type;

  useEffect(() => {
    //* Seçilen kategorinin type menu ise fonksiyonu durdur
    if (type === "menu") return;

    //* Yüklemeyi true çek
    setIsLoading(true);

    const url =
      type === "home"
        ? "/home"
        : type === "trending"
        ? "/trending"
        : type === "category"
        ? `/search?query=${selectedCategory.name}`
        : "";

    api
      .get(url)
      .then((res) => setVideos(res.data?.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [selectedCategory]);

  return (
    <VideoContext.Provider
      value={{
        videos,
        error,
        isLoading,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
