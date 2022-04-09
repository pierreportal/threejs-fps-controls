import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Ship } from '../three/Ship';

export const Routing: React.FunctionComponent = () => {
    return <Routes>
        <Route path="/portfolio" element={<Ship location={'portfolio'} />} />
        <Route path="/about" element={<Ship location={'about'} />} />
        <Route path="/contact" element={<Ship location={'contact'} />} />
        <Route path="/*" element={<Ship location={'contact'} />} />
    </Routes>
};