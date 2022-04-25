import React, { useState } from 'react';

import { Container } from './styles';

type Props = {
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
   * className to be applied to the read more/less button.
   */
  buttonClassName?: string;

  /**
   * className to be applied to the text.
   */
  textClassName?: string;
};

type GetTextToShowProps = Pick<Props, 'text' | 'min'>;

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
  textClassName,
  buttonClassName,
  readMoreText = 'Read more',
  readLessText = 'Read less',
}: Props) => {
  const [showMore, setShowMore] = useState(false);
  const [primaryText, secondaryText] = getTextToShow({ text, min });

  const showPessadText = text.length <= min;

  return (
    <Container title="Read more" aria-label="read more">
      {showPessadText && <p>{text}</p>}
      {!showPessadText && (
        <>
          <p className={textClassName}>
            {`${primaryText}${showMore ? secondaryText : '...'}`}
          </p>
          <button
            type="button"
            aria-label="read button"
            className={buttonClassName}
            onClick={() => setShowMore(current => !current)}
          >
            {showMore ? readLessText : readMoreText}
          </button>
        </>
      )}
    </Container>
  );
};

export type { Props as ReadMoreProps };
export { ReadMore };
