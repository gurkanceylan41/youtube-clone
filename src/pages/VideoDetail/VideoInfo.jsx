import millify from "millify";
import { useState } from "react";

const VideoInfo = ({ video }) => {
  //*Açma kapama yapmak için expand(genişleme) değerini başta false yaptık.
  const [expand, setExpand] = useState(false);

  //* expand ?true ise açıklamanın tamamını yani açık halini :gelmiyorsa açıklamayı dilimle ve sonuna + ile ekleme yap.
  const text = expand
    ? video.description
    : video.description.slice(0, 300) + "...daha fazla";

  return (
    <div
      //* açıklamaya tıkladıgımızda expand değeri tersine döner.
      onClick={() => setExpand(!expand)}
      className="bg-[#1F1F1F] p-2 mt-4 cursor-pointer rounded hover:bg-opacity-80"
    >
      <div className="flex gap-4 mb-2">
        {/* millfy Kullanarak gelen sayıyı daha okunabilir hale getirdik. */}
        <p className="font-bold">{millify(video.viewCount)} Görüntülenme</p>

        {/* new Date ve toLocaleDateString kullanarak Yerele göre tarihi getirdik */}
        <p>
          {new Date(video?.publishDate).toLocaleDateString("tr", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>

      {/* split(bölünmüş) açıklamanın gelen boşluklarınıda vermek için map ile döndük ve span içerisinde döndüğümüz elemanı bastırdık.  */}
      <p>
        {text.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
};

export default VideoInfo;
