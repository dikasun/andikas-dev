interface ImageLoaderProps {
  src: string;
}

export default function imageKitLoader({ src }: ImageLoaderProps) {
  if (src[0] === "/") src = src.slice(1);
  let urlEndpoint = "https://ik.imagekit.io/4o6binhtw/andikas/";
  if (urlEndpoint[urlEndpoint.length - 1] === "/")
    urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
  return `${urlEndpoint}/${src}`;
}
