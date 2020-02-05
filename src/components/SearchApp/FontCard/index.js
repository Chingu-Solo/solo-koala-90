import React from "react";

const FontCard = ({ fontFamily, styles }) => {
  return (
    <section>
      <div>
        <h1>{fontFamily}</h1>
        <h2>({styles.length}) styles</h2>
      </div>
      <div className="fontPreview">
        <textarea
          value="All their equipment and instruments are alive"
          style={{
            fontFamily: fontFamily,
            fontWeight: "regular",
            fontSize: "40px"
          }}
        ></textarea>
      </div>
    </section>
  );
};

export default FontCard;
