import React, { useState } from 'react';

import { Button } from '..';
import { Container, Text } from './styles';
import { SharedProps } from '../../shared/types';

export type ReadMoreProps = SharedProps & {
  /**
   * Text to show in the component.
   */
  text: string;

  /**
   * Minimum number of characters to show before showing the read more button.
   */
  min?: number;

  /**
   * Text to show on the read more button.
   */
  readMoreText?: string;

  /**
   * Text to show on the read less button.
   */
  readLessText?: string;

  /**
   * className to be applied to the text.
   */
  textClassName?: string;
};

type GetTextToShowProps = Pick<ReadMoreProps, 'text' | 'min'>;

const MIN = 250;

function getTextToShow({ text, min = MIN }: GetTextToShowProps) {
  const characters = ['.', ',', ' ', '?', '!', '\n'];
  let i = min;
  let j = min;

  while (true) {
    if (characters.includes(text[i])) return [text.slice(0, i), text.slice(i)];

    if (characters.includes(text[j])) return [text.slice(0, j), text.slice(j)];

    i++;
    j--;
  }
}

const ReadMore = ({
  text,
  min = MIN,
  appearance,
  textClassName,
  readMoreText = 'Read more',
  readLessText = 'Read less',
}: ReadMoreProps) => {
  const [showMore, setShowMore] = useState(false);
  const [primaryText, secondaryText] = getTextToShow({ text, min });

  const showPessadText = text.length <= min;

  return (
    <Container title="read-more" aria-label="read-more">
      {showPessadText && <p className={textClassName}>{text}</p>}
      {!showPessadText && (
        <>
          <Text className={textClassName} showMore={showMore}>
            {primaryText}
            <span className="dots">...</span>
            <span className="secondary-text">{secondaryText}</span>
          </Text>
          <Button
            onClick={() => setShowMore(current => !current)}
            label={showMore ? readLessText : readMoreText}
            appearance={appearance}
            outlined
          />
        </>
      )}
    </Container>
  );
};

export { ReadMore };
