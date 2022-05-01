import React, { useState } from 'react';

import { Button } from '..';
import { SharedProps } from '../../shared/types';
import { cx } from '../../shared/helpers';

export type ReadMoreProps = {
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
  className?: string;

  /**
   * Appearence of the button.
   */
  appearance?: SharedProps['appearance'];
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
  className,
  appearance = 'primary',
  readMoreText = 'Read more',
  readLessText = 'Read less',
}: ReadMoreProps) => {
  const showPessadText = text.length <= min;
  const [showMore, setShowMore] = useState(false);
  const [primaryText, secondaryText] = getTextToShow({ text, min });

  return (
    <div
      className="flex flex-col w-full gap-4"
      title="read-more"
      aria-label="read-more"
    >
      {showPessadText && <p className={className}>{text}</p>}
      {!showPessadText && (
        <>
          <p
            className={cx(
              'text-gray-800 font-normal text-base leading-5 font-roboto',
              className
            )}
          >
            {primaryText}
            <span className={cx(showMore && 'hidden', !showMore && 'inline')}>
              ...
            </span>
            <span className={cx(showMore && 'inline', !showMore && 'hidden')}>
              {secondaryText}
            </span>
          </p>
          <Button
            className="self-start border-none hover:bg-blue-50"
            onClick={() => setShowMore(current => !current)}
            label={showMore ? readLessText : readMoreText}
            appearance={appearance}
            outlined
          />
        </>
      )}
    </div>
  );
};

export { ReadMore };
