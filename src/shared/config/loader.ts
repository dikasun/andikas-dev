interface ImageLoaderProps {
  src: string;
}

export default function imageKitLoader({ src }: ImageLoaderProps) {
  if (src[0] === "/") src = src.slice(1);
  let urlEndpoint = process.env.IMAGEKIT_URL || "";
  if (urlEndpoint[urlEndpoint.length - 1] === "/")
    urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
  return `${urlEndpoint}/${src}`;
}
