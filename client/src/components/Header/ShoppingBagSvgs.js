import { memo } from "react";
const ShoppingBagSvgPath = (
  <path
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M12 9V4a3 3 0 0 0-6 0v5m9.92 10H2.08a1 1 0 0 1-1-1.077L2 6h14l.917 11.923A1 1 0 0 1 15.92 19Z"
  />
);
const ShoppingBagFillSvgPath = (
  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
);

const Svg = ({ className, fill, path }) => (
  <svg
    className={className}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    viewBox="0 0 18 20"
  >
    {path}
  </svg>
);

const ShoppingBagSvg = memo(({ className }) =>
  Svg({ className, path: ShoppingBagSvgPath, fill: "none" })
);

const ShoppingBagFillSvg = memo(({ className }) =>
  Svg({ className, path: ShoppingBagFillSvgPath, fill: "currentColor" })
);

export { ShoppingBagSvg, ShoppingBagFillSvg };
