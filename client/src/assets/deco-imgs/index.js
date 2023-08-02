import { check_webp_feature } from "../../utils/check_webp_feature";
const images = Array.from({ length: 72 }, (_, index) => ({
  jpg: require(`./deco (${index + 1}).jpg`),
  webp: require(`./deco (${index + 1}).webp`),
}));

const decoImgs = ["https://source.unsplash.com/random/380x380/?vegetables?"];

// Check webp and push images
async function loadImages() {
  const isWebpSupported = await check_webp_feature("lossy");
  decoImgs.push(
    ...(isWebpSupported
      ? images.map((image) => image.webp)
      : images.map((image) => image.jpg))
  );
}
await loadImages();

export default decoImgs;
