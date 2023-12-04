import { memo, useRef } from "react";
import { TopFooter, BottomFooter, footerStyles } from "./components";
import useOnScreen from "../../hooks/useInView";

function Footer({ darkMode }) {
  const ref = useRef(null);
  const inView = useOnScreen(ref);

  return (
    <footer
      id="footer"
      ref={ref}
      className={`${inView ? "" : footerStyles.footer.outOfView}
      ${footerStyles.footer.common} ${
        darkMode ? footerStyles.footer.dark : footerStyles.footer.light
      }`}
    >
      <div className={footerStyles.container.common}>
        <TopFooter darkMode={darkMode} />

        <hr
          className={`${footerStyles.hr.common} ${
            darkMode ? footerStyles.hr.dark : footerStyles.hr.light
          }`}
        />

        <BottomFooter darkMode={darkMode} />
      </div>
    </footer>
  );
}

export default memo(Footer);
