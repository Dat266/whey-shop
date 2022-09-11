function Input({ type, name, label, placeholder, className }) {
	return (
		<div>
			<input
				type={type}
				placeholder={placeholder}
				name={name}
				className={className}
			/>
			<label htmlFor={name}>{label}</label>
		</div>
	);
}

export default Input;
