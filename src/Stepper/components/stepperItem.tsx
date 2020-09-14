import * as React from 'react';
import classNames from 'classnames';
import Icon from '../../Icon';
import Badge from '../../Badge';
export interface StepperItemProps<T> extends React.HTMLProps<T> {
  transition?: any;
  type?: 'attention' | 'information' | 'confirmation' | 'circle' | string;
  number?: number;
  typeClass?: 'confirmation' | 'current' | 'upcoming' | 'default';
  current?: boolean;
}

export const StepperItem = ({
  type,
  number,
  children,
  transition,
  typeClass = 'default',
  current,
  ...props
}: StepperItemProps<any>) => {
  const renderIcon = () => {
    if (['attention', 'information', 'confirmation'].includes(type)) {
      return <Icon type={`${type}-filled`} width="24" height="24"/>;
    } else if (number) {
      return <Badge>{number}</Badge>;
    }
    return <Icon type={type || 'circle'} width="24" height="24" />;
  };
  return (
    <div
      aria-current={current ? 'step' : undefined}
      role="listitem"
      {...props}
      className={classNames(
        'stepper__item',
        {[`stepper__item--${typeClass}`]: typeClass, [`stepper__item--transition-${transition}`]: transition},
        props.className
      )}
    >
      <span className="stepper__icon">{renderIcon()}</span>
      <span className="stepper__text">{children}</span>
    </div>
  );
};
export default StepperItem;
