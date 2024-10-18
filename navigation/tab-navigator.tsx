import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import type { StackScreenProps } from '@react-navigation/stack'

import type { RootStackParamList } from '.'
import { HeaderButton } from '../components/header-button'
import { TabBarIcon } from '../components/tab-bar-icon'
import One from '../screens/one'
import Two from '../screens/two'

const Tab = createBottomTabNavigator()

type Props = StackScreenProps<RootStackParamList, 'TabNavigator'>

export default function TabLayout({ navigation }: Props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}
    >
      <Tab.Screen
        name="One"
        component={One}
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => <HeaderButton onPress={() => navigation.navigate('Modal')} />,
        }}
      />
      <Tab.Screen
        name="Two"
        component={Two}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tab.Navigator>
  )
}
