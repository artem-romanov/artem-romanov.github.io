import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #82a5a7;
  font-size: 20px;
  
  &:hover ${MailText} {
    color: red;
  }
`;

const MailIcon = styled.div`
  font-size: 30px;
  margin-right: 10px;
`;

const MailText = styled.div`
`;

const EmailInfo = ({
  email,
}) => {
  return (
    <Link
      href={`mailto:${email}`}
    >
      <MailIcon>📧</MailIcon>
      <MailText>{email}</MailText>
    </Link>
  )
};

export default EmailInfo;

EmailInfo.propTypes = {
  email: PropTypes.string,
};

EmailInfo.defaultProps = {
  email: 'xenox2048@gmail.com',
};
