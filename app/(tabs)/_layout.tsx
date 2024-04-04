import { Tabs, usePathname } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const RouterTabs = () => {
  return (
    <Tabs
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black",
          display: usePathname() === 'index' ? 'none' : 'flex',
        },

      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => focused
            ? <MaterialCommunityIcons color="white" name="home" size={24} />
            : <MaterialCommunityIcons color="white" name="home-outline" size={24} />,
        }}
      />
      <Tabs.Screen
        name="details"
        options={{
          title: "Bets",
          href: { pathname: "/details", params: { user: "evanbacon" } },
          tabBarIcon: ({ focused }) => focused
            ? <MaterialCommunityIcons color="white" name="dice-multiple" size={24} />
            : <MaterialCommunityIcons color="white" name="dice-multiple-outline" size={24} />,
        }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: usePathname()  === '/counter' ? "Let it Sink in" : "Stats",
          tabBarIcon: ({ focused }) => focused
            ? <MaterialCommunityIcons color="white" name="countertop" size={24} />
            : <MaterialCommunityIcons color="white" name="counter" size={24} />,
        }}
      />
      <Tabs.Screen name="index" options={{ href: null, }} />
    </Tabs>
  );
};

export default RouterTabs;
