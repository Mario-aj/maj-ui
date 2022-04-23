import * as React from 'react';

import { Container, Item, ItemIndicator } from './styles';

type Props = {
  /**
   * Class name of the component.
   */
  className?: string;

  /**
   * Array of tabs to render, each tab should have a label and an id.
   */
  tabs: Array<{
    label: string | React.ReactNode;
    id: string | number;
  }>;

  /**
   * The id of the tab that should be selected.
   */
  selectedTab?: string | number;

  /**
   * Color of the active tab.
   */
  indicatorColor?: string;

  /**
   * Color of the active tab text.
   */
  textColor?: string;

  /**
   * The appearance of the tab.
   */
  appearance?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'light';
};

const Tabs = ({ tabs, selectedTab, textColor, ...props }: Props) => {
  const [selected, setSelected] = React.useState(selectedTab);

  return (
    <Container>
      {tabs.map(tab => (
        <div key={tab.id}>
          <Item
            isActive={selected === tab.id}
            onClick={() => setSelected(tab.id)}
            color={textColor}
            {...props}
          >
            {tab.label}
          </Item>
          <ItemIndicator
            indicatorColor={props.indicatorColor}
            appearance={props.appearance}
            isActive={selected === tab.id}
          />
        </div>
      ))}
    </Container>
  );
};

export type { Props as TabsProps };
export { Tabs };
