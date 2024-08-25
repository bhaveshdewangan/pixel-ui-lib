import './button.css';
import { default as cn } from 'classnames';
import { FC, ReactNode } from 'react';

export enum EButtonTypes {
  button = 'button',
  submit = 'submit',
  reset = 'reset'
}

export enum EButtonVariant {
  Primary = 'Primary',
  Secondary = 'Secondary'
}

export interface IButtonProps {
  children: ReactNode;
  onClick?: () => void;
  classes?: string;
  type?: EButtonTypes;
  variant?: EButtonVariant;
  isLoading?: boolean;
  isDisabled?: boolean;
}

export const Button: FC<IButtonProps> = ({ children, onClick, classes = '', isLoading, ...props }: IButtonProps) => {
  const variant = props.variant || EButtonVariant.Primary;

  const buttonStyles = cn(
    'pul-rounded-md pul-px-4 pul-py-3 pul-text-sm pul-shadow-sm pul-leading-none',
    'focus-visible:pul-outline focus-visible:pul-outline-2 focus-visible:pul-outline-offset-2',
    'focus-visible:pul-outline-green-600 pul-flex pul-items-center pul-justify-center pul-gap-2',
    {
      '!pul-bg-pul-pixel-blue/50': isLoading
    },
    {
      'pul-bg-pul-pixel-blue pul-hover:pul-bg-pul-pixel-blue/80 pul-text-white':
        variant === EButtonVariant.Primary && !props.isDisabled,
      'pul-bg-pul-pixel-blue pul-hover:pul-bg-pul-pixel-blue/50 pul-text-white pul-opacity-40':
        variant === EButtonVariant.Primary && props.isDisabled,
      'pul-bg-pul-white pul-hover:pul-bg-pul-pixel-white/80 pul-text-pul-pixel-blue pul-border pul-border-pul-pixel-blue':
        variant === EButtonVariant.Secondary
    },
    classes
  );
  return (
    <button
      type={props.type || EButtonTypes.button}
      disabled={isLoading || props.isDisabled}
      onClick={() => {
        typeof onClick === 'function' && onClick();
      }}
      className={`${buttonStyles}`}
      // className={''}
    >
      {children}
    </button>
  );
};
