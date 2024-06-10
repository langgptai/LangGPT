import React from 'react';
import Button from './Button';
import { COLORS } from '../lib/constants';
import removeButtonStyles from './Presets';
import Remove from './svg/Remove';

const PresetsOutside = React.memo(({ remove, apply, selected, preset }) => {
  const isSelected = preset.id === selected

  // console.log(isSelected);
  // console.log(preset.id);

  return (

    <div className={`preset-container ${isSelected ? 'preset-selected' : ''}`}  >
      <Button
        onClick={() => apply(preset)}
        disabled={isSelected}
        border={isSelected}
        selected={isSelected}
        hoverBackground={preset.backgroundColor}
        style={{
          height: '40px',
          borderRadius: '3px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'contain',
          backgroundImage: `url('${preset.icon}')`,
        }}
      />
      {preset.custom && (
        <Button
          center
          hoverBackground={COLORS.SECONDARY}
          background={COLORS.SECONDARY}
          onClick={() => remove(preset.id)}
          style={removeButtonStyles}
        >
          <Remove />
        </Button>
      )}
      <style jsx>
        {`
          .preset-container {
            display: flex;
            position: relative;
            flex: 1;
            margin-right: 8px;
          }

          .preset-container :global(button:focus) {
            box-shadow: inset 0px 0px 0px 1px ${COLORS.SECONDARY};
          }
          .preset-selected{
            border:1px solid red
          }
        `}
      </style>
    </div>
  )
})
export default PresetsOutside;
