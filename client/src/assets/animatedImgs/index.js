import { check_webp_feature } from "../../utils/check_webp_feature";
const imagePaths = Array.from({ length: 3 }, (_, index) => ({
  gif: require(`./GSL${index + 1}.gif`),
  webp: require(`./GSL${index + 1}.webp`),
}));

const imgs = [];

const isWebpSupported = check_webp_feature("animation");
// const isWebpSupported = await check_webp_feature("animation");
imgs.push(
  ...(isWebpSupported
    ? imagePaths.map((image) => image.webp)
    : imagePaths.map((image) => image.gif))
);

const [animatedImg1, animatedImg2, animatedImg3] = [...imgs];

export { animatedImg1, animatedImg2, animatedImg3 };