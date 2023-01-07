import classNames from 'classnames/bind';

import FormGroup from './FormGroup';

import styles from './Form.module.scss';

const cx = classNames.bind(styles);

const InputField = ({ type, label, register, errors, className }) => {
  return (
    <FormGroup errors={errors} label={label}>
      <input type={type} {...register} />
    </FormGroup>
  );
};
export default InputField;
