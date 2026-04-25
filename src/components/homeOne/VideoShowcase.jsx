import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import allImages from "../helper/imageProvider";

const VideoShowcase = () => {
  const {videoShowcase} =  allImages
  return (
    <section className="py-[120px]">
      <Container size="lg">
        <div className=" ">
          <Image  width={1600} height={690}  src={videoShowcase} alt="video showcase"  className=" rounded-[6px] " />
        </div>
      </Container>
    </section>
  );
};

export default VideoShowcase;
