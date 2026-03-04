import React, { useContext } from 'react';
import './Loader.css';
import { LoadingContext } from '../../Contexts/LoadingContext';

function Loader() {
  const { loading } = useContext(LoadingContext);
  if (!loading) return null;

  return (
    <div className="loader-overlay">
      <div className="loader" />
    </div>
  );
}

export default Loader;
