import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './navigation/StackNavigation'

export default function App() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}
