import {ImageLoaderProps} from "next/dist/shared/lib/image-config";

const normalizeSrc = (src: string) => src.replace(/^\//, "");

export default function cloudinaryLoader({src, width, quality}: ImageLoaderProps) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'otfusion';
  if (!cloudName) {
    throw new Error(
      "NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is required in the environment"
    );
  }
  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "auto"}`];
  return `https://res.cloudinary.com/${cloudName}/image/upload/${params.join(",")}/${normalizeSrc(src)}`;
}