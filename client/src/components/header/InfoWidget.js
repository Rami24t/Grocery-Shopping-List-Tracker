import React from "react";
import { ShoppingBagSvg, ShoppingBagFillSvg } from "./ShoppingBagSvgs";

// Abstract badge component for displaying the info badge
const InfoBadge = ({ title, value, icon, darkMode, style }) => {
  const infoBadgeCommonStyle = `absolute inline-flex items-center justify-center text-xs font-bold border-2 rounded-full ${
    darkMode ? "border-gray-800" : "border-gray-300"
  }`;
  return (
    <div title={title} className={`${style} ${infoBadgeCommonStyle}`}>
      {value || 0} <span className="sr-only">{title.toLowerCase()}</span>
      {icon}
    </div>
  );
};

// Badge component for displaying the "Haves" info badge
const HavesBadge = ({ haves, needs, darkMode }) => {
  const color = darkMode ? "text-white" : "text-green-300";
  return (
    <InfoBadge
      title="Haves"
      value={haves}
      icon={<ShoppingBagFillSvg className={`${color} inline w-1 h-1`} />}
      darkMode={darkMode}
      style={`text-white bg-green-700 -top-2 ${
        !needs ? "-right-2" : "-left-2"
      } animate-bounce w-7 h-7`}
    />
  );
};

// Badge component for displaying the "Needs" info badge
const NeedsBadge = ({ needs, darkMode }) => {
  const color = darkMode ? "text-orange-100" : "text-orange-200";
  return (
    <InfoBadge
      title="Needs"
      value={needs}
      icon={<ShoppingBagSvg className={`${color} inline w-1 h-1`} />}
      darkMode={darkMode}
      style={`text-white ${darkMode ? "bg-orange-700" : "bg-orange-700"} ${
        needs ? "-top-2 -right-2" : "-top-2 right-4"
      } w-7 h-7`}
    />
  );
};

// Badge component for displaying the total info badge
const ItemsBadge = React.memo(({ items, darkMode }) => (
  <InfoBadge
    title="Total Items"
    value={items}
    darkMode={darkMode}
    style={`-bottom-2 -left-1.5 w-6 h-6 text-gray-300 bg-blue-800`}
  />
));

// Badge component for displaying the completion percentage badge
const CompletionPercentageBadge = ({ haves, items, darkMode }) => {
  const completionPercentage = Math.round((100 * haves) / items) || 0;
  return (
    <InfoBadge
      title="Completion Percentage"
      value={completionPercentage}
      icon={
        <span className={`inline text-[10px] font-bold animate-pulse`}>%</span>
      }
      darkMode={darkMode}
      style={`text-gray-300 bg-teal-700 -bottom-2 -right-1.5 w-6 h-6`}
    />
  );
};

function InfoWidget({ haves, needs, darkMode, handleClick }) {
  const items = haves + needs;
  const both = needs && haves;

  const showHavesBadge = haves > 0;
  const showNeedsBadge = needs > 0;

  const colorComplete = darkMode ? "text-green-300" : "text-green-800";
  const colorIncomplete = darkMode ? "text-orange-100" : "text-orange-800";

  return (
    <div className="app-header-info-widget mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
      <div
        onClick={handleClick}
        title="Items Info Widget"
        className={`app-header-info-widget-container ${
          darkMode ? "text-white bg-gray-700" : "text-gray-800 bg-gray-300"
        } bg-opacity-60 min-w-[90px] mx-auto opacity-95 relative rounded-lg px-5 h-11 text-sm font-medium transition flex items-center justify-center`}
      >
        {!showNeedsBadge ? (
          <ShoppingBagFillSvg className={`${colorComplete} inline w-4 h-4`} />
        ) : (
          <ShoppingBagSvg className={`${colorIncomplete} inline w-4 h-4`} />
        )}
        <span
          className={`relative ml-3 cursor-pointer ${
            darkMode ? "filter brightness-75 " : ""
          }`}
        >
          📋
        </span>
        {Boolean(needs) && (
          <CompletionPercentageBadge
            haves={haves}
            items={items}
            darkMode={darkMode}
          />
        )}
        {Boolean(both) && <ItemsBadge items={items} darkMode={darkMode} />}
        {showHavesBadge && (
          <HavesBadge
            haves={haves}
            needs={showNeedsBadge}
            darkMode={darkMode}
          />
        )}
        {showNeedsBadge && <NeedsBadge needs={needs} darkMode={darkMode} />}
      </div>
    </div>
  );
}

export default React.memo(InfoWidget);
