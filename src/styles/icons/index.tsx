import styled, { css } from 'styled-components';
import { Collection } from '@styled-icons/boxicons-solid';
import { LogOutCircle } from '@styled-icons/boxicons-regular';
import { AddShoppingCart } from '@styled-icons/material';
import { Settings } from '@styled-icons/evaicons-solid/';

const iconNavigationCss = css`
  width: 40px;
  height: 40px;
`;

export const DashboardIcon = styled(Collection)`
  ${iconNavigationCss}
`;

export const CreateBudgetIcon = styled(AddShoppingCart)`
  ${iconNavigationCss}
`;

export const SettingsIcon = styled(Settings)`
  ${iconNavigationCss}
`;

export const LogOutIcon = styled(LogOutCircle)`
  position: absolute;
  left: 0;
  top: 0;

  width: 60px;
  height: 60px;

  fill: var(--black);
  opacity: 0.8;
`;
