import React from 'react';

type Props = {
  /**
   * Meu novo componente
   */
  text: string;

  /**
   * The text color property
   */
  color: string;
};

/**
 * Componente de  teste, vamos começar a codificar isso agora.
 */
export const Test = ({ text, color }: Props) => (
  <div>
    <h1 className="text-center text-3xl" style={{ color }}>
      {text}
    </h1>
    <span className="text-xs text-blue-600 uppercase cursor-pointer opacity-70 hover:underline hover:opacity-100 transition-all duration-300">
      @maj/react-ui
    </span>
  </div>
);

export type { Props as TestProps };
