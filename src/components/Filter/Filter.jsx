import PropTypes from 'prop-types';

import { Input, Label } from './Filter.styled';

export const Filter = ({ onChange}) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
