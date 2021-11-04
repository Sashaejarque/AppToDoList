import React from 'react';
import { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
export const Check = () => {
  const [isSelected, setSelection] = useState(false);

  return <CheckBox style={{ width: 20, height: 20 }} value={isSelected} onValueChange={setSelection} />;
};
