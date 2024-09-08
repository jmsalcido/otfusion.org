"use client";
import NextImage, {ImageProps} from "next/image";
import cloudinaryLoader from "@/lib/cloudinary";

export default function Image(props: ImageProps) {
  return <NextImage {...props} loader={cloudinaryLoader} />;
}