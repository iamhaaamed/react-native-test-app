import type {RouteProp as NRouteProp} from '@react-navigation/native';

import type {AuthStackParamList} from './auth-navigator';
import type {AppStackParamList} from './app-navigator';

export type RootStackParamList = AuthStackParamList & AppStackParamList;
// very important to type check useNavigation hook
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RouteProp<T extends keyof RootStackParamList> = NRouteProp<
  RootStackParamList,
  T
>;
