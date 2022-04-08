import React from "react";

type Props = {
  /**
   * Meu novo componente
   */
  text: string;
};

/**
 * Componente de  teste, vamos começar a codificar isso agora.
 */
export const Test = ({ text = "" }: Props) => (
  <div>
    <h1>{text}</h1>
  </div>
);

export type { Props as TestProps };
