import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen"
import RestaurantScreen from "./screens/RestaurantScreen";
import CartScreen from "./screens/CartScreen";

import OrderPreparing from "./screens/OrderPreparing";
import DeliveryScreen from "./screens/DeliveryScreen";
import { Provider } from 'react-redux'
import { store } from "./store";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
<Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={HomeScreen} name="Home"  />
      <Stack.Screen component={RestaurantScreen} name="Restaurant"  />
      <Stack.Screen component={CartScreen} name="Cart" options={{presentation:'modal'}} />
      <Stack.Screen component={OrderPreparing} name="OrderPreparing" options={{presentation:'fullScreenModal'}} />
      <Stack.Screen component={DeliveryScreen} name="Delivery" options={{presentation:'fullScreenModal'}} />

      </Stack.Navigator>
    </NavigationContainer>
    

    </Provider>

  );
}
