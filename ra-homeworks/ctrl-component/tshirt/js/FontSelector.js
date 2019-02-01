const FontSelector = ({fonts, onSelect}) => {

  let changeHandler = function (event) {
    onSelect(fonts.find(font => font.name === event.currentTarget.value));
  }

  return (
    <div className="font-picker">
        {fonts.map((font, index) => {
          return (
            <div className="grid center font-item">
              <input
                type="radio"
                name="font"
                value={font.name}
                id={font.name}
                onChange={changeHandler}
              />
              <label htmlFor={font.name} className="grid-1">
                <PictureFont
                  text={font.name.slice(0, 3)}
                  path={font.path}
                  key={index}
                />
              </label>
            </div>
          );
        }
      )}
    </div>
  );
};