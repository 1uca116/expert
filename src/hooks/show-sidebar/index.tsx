import { useLayout } from 'providers/BaseStoresProvider';
import { useCallback } from 'react';
import SidebarMainMenu from '../../components/elements/sidebar-main-menu';

export const useMainMenu = () => {
  const layout = useLayout();

  const showSidebar = useCallback(() => {
    layout.toggleSidebar(true, <SidebarMainMenu />);
  }, [layout]);

  return {
    showMainMenu: showSidebar,
  };
};
