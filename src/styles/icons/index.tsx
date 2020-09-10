import styled, { css } from 'styled-components';
import { Collection } from '@styled-icons/boxicons-solid';
import { LogOutCircle } from '@styled-icons/boxicons-regular';

const iconNavigationCss = css``;

export const DashboardIcon = styled(Collection)`
  ${iconNavigationCss}
`;

export const LogOutIcon = styled(LogOutCircle)`
  position: absolute;
  left: 0;
  top: 0;

  width: 60px;
  height: 60px;

  fill: #333;
`;
