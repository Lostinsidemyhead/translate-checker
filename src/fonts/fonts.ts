import { createGlobalStyle } from 'styled-components';
import RobotoBold from './Roboto-Bold.woff';
import RobotoRegular from './Roboto-Regular.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'Roboto-Bold';
        src: local('Roboto-Bold'), local('RobotoBold'),
        url(${RobotoBold}) format('woff');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto-Regular';
        src: local('Roboto-Regular'), local('RobotoRegular'),
        url(${RobotoRegular}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
`;