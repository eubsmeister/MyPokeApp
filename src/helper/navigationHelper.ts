import { NavigationContainerRef } from '@react-navigation/native'

let navigationref: NavigationContainerRef<any> | null = null

export const setTopNavigationRef = (ref : NavigationContainerRef<any> | null) => {
    navigationref = ref
}

export const navigate = (name: string, params?: any) => {
    if(navigationref) {
        navigationref.navigate(name, params)
    }
}