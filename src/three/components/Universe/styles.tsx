import { Canvas } from 'react-three-fiber';
import Styled from 'styled-components';

export const FullScreenCanvas = Styled(Canvas)`
    width: 100vw;
    height: 100vh !important;
    background-color: rgb(28, 25, 42);
`;