import { createStackNavigator, createAppContainer } from 'react-navigation';

import List from './pages/List';
import Detail from './pages/Detail';
import Services from './pages/Services';


const Routes = createStackNavigator ({
    Home:{
	screen: List
    },
    Detail:{
	screen: Detail
    },
    Services:{
	screen: Services
    }
});

export default createAppContainer(Routes);
