import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from '../../global/global';
import Cadastro from '../pages/cadastro';
import Home from '../pages/home';
import Login from '../pages/login';
import MinhasVagas from '../pages/minhasVagas';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "MinhasVagas") {
            iconName = focused ? "cart" : "cart-outline";
          } 

          return (
            <MaterialCommunityIcons name={iconName} size={28} color={color} />
          );
        },
        tabBarActiveTintColor: theme.color,
        tabBarActiveBackgroundColor:theme.background,
        tabBarInactiveBackgroundColor:theme.background,
        tabBarInactiveTintColor: "#fff",
        tabBarShowLabel: false,

        tabBarStyle: {
          borderTopColor: "transparent",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTintColor: theme.color,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MinhasVagas"
        component={MinhasVagas}
        options={{
          headerTintColor: theme.color,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
      <Stack.Screen options={{headerShown: false}} name="Home" component={Tabs} />
      <Stack.Screen options={{headerShown: false}} name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}