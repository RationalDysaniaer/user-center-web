import { PageHeaderWrapper } from '@ant-design/pro-components';
import React, { PropsWithChildren } from 'react';
const Admin: React.FC = (props: PropsWithChildren<{}>) => {
  const { children } = props;
  return <PageHeaderWrapper>{children}</PageHeaderWrapper>;
};
export default Admin;
