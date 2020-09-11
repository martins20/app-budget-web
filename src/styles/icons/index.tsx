import styled, { css } from 'styled-components';
import { Collection } from '@styled-icons/boxicons-solid';
import { LogOutCircle } from '@styled-icons/boxicons-regular';
import { AddShoppingCart } from '@styled-icons/material';
import { Settings } from '@styled-icons/evaicons-solid/';
import { Search } from '@styled-icons/evaicons-solid/';
import { NotificationsNone } from '@styled-icons/material/';
import { DotsVerticalRounded } from '@styled-icons/boxicons-regular';
import { PencilAlt } from '@styled-icons/heroicons-outline/';
import { CaretDown } from '@styled-icons/boxicons-regular/';

const iconNavigationCss = css`
  width: 40px;
  height: 40px;
`;

const iconHeaderCss = css`
  width: 30px;
  height: 30px;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

// Navigation Icons

export const DashboardIcon = styled(Collection)`
  ${iconNavigationCss}
`;

export const CreateBudgetIcon = styled(AddShoppingCart)`
  ${iconNavigationCss}
`;

export const SettingsIcon = styled(Settings)`
  ${iconNavigationCss}
`;

// Header Icons

export const NotificationIcon = styled(NotificationsNone)`
  ${iconHeaderCss}
`;

export const SearchIcon = styled(Search)`
  ${iconHeaderCss}
`;

export const NoteIcon = styled(PencilAlt)`
  ${iconHeaderCss}
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

// Current Budget Icons
export const OptionsIcon = styled(DotsVerticalRounded)`
  width: 30px;
  height: 30px;

  fill: var(--black);
`;

// Heading Icons
export const FilterIcon = styled(CaretDown)`
  width: 30px;
  height: 30px;

  fill: var(--black);
`;
