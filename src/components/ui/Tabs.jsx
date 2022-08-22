import React, {useCallback, useState} from "react";
import tabsStyles from "../../styles/tabs.module.css";
import cn from "classnames";

const TabContent = ({ title, content }) => (
  <div className={tabsStyles.tabContent}>
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

const Tabs = ({ items }) => {
  const [ active, setActive ] = useState(null);

  const openTab = useCallback((e) => {
    setActive(+e.target.dataset.index);
  }, [])

  return (
    <div className={cn(tabsStyles.uiTab)}>
      <div className={tabsStyles.tab}>
        {items.map(({title, content}, i) => (
          <button
            className={i === active ? cn(tabsStyles.tabLinks, tabsStyles.active) : tabsStyles.tabLinks}
            onClick={openTab}
            data-index={i}
          >{title}</button>
        ))}
      </div>
      {items[active] && <TabContent {...items[active]} />}
    </div>
  );
}

export default React.memo(Tabs);
