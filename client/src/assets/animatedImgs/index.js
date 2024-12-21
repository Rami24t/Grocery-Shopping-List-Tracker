import { check_webp_feature } from "../../utils/check_webp_feature";
const imagePaths = Array.from({ length: 3 }, (_, index) => ({
  // gif: require(`./GSL${index + 1}.gif`),
  webp: require(`./GSL${index + 1}.webp`),
}));

const imgs = [];

const isWebpSupported = check_webp_feature("animation");
// const isWebpSupported = await check_webp_feature("animation");
imgs.push(
  ...(isWebpSupported
    ? imagePaths.map((image) => image.webp)
    : "https://image.pollinations.ai/prompt/vegetables?width=380&height=380&nologo=true&model=flux-pro&seed="
    // : "https://image.pollinations.ai/prompt/vegetables?width=380&height=380&nologo=true&model=flux-pro&private=true&seed="
    // : "https://source.unsplash.com/random/380x380/?vegetables?"
    //  imagePaths.map((image) => image.gif)
    )
);

const [animatedImg1, animatedImg2, animatedImg3] = [...imgs];

export { animatedImg1, animatedImg2, animatedImg3 };