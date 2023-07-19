import React from "react";
import { ShoppingBagSvg, ShoppingBagFillSvg } from "./ShoppingBagSvgs";

// Abstract badge component for displaying the info badge
const InfoBadge = ({ title, value, icon, dark, style }) => {
  const infoBadgeCommonStyle = `absolute inline-flex items-center justify-center text-xs font-bold border-2 rounded-full  ${
    dark ? "border-gray-800" : "border-white"
  }`;
  return (
    <div title={title} className={`${style} ${infoBadgeCommonStyle}`}>
      {value || 0} <span className="sr-only">{title.toLowerCase()}</span>
      {icon}
    </div>
  );
};

// Badge component for displaying the "Haves" info badge
const HavesBadge = ({ haves, needs, dark }) => {
  const color = dark ? "text-white" : "text-gray-800";
  return (
    <InfoBadge
      title="Haves"
      value={haves}
      icon={<ShoppingBagFillSvg className={`${color} inline w-1 h-1`} />}
      dark={dark}
      style={`text-white bg-green-700 -top-2 ${
        !needs ? "-right-2" : "-left-2"
      } animate-bounce w-7 h-7`}
    />
  );
};

// Badge component for displaying the "Needs" info badge
const NeedsBadge = ({ needs, dark }) => {
  const color = dark ? "text-orange-100" : "text-gray-800";
  return (
    <InfoBadge
      title="Needs"
      value={needs}
      icon={<ShoppingBagSvg className={`${color} inline w-1 h-1`} />}
      dark={dark}
      style={`text-white bg-orange-800 ${
        needs ? "-top-2 -right-2" : "-top-2 right-4"
      } w-7 h-7 animate-pulse`}
    />
  );
};

// Badge component for displaying the total info badge
const ItemsBadge = React.memo(({ items, dark }) => (
  <InfoBadge
    title="Total Items"
    value={items}
    dark={dark}
    style={`-bottom-2 -left-1.5 w-6 h-6 text-gray-300 bg-blue-800`}
  />
));

// Badge component for displaying the completion percentage badge
const CompletionPercentageBadge = ({ haves, items, dark }) => {
  const completionPercentage = Math.round((100 * haves) / items) || 0;
  return (
    <InfoBadge
      title="Completion Percentage"
      value={completionPercentage}
      icon={<span className={`inline text-[10px] font-bold`}>%</span>}
      dark={dark}
      style={`text-gray-300 bg-teal-700 -bottom-2 -right-1.5 w-6 h-6`}
    />
  );
};

function InfoWidget({ haves, needs, dark }) {
  const items = haves + needs;
  const both = needs && haves;

  const showHavesBadge = haves > 0;
  const showNeedsBadge = needs > 0;

  const colorComplete = dark ? "text-green-300" : "text-gray-800";
  const colorIncomplete = dark ? "text-orange-100" : "text-gray-800";

  return (
    <div className="app-header-info-widget mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
      <div
        title="Items Info Widget"
        className="app-header-info-widget-container text-white bg-gray-700 bg-opacity-60 min-w-[90px] mx-auto opacity-95 relative rounded-lg px-5 py-2.5 text-sm font-medium transition flex items-center justify-center"
      >
        {!showNeedsBadge ? (
          <ShoppingBagFillSvg className={`${colorComplete} inline w-4 h-4`} />
        ) : (
          <ShoppingBagSvg className={`${colorIncomplete} inline w-4 h-4`} />
        )}
        <span className="ml-3">📋 </span>
        {Boolean(items) && (
          <CompletionPercentageBadge haves={haves} items={items} dark={dark} />
        )}
        {Boolean(both) && <ItemsBadge items={items} dark={dark} />}
        {showHavesBadge && (
          <HavesBadge haves={haves} needs={showNeedsBadge} dark={dark} />
        )}
        {showNeedsBadge && <NeedsBadge needs={needs} dark={dark} />}
      </div>
    </div>
  );
}

export default React.memo(InfoWidget);
