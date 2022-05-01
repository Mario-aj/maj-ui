/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from 'react';

import { SharedProps } from '../../shared/types';
import { cx, BG_APPEARANCE, TEXT_APPEARANCE } from '../../shared/helpers';

type TabProps = {
  label: string | React.ReactNode;
  id: string | number;
};
export type TabsProps = {
  /**
   * Class name of the component.
   */
  className?: string;

  /**
   * Array of tabs to render, each tab should have a label and an id.
   */
  tabs: Array<TabProps>;

  /**
   * The id of the tab that should be selected.
   */
  selectedTab?: string | number;

  /**
   * The id list of the tabs that should be disabled.
   */
  disabledTabs?: Array<string> | Array<number>;

  /**
   * Callback function that is called when a tab is selected. The selected tab is passed as an argument.
   */
  onSelect?: (selectedTab: TabProps) => void;

  /**
   *  The tab's text color.
   */
  textColor?: string;

  /**
   * The tab's indicator color.
   */
  indicatorColor?: string;

  /**
   *  The appearance of the component.
   */
  appearance?: SharedProps['appearance'];
};

const Tabs = ({
  tabs,
  onSelect,
  textColor,
  selectedTab,
  indicatorColor,
  disabledTabs = [],
  appearance = 'primary',
}: TabsProps) => {
  const [selected, setSelected] = useState(selectedTab);

  const handleClick = useCallback(
    (tab: TabProps) => {
      if (disabledTabs.includes(tab.id as never)) return;

      onSelect && onSelect(tab);
      setSelected(tab.id);
    },
    [disabledTabs]
  );

  return (
    <div className="flex flex-wrap items-center gap-4 mb-4">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={cx(
            'border-none bg-transparent select-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 font-medium leading-5 text-base tracking-wide flex-shrink-0 transition-all duration-300 ease-in-out',
            selected === tab.id && !appearance && TEXT_APPEARANCE.primary,
            selected === tab.id && appearance && TEXT_APPEARANCE[appearance]
          )}
          onClick={() => handleClick(tab)}
          disabled={disabledTabs.includes(tab.id as never)}
        >
          <span className="inline-block px-3 py-0" style={{ color: textColor }}>
            {tab.label}
          </span>
          <div
            className={cx(
              'block relative -bottom-2 left-0 w-full h-0.5 rounded-sm transition-all duration-300 ease-in-out',
              selected === tab.id && appearance && BG_APPEARANCE[appearance]
            )}
            style={{ backgroundColor: indicatorColor }}
          />
        </button>
      ))}
    </div>
  );
};

export { Tabs };
