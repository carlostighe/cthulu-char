import React from 'react';
function CharacterSkillFilter({ handleBlur }) {

  const handleInputChange = (event) => {
    setTimeout(() => handleBlur(event.target.value), 300);
  };

  return (
    <div className='uk-card-body uk-flex-inline uk-flex-between uk-width-1-1 little-pad'>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Filter Skills by name..."
        className='uk-flex uk-input uk-form-small uk-width-1-1'
      />
    </div>
  );
}

export default CharacterSkillFilter;
