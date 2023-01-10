import classNames from 'classnames/bind';

import FormGroup from './FormGroup';
import Input from '../Input';

import styles from './Form.module.scss';

const cx = classNames.bind(styles);

const InputField = ({
  type,
  name,
  label,
  prefix,
  register,
  errors,
  className,
}) => {
  return (
    <FormGroup errors={errors} name={name}>
      <Input
        className={className}
        type={type}
        label={label}
        prefix={prefix}
        {...register}
      />
    </FormGroup>
  );
};
export default InputField;
