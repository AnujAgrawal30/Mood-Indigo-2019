import { createDrawerNavigator } from 'react-navigation'

import HomeScreen from './DrawerNavigator/HomeScreen'
import BlogScreen from './DrawerNavigator/BlogScreen'
import ContactUsScreen from './DrawerNavigator/ContactUsScreen'
import DeveloperScreen from './DrawerNavigator/DeveloperScreen'
import GuidlineScreen from './DrawerNavigator/GuidlineScreen'
import IdeationScreen from './DrawerNavigator/IdeationScreen'
import NewBlogScreen from './DrawerNavigator/NewBlogScreen'
import NotificationScreen from './DrawerNavigator/NotificationScreen'
import ProfileScreen from './DrawerNavigator/ProfileScreen'

const AppDrawerNavigator = createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: ({}) => ({
        title: 'Home',
      })
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: ({}) => ({
        title: 'Profile',
      })
    },
    BlogScreen: {
      screen: BlogScreen,
      navigationOptions: ({  }) => ({
        title: 'Blogs',
      })
    },
    NotificationScreen: {
      screen: NotificationScreen,
      navigationOptions: ({  }) => ({
        title: 'Notifications',
      })
    },
    IdeationScreen: {
      screen: IdeationScreen,
      navigationOptions: ({  }) => ({
        title: 'Ideation',
      })
    },
    NewBlogScreen: {
      screen: NewBlogScreen,
      navigationOptions: ({  }) => ({
        title: 'New Blog',
      })
    },
    GuidlineScreen: {
      screen: GuidlineScreen,
      navigationOptions: ({  }) => ({
        title: 'Guidlines',
      })
    },
    ContactUsScreen: {
      screen: ContactUsScreen,
      navigationOptions: ({  }) => ({
        title: 'Contact Us',
      })
    },
    DeveloperScreen: {
      screen: DeveloperScreen,
      navigationOptions: ({  }) => ({
        title: 'Developers',
      })
    },
  },
  {
    initialRouteName: 'HomeScreen',
  }
)

export default AppDrawerNavigator;