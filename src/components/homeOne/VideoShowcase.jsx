import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import allImages from "../helper/imageProvider";

const VideoShowcase = () => {
  const { videoShowcase } = allImages;
  return (
    <section className="py-[40px] sm:py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
      <Container size={"lg"}>
        <div className="w-full">
          <Image
            width={1600}
            height={690}
            src={videoShowcase}
            alt="video showcase"
            className="w-full h-auto rounded-[4px] sm:rounded-[5px] md:rounded-[6px]"
          />
        </div>
      </Container>
    </section>
  );
};

export default VideoShowcase;