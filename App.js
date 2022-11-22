import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import CadastroItens from "./src/pages/CadastroItens/cadastroItens";
import ListaItens from './src/pages/ListaItens/listaItens';
import DetalheItens from './src/pages/DetalheItens/detalheItens';
import Home from './src/pages/PaginaPrincipal/homePage';
import Login from './src/pages/Login/login';
import NewUser from './src/pages/NewUser/newUser';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


{/*function MyDrawer({navigation, route}) {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Home" component={Home} options={{headerTintColor: '#681B91'}}/>
      <Drawer.Screen name="Cadastro de Itens" component={CadastroItens}  options={{headerTintColor: '#681B91'}} />
      <Drawer.Screen name="Listagem de Itens" component={ListaItens} options={{headerTintColor: '#681B91'}} />
    </Drawer.Navigator>
  )
}*/}

export default function App({navigation, route}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="New User" component={NewUser} options={{ headerShown: false }} />
        <Stack.Screen name="HomeStack" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro de Itens" component={CadastroItens} />
        <Stack.Screen name="Listagem" component={ListaItens} />
        <Stack.Screen name="Detalhe de Itens" component={DetalheItens} />
        {/*<Stack.Screen name="Visualizar imagem" component={ImagemZoom} />*/}
      </Stack.Navigator>
    </NavigationContainer>      
    
  );
}