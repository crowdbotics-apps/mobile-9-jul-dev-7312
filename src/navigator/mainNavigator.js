import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CalendarView8657Navigator from '../features/CalendarView8657/navigator';
import EmailAuth8656Navigator from '../features/EmailAuth8656/navigator';
import BlankScreen98655Navigator from '../features/BlankScreen98655/navigator';
import BlankScreen88654Navigator from '../features/BlankScreen88654/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
CalendarView8657: { screen: CalendarView8657Navigator },
EmailAuth8656: { screen: EmailAuth8656Navigator },
BlankScreen98655: { screen: BlankScreen98655Navigator },
BlankScreen88654: { screen: BlankScreen88654Navigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
