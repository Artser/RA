const TextRenderLine = ({value, onChange}) => {
	let changeHandler = function (event) {
		onChange(event.currentTarget.value.replace(/[^A-Za-z\s]/g, ''));
	}

	return (
		<div className="type-text">
			<textarea 
				name="text" 
				id="font-text" 
				cols="30" 
				rows="2" 
				placeholder="Введите текст для футболки"
				value={value}
				onChange={changeHandler}
				>
			</textarea>
		</div>
	);
};
