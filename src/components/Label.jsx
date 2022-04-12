const formLabel = ({ label, ...rest }) => (
  <label htmlFor={label} style={{ minWidth: '120px' }} {...rest}>
    <h3>{label}</h3>
  </label>
);

export default formLabel;
